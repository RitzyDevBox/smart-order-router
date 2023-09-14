import { ChainId } from '@uniswap/sdk-core';
import { computePoolAddress, Pool } from '@uniswap/v3-sdk';
import retry from 'async-retry';
import _ from 'lodash';
import { IUniswapV3PoolState__factory } from '../../types/v3/factories/IUniswapV3PoolState__factory';
import { V3_CORE_FACTORY_ADDRESSES } from '../../util/addresses';
import { log } from '../../util/log';
import { poolToString } from '../../util/routes';
import { computeZkPoolAddress } from '../../util/zksyncComputePoolAddress';
export class V3PoolProvider {
    /**
     * Creates an instance of V3PoolProvider.
     * @param chainId The chain id to use.
     * @param multicall2Provider The multicall provider to use to get the pools.
     * @param retryOptions The retry options for each call to the multicall.
     */
    constructor(chainId, multicall2Provider, retryOptions = {
        retries: 2,
        minTimeout: 50,
        maxTimeout: 500,
    }) {
        this.chainId = chainId;
        this.multicall2Provider = multicall2Provider;
        this.retryOptions = retryOptions;
        // Computing pool addresses is slow as it requires hashing, encoding etc.
        // Addresses never change so can always be cached.
        this.POOL_ADDRESS_CACHE = {};
    }
    async getPools(tokenPairs, providerConfig) {
        const poolAddressSet = new Set();
        const sortedTokenPairs = [];
        const sortedPoolAddresses = [];
        for (const tokenPair of tokenPairs) {
            const [tokenA, tokenB, feeAmount] = tokenPair;
            const { poolAddress, token0, token1 } = this.getPoolAddress(tokenA, tokenB, feeAmount);
            if (poolAddressSet.has(poolAddress)) {
                continue;
            }
            poolAddressSet.add(poolAddress);
            sortedTokenPairs.push([token0, token1, feeAmount]);
            sortedPoolAddresses.push(poolAddress);
        }
        log.debug(`getPools called with ${tokenPairs.length} token pairs. Deduped down to ${poolAddressSet.size}`);
        const [slot0Results, liquidityResults] = await Promise.all([
            this.getPoolsData(sortedPoolAddresses, 'slot0', providerConfig),
            this.getPoolsData(sortedPoolAddresses, 'liquidity', providerConfig),
        ]);
        log.info(`Got liquidity and slot0s for ${poolAddressSet.size} pools ${(providerConfig === null || providerConfig === void 0 ? void 0 : providerConfig.blockNumber)
            ? `as of block: ${providerConfig === null || providerConfig === void 0 ? void 0 : providerConfig.blockNumber}.`
            : ``}`);
        const poolAddressToPool = {};
        const invalidPools = [];
        for (let i = 0; i < sortedPoolAddresses.length; i++) {
            const slot0Result = slot0Results[i];
            const liquidityResult = liquidityResults[i];
            // These properties tell us if a pool is valid and initialized or not.
            if (!(slot0Result === null || slot0Result === void 0 ? void 0 : slot0Result.success) ||
                !(liquidityResult === null || liquidityResult === void 0 ? void 0 : liquidityResult.success) ||
                slot0Result.result.sqrtPriceX96.eq(0)) {
                const [token0, token1, fee] = sortedTokenPairs[i];
                invalidPools.push([token0, token1, fee]);
                continue;
            }
            const [token0, token1, fee] = sortedTokenPairs[i];
            const slot0 = slot0Result.result;
            const liquidity = liquidityResult.result[0];
            const pool = new Pool(token0, token1, fee, slot0.sqrtPriceX96.toString(), liquidity.toString(), slot0.tick);
            const poolAddress = sortedPoolAddresses[i];
            poolAddressToPool[poolAddress] = pool;
        }
        if (invalidPools.length > 0) {
            log.info({
                invalidPools: _.map(invalidPools, ([token0, token1, fee]) => `${token0.symbol}/${token1.symbol}/${fee / 10000}%`),
            }, `${invalidPools.length} pools invalid after checking their slot0 and liquidity results. Dropping.`);
        }
        const poolStrs = _.map(Object.values(poolAddressToPool), poolToString);
        log.debug({ poolStrs }, `Found ${poolStrs.length} valid pools`);
        return {
            getPool: (tokenA, tokenB, feeAmount) => {
                const { poolAddress } = this.getPoolAddress(tokenA, tokenB, feeAmount);
                return poolAddressToPool[poolAddress];
            },
            getPoolByAddress: (address) => poolAddressToPool[address],
            getAllPools: () => Object.values(poolAddressToPool),
        };
    }
    getPoolAddress(tokenA, tokenB, feeAmount) {
        const [token0, token1] = tokenA.sortsBefore(tokenB)
            ? [tokenA, tokenB]
            : [tokenB, tokenA];
        const cacheKey = `${this.chainId}/${token0.address}/${token1.address}/${feeAmount}`;
        const cachedAddress = this.POOL_ADDRESS_CACHE[cacheKey];
        if (cachedAddress) {
            return { poolAddress: cachedAddress, token0, token1 };
        }
        let poolAddress = '';
        switch (this.chainId) {
            case ChainId.ZKSYNC: {
                poolAddress = computeZkPoolAddress({
                    factoryAddress: V3_CORE_FACTORY_ADDRESSES[this.chainId],
                    tokenA: token0,
                    tokenB: token1,
                    fee: feeAmount,
                });
                break;
            }
            default: {
                poolAddress = computePoolAddress({
                    factoryAddress: V3_CORE_FACTORY_ADDRESSES[this.chainId],
                    tokenA: token0,
                    tokenB: token1,
                    fee: feeAmount,
                });
                break;
            }
        }
        this.POOL_ADDRESS_CACHE[cacheKey] = poolAddress;
        return { poolAddress, token0, token1 };
    }
    async getPoolsData(poolAddresses, functionName, providerConfig) {
        const { results, blockNumber } = await retry(async () => {
            return this.multicall2Provider.callSameFunctionOnMultipleContracts({
                addresses: poolAddresses,
                contractInterface: IUniswapV3PoolState__factory.createInterface(),
                functionName: functionName,
                providerConfig,
            });
        }, this.retryOptions);
        log.debug(`Pool data fetched as of block ${blockNumber}`);
        return results;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9vbC1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcm92aWRlcnMvdjMvcG9vbC1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFTLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFhLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sS0FBa0MsTUFBTSxhQUFhLENBQUM7QUFDN0QsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUE4RDNFLE1BQU0sT0FBTyxjQUFjO0lBS3pCOzs7OztPQUtHO0lBQ0gsWUFDWSxPQUFnQixFQUNoQixrQkFBc0MsRUFDdEMsZUFBbUM7UUFDM0MsT0FBTyxFQUFFLENBQUM7UUFDVixVQUFVLEVBQUUsRUFBRTtRQUNkLFVBQVUsRUFBRSxHQUFHO0tBQ2hCO1FBTlMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUlyQjtRQWpCSCx5RUFBeUU7UUFDekUsa0RBQWtEO1FBQzFDLHVCQUFrQixHQUE4QixFQUFFLENBQUM7SUFnQnhELENBQUM7SUFFRyxLQUFLLENBQUMsUUFBUSxDQUNuQixVQUF1QyxFQUN2QyxjQUErQjtRQUUvQixNQUFNLGNBQWMsR0FBZ0IsSUFBSSxHQUFHLEVBQVUsQ0FB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