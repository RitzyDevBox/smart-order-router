/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DepricatedChainId, Token } from '@rtz-dex-tools/sdk-core';
import { FeeAmount, Pool } from '@rtz-dex-tools/v3-sdk';
import JSBI from 'jsbi';
import _ from 'lodash';

import { unparseFeeAmount } from '../../util/amounts';
import { WRAPPED_NATIVE_CURRENCY } from '../../util/chains';
import { log } from '../../util/log';
import { ProviderConfig } from '../provider';
import {
  ARB_ARBITRUM,
  BTC_BNB,
  BUSD_BNB,
  CELO,
  CELO_ALFAJORES,
  CEUR_CELO,
  CEUR_CELO_ALFAJORES,
  CUSD_CELO,
  CUSD_CELO_ALFAJORES,
  DAI_ARBITRUM,
  DAI_AVAX,
  DAI_BNB,
  DAI_CELO,
  DAI_CELO_ALFAJORES,
  DAI_GOERLI,
  DAI_MAINNET,
  DAI_MOONBEAM,
  DAI_OPTIMISM,
  DAI_OPTIMISM_GOERLI,
  DAI_POLYGON_MUMBAI,
  DAI_UNICHAIN,
  ETH_BNB,
  OP_OPTIMISM,
  USDB_BLAST,
  USDCE_ZKSYNC,
  USDC_ARBITRUM,
  USDC_ARBITRUM_GOERLI,
  USDC_AVAX,
  USDC_BASE,
  USDC_BASE_SEPOLIA,
  USDC_BNB,
  USDC_ETHEREUM_GNOSIS,
  USDC_GOERLI,
  USDC_MAINNET,
  USDC_MOONBEAM,
  USDC_OPTIMISM,
  USDC_OPTIMISM_GOERLI,
  USDC_POLYGON,
  USDC_SEPOLIA,
  USDC_SONEIUM,
  USDC_UNICHAIN,
  USDC_UNICHAIN_SEPOLIA,
  USDC_WORLDCHAIN,
  USDC_ZKSYNC,
  USDT_ARBITRUM,
  USDT_BNB,
  USDT_GOERLI,
  USDT_MAINNET,
  USDT_MONAD_TESTNET,
  USDT_OPTIMISM,
  USDT_OPTIMISM_GOERLI,
  WBTC_ARBITRUM,
  WBTC_GNOSIS,
  WBTC_GOERLI,
  WBTC_MAINNET,
  WBTC_MOONBEAM,
  WBTC_OPTIMISM,
  WBTC_OPTIMISM_GOERLI,
  WBTC_WORLDCHAIN,
  WETH_POLYGON,
  WLD_WORLDCHAIN,
  WMATIC_POLYGON,
  WMATIC_POLYGON_MUMBAI,
  WSTETH_MAINNET,
  WXDAI_GNOSIS,
} from '../token-provider';

import { IV3PoolProvider } from './pool-provider';
import { IV3SubgraphProvider, V3SubgraphPool } from './subgraph-provider';

type ChainTokenList = {
  readonly [chainId in DepricatedChainId]: Token[];
};

const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [DepricatedChainId.MAINNET]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.MAINNET]!,
    DAI_MAINNET,
    USDC_MAINNET,
    USDT_MAINNET,
    WBTC_MAINNET,
    WSTETH_MAINNET,
  ],
  [DepricatedChainId.GOERLI]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.GOERLI]!,
    USDT_GOERLI,
    USDC_GOERLI,
    WBTC_GOERLI,
    DAI_GOERLI,
  ],
  [DepricatedChainId.SEPOLIA]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.SEPOLIA]!, USDC_SEPOLIA],
  [DepricatedChainId.OPTIMISM]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.OPTIMISM]!,
    USDC_OPTIMISM,
    DAI_OPTIMISM,
    USDT_OPTIMISM,
    WBTC_OPTIMISM,
    OP_OPTIMISM,
  ],
  // todo: once subgraph is created
  [DepricatedChainId.OPTIMISM_SEPOLIA]: [
    //   WRAPPED_NATIVE_CURRENCY[DepricatedChainId.OPTIMISM_SEPOLIA]!,
  ],
  [DepricatedChainId.ARBITRUM_ONE]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ARBITRUM_ONE]!,
    WBTC_ARBITRUM,
    DAI_ARBITRUM,
    USDC_ARBITRUM,
    USDT_ARBITRUM,
    ARB_ARBITRUM,
  ],
  [DepricatedChainId.ARBITRUM_GOERLI]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ARBITRUM_GOERLI]!,
    USDC_ARBITRUM_GOERLI,
  ],
  [DepricatedChainId.ARBITRUM_SEPOLIA]: [
    // WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ARBITRUM_SEPOLIA]!,
  ],
  [DepricatedChainId.OPTIMISM_GOERLI]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.OPTIMISM_GOERLI]!,
    USDC_OPTIMISM_GOERLI,
    DAI_OPTIMISM_GOERLI,
    USDT_OPTIMISM_GOERLI,
    WBTC_OPTIMISM_GOERLI,
  ],
  [DepricatedChainId.POLYGON]: [USDC_POLYGON, WETH_POLYGON, WMATIC_POLYGON],
  [DepricatedChainId.POLYGON_MUMBAI]: [
    DAI_POLYGON_MUMBAI,
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.POLYGON_MUMBAI]!,
    WMATIC_POLYGON_MUMBAI,
  ],
  [DepricatedChainId.CELO]: [CELO, CUSD_CELO, CEUR_CELO, DAI_CELO],
  [DepricatedChainId.CELO_ALFAJORES]: [
    CELO_ALFAJORES,
    CUSD_CELO_ALFAJORES,
    CEUR_CELO_ALFAJORES,
    DAI_CELO_ALFAJORES,
  ],
  [DepricatedChainId.GNOSIS]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.GNOSIS],
    WBTC_GNOSIS,
    WXDAI_GNOSIS,
    USDC_ETHEREUM_GNOSIS,
  ],
  [DepricatedChainId.BNB]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.BNB],
    BUSD_BNB,
    DAI_BNB,
    USDC_BNB,
    USDT_BNB,
    BTC_BNB,
    ETH_BNB,
  ],
  [DepricatedChainId.AVALANCHE]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.AVALANCHE],
    USDC_AVAX,
    DAI_AVAX,
  ],
  [DepricatedChainId.MOONBEAM]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.MOONBEAM],
    DAI_MOONBEAM,
    USDC_MOONBEAM,
    WBTC_MOONBEAM,
  ],
  [DepricatedChainId.BASE_GOERLI]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.BASE_GOERLI]],
  [DepricatedChainId.BASE]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.BASE], USDC_BASE],
  [DepricatedChainId.ZORA]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ZORA]!],
  [DepricatedChainId.ZORA_SEPOLIA]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ZORA_SEPOLIA]!],
  [DepricatedChainId.ROOTSTOCK]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ROOTSTOCK]!],
  [DepricatedChainId.BLAST]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.BLAST]!, USDB_BLAST],
  [DepricatedChainId.ZKSYNC]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ZKSYNC]!,
    USDCE_ZKSYNC,
    USDC_ZKSYNC,
  ],
  [DepricatedChainId.WORLDCHAIN]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.WORLDCHAIN]!,
    USDC_WORLDCHAIN,
    WLD_WORLDCHAIN,
    WBTC_WORLDCHAIN,
  ],
  [DepricatedChainId.UNICHAIN_SEPOLIA]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.UNICHAIN_SEPOLIA]!,
    USDC_UNICHAIN_SEPOLIA,
  ],
  [DepricatedChainId.UNICHAIN]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.UNICHAIN]!,
    DAI_UNICHAIN,
    USDC_UNICHAIN,
  ],
  [DepricatedChainId.MONAD_TESTNET]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.MONAD_TESTNET]!,
    USDT_MONAD_TESTNET,
  ],
  [DepricatedChainId.BASE_SEPOLIA]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.BASE_SEPOLIA]!,
    USDC_BASE_SEPOLIA,
  ],
  [DepricatedChainId.SONEIUM]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.SONEIUM]!, USDC_SONEIUM],
};

