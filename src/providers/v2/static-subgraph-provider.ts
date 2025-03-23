import { DepricatedChainId, Token } from '@rtz-dex-tools/sdk-core';
import { Pair } from '@rtz-dex-tools/v2-sdk';
import _ from 'lodash';

import { WRAPPED_NATIVE_CURRENCY } from '../../util/chains';
import { log } from '../../util/log';
import {
  ARB_ARBITRUM,
  BTC_BNB,
  BUSD_BNB,
  CELO,
  CEUR_CELO,
  CUSD_CELO,
  DAI_ARBITRUM,
  DAI_AVAX,
  DAI_BNB,
  DAI_CELO,
  DAI_MAINNET,
  DAI_MOONBEAM,
  DAI_OPTIMISM,
  DAI_UNICHAIN,
  ETH_BNB,
  OP_OPTIMISM,
  USDB_BLAST,
  USDC_ARBITRUM,
  USDC_AVAX,
  USDC_BASE,
  USDC_BASE_SEPOLIA,
  USDC_BNB,
  USDC_MAINNET,
  USDC_MOONBEAM,
  USDC_NATIVE_ARBITRUM,
  USDC_OPTIMISM,
  USDC_POLYGON,
  USDC_SONEIUM,
  USDC_UNICHAIN,
  USDC_UNICHAIN_SEPOLIA,
  USDC_WORLDCHAIN,
  USDC_ZKSYNC,
  USDCE_ZKSYNC,
  USDT_ARBITRUM,
  USDT_BNB,
  USDT_MAINNET,
  USDT_MONAD_TESTNET,
  USDT_OPTIMISM,
  WBTC_ARBITRUM,
  WBTC_MAINNET,
  WBTC_MOONBEAM,
  WBTC_OPTIMISM,
  WBTC_WORLDCHAIN,
  WETH_POLYGON,
  WLD_WORLDCHAIN,
  WMATIC_POLYGON,
  WSTETH_MAINNET,
} from '../token-provider';

import { IV2SubgraphProvider, V2SubgraphPool } from './subgraph-provider';

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
  [DepricatedChainId.GOERLI]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.GOERLI]!],
  [DepricatedChainId.SEPOLIA]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.SEPOLIA]!],
  //v2 not deployed on [arbitrum, polygon, celo, gnosis, moonbeam, bnb, avalanche] and their testnets
  [DepricatedChainId.OPTIMISM]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.OPTIMISM]!,
    USDC_OPTIMISM,
    DAI_OPTIMISM,
    USDT_OPTIMISM,
    WBTC_OPTIMISM,
    OP_OPTIMISM,
  ],
  [DepricatedChainId.ARBITRUM_ONE]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ARBITRUM_ONE]!,
    WBTC_ARBITRUM,
    DAI_ARBITRUM,
    USDC_ARBITRUM,
    USDC_NATIVE_ARBITRUM,
    USDT_ARBITRUM,
    ARB_ARBITRUM,
  ],
  [DepricatedChainId.ARBITRUM_GOERLI]: [],
  [DepricatedChainId.ARBITRUM_SEPOLIA]: [],
  [DepricatedChainId.OPTIMISM_GOERLI]: [],
  [DepricatedChainId.OPTIMISM_SEPOLIA]: [],
  [DepricatedChainId.POLYGON]: [USDC_POLYGON, WETH_POLYGON, WMATIC_POLYGON],
  [DepricatedChainId.POLYGON_MUMBAI]: [],
  [DepricatedChainId.CELO]: [CELO, CUSD_CELO, CEUR_CELO, DAI_CELO],
  [DepricatedChainId.CELO_ALFAJORES]: [],
  [DepricatedChainId.GNOSIS]: [],
  [DepricatedChainId.MOONBEAM]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.MOONBEAM],
    DAI_MOONBEAM,
    USDC_MOONBEAM,
    WBTC_MOONBEAM,
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
  [DepricatedChainId.BASE_GOERLI]: [],
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
 * Provider that does not get data from an external source and instead returns
 * a hardcoded list of Subgraph pools.
 *
 * Since the pools are hardcoded, the liquidity/price values are dummys and should not
 * be depended on.
 *
 * Useful for instances where other data sources are unavailable. E.g. subgraph not available.
 *
 * @export
 * @class StaticV2SubgraphProvider
 */
export class StaticV2SubgraphProvider implements IV2SubgraphProvider {
  constructor(private chainId:DepricatedChainId) { }

  public async getPools(
    tokenIn?: Token,
    tokenOut?: Token
  ): Promise<V2SubgraphPool[]> {
    log.info('In static subgraph provider for V2');
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

    const pairs: [Token, Token][] = _(basePairs)
      .filter((tokens): tokens is [Token, Token] =>
        Boolean(tokens[0] && tokens[1])
      )
      .filter(
        ([tokenA, tokenB]) =>
          tokenA.address !== tokenB.address && !tokenA.equals(tokenB)
      )
      .value();

    const poolAddressSet = new Set<string>();

    const subgraphPools: V2SubgraphPool[] = _(pairs)
      .map(([tokenA, tokenB]) => {
        const poolAddress = Pair.getAddress(tokenA, tokenB);

        if (poolAddressSet.has(poolAddress)) {
          return undefined;
        }
        poolAddressSet.add(poolAddress);

        const [token0, token1] = tokenA.sortsBefore(tokenB)
          ? [tokenA, tokenB]
          : [tokenB, tokenA];

        return {
          id: poolAddress,
          liquidity: '100',
          token0: {
            id: token0.address,
          },
          token1: {
            id: token1.address,
          },
          supply: 100,
          reserve: 100,
          reserveUSD: 100,
        };
      })
      .compact()
      .value();

    return subgraphPools;
  }
}