/**
 * Provider that uses a hardcoded list of V3 pools to generate a list of subgraph pools.
 *
 * Since the pools are hardcoded and the data does not come from the Subgraph, the TVL values
 * are dummys and should not be depended on.
 *
 * Useful for instances where other data sources are unavailable. E.g. Subgraph not available.
 *
 * @export
 * @class StaticV3SubgraphProvider
 */
export class StaticV3SubgraphProvider implements IV3SubgraphProvider {
  constructor(
    private chainId: DepricatedChainId,
    private poolProvider: IV3PoolProvider
  ) { }

  public async getPools(
    tokenIn?: Token,
    tokenOut?: Token,
    providerConfig?: ProviderConfig
  ): Promise<V3SubgraphPool[]> {
    log.info('In static subgraph provider for V3');
    const bases = BASES_TO_CHECK_TRADES_AGAINST[this.chainId];

    const basePairs: [Token, Token][] = _.flatMap(
      bases,
      (base): [Token, Token][] => bases.map((otherBase) => [base, otherBase])
    );

    if (tokenIn && tokenOut) {
      basePairs.push(
        [tokenIn, tokenOut],
        ...bases.map((base): [Token, Token] => [tokenIn, base]),
        ...bases.map((base): [Token, Token] => [tokenOut, base])
      );
    }

    const pairs: [Token, Token, FeeAmount][] = _(basePairs)
      .filter((tokens): tokens is [Token, Token] =>
        Boolean(tokens[0] && tokens[1])
      )
      .filter(
        ([tokenA, tokenB]) =>
          tokenA.address !== tokenB.address && !tokenA.equals(tokenB)
      )
      .flatMap<[Token, Token, FeeAmount]>(([tokenA, tokenB]) => {
        return [
          [tokenA, tokenB, FeeAmount.LOWEST],
          [tokenA, tokenB, FeeAmount.LOW],
          [tokenA, tokenB, FeeAmount.MEDIUM],
          [tokenA, tokenB, FeeAmount.HIGH],
        ];
      })
      .value();

    log.info(
      `V3 Static subgraph provider about to get ${pairs.length} pools on-chain`
    );
    const poolAccessor = await this.poolProvider.getPools(
      pairs,
      providerConfig
    );
    const pools = poolAccessor.getAllPools();

    const poolAddressSet = new Set<string>();
    const subgraphPools: V3SubgraphPool[] = _(pools)
      .map((pool) => {
        const { token0, token1, fee, liquidity } = pool;

        const poolAddress = Pool.getAddress(pool.token0, pool.token1, pool.fee);

        if (poolAddressSet.has(poolAddress)) {
          return undefined;
        }
        poolAddressSet.add(poolAddress);

        const liquidityNumber = JSBI.toNumber(liquidity);

        return {
          id: poolAddress,
          feeTier: unparseFeeAmount(fee),
          liquidity: liquidity.toString(),
          token0: {
            id: token0.address,
          },
          token1: {
            id: token1.address,
          },
          // As a very rough proxy we just use liquidity for TVL.
          tvlETH: liquidityNumber,
          tvlUSD: liquidityNumber,
        };
      })
      .compact()
      .value();

    return subgraphPools;
  }
}
