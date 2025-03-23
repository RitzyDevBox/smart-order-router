import { Protocol } from '@rtz-dex-tools/router-sdk';
import { Currency, DepricatedChainId, Token } from '@rtz-dex-tools/sdk-core';

import { SubgraphPool } from '../routers/alpha-router/functions/get-candidate-pools';
import { nativeOnChain, WRAPPED_NATIVE_CURRENCY } from '../util';

import { ICache } from './cache';
import { ProviderConfig } from './provider';
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
} from './token-provider';
import { V3SubgraphPool } from './v3/subgraph-provider';

type ChainTokenList = {
  readonly [chainId in DepricatedChainId]: Currency[];
};

export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [DepricatedChainId.MAINNET]: [
    nativeOnChain(DepricatedChainId.MAINNET),
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.MAINNET]!,
    DAI_MAINNET,
    USDC_MAINNET,
    USDT_MAINNET,
    WBTC_MAINNET,
    WSTETH_MAINNET,
  ],
  [DepricatedChainId.GOERLI]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.GOERLI]!],
  [DepricatedChainId.SEPOLIA]: [
    nativeOnChain(DepricatedChainId.SEPOLIA),
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.SEPOLIA]!,
  ],
  //v2 not deployed on [arbitrum, polygon, celo, gnosis, moonbeam, bnb, avalanche] and their testnets
  [DepricatedChainId.OPTIMISM]: [
    nativeOnChain(DepricatedChainId.OPTIMISM),
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.OPTIMISM]!,
    USDC_OPTIMISM,
    DAI_OPTIMISM,
    USDT_OPTIMISM,
    WBTC_OPTIMISM,
    OP_OPTIMISM,
  ],
  [DepricatedChainId.ARBITRUM_ONE]: [
    nativeOnChain(DepricatedChainId.ARBITRUM_ONE),
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
  [DepricatedChainId.POLYGON]: [
    nativeOnChain(DepricatedChainId.POLYGON),
    USDC_POLYGON,
    WETH_POLYGON,
    WMATIC_POLYGON,
  ],
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
    nativeOnChain(DepricatedChainId.BNB),
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
  [DepricatedChainId.BASE]: [
    nativeOnChain(DepricatedChainId.BASE),
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.BASE],
    USDC_BASE,
  ],
  [DepricatedChainId.ZORA]: [
    nativeOnChain(DepricatedChainId.ZORA),
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ZORA]!,
  ],
  [DepricatedChainId.ZORA_SEPOLIA]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ZORA_SEPOLIA]!],
  [DepricatedChainId.ROOTSTOCK]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ROOTSTOCK]!],
  [DepricatedChainId.BLAST]: [
    nativeOnChain(DepricatedChainId.BLAST),
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.BLAST]!,
    USDB_BLAST,
  ],
  [DepricatedChainId.ZKSYNC]: [
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ZKSYNC]!,
    USDCE_ZKSYNC,
    USDC_ZKSYNC,
  ],
  [DepricatedChainId.WORLDCHAIN]: [
    nativeOnChain(DepricatedChainId.WORLDCHAIN),
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.WORLDCHAIN]!,
    USDC_WORLDCHAIN,
    WLD_WORLDCHAIN,
    WBTC_WORLDCHAIN,
  ],
  [DepricatedChainId.UNICHAIN_SEPOLIA]: [
    nativeOnChain(DepricatedChainId.UNICHAIN_SEPOLIA),
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.UNICHAIN_SEPOLIA]!,
    USDC_UNICHAIN_SEPOLIA,
  ],
  [DepricatedChainId.UNICHAIN]: [
    nativeOnChain(DepricatedChainId.UNICHAIN),
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.UNICHAIN]!,
    DAI_UNICHAIN,
    USDC_UNICHAIN,
  ],
  [DepricatedChainId.BASE_SEPOLIA]: [
    nativeOnChain(DepricatedChainId.BASE_SEPOLIA),
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.BASE_SEPOLIA]!,
    USDC_BASE_SEPOLIA,
  ],
  [DepricatedChainId.MONAD_TESTNET]: [
    nativeOnChain(DepricatedChainId.MONAD_TESTNET),
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.MONAD_TESTNET]!,
    USDT_MONAD_TESTNET,
  ],
  [DepricatedChainId.SONEIUM]: [
    nativeOnChain(DepricatedChainId.SONEIUM),
    WRAPPED_NATIVE_CURRENCY[DepricatedChainId.SONEIUM]!,
    USDC_SONEIUM,
  ],
};

export interface IV3SubgraphProvider {
  getPools(
    tokenIn?: Token,
    tokenOut?: Token,
    providerConfig?: ProviderConfig
  ): Promise<V3SubgraphPool[]>;
}

export interface ISubgraphProvider<TSubgraphPool extends SubgraphPool> {
  getPools(
    tokenIn?: Token,
    tokenOut?: Token,
    providerConfig?: ProviderConfig
  ): Promise<TSubgraphPool[]>;
}

export abstract class CachingSubgraphProvider<
  TSubgraphPool extends SubgraphPool
> implements ISubgraphProvider<TSubgraphPool> {
  private SUBGRAPH_KEY = (chainId:DepricatedChainId) =>
    `subgraph-pools-${this.protocol}-${chainId}`;

  /**
   * Creates an instance of CachingV3SubgraphProvider.
   * @param chainId The chain id to use.
   * @param subgraphProvider The provider to use to get the subgraph pools when not in the cache.
   * @param cache Cache instance to hold cached pools.
   * @param protocol Subgraph protocol version
   */
  constructor(
    private chainId:DepricatedChainId,
    protected subgraphProvider: ISubgraphProvider<TSubgraphPool>,
    private cache: ICache<TSubgraphPool[]>,
    private protocol: Protocol
  ) { }

  public async getPools(): Promise<TSubgraphPool[]> {
    const cachedPools = await this.cache.get(this.SUBGRAPH_KEY(this.chainId));

    if (cachedPools) {
      return cachedPools;
    }

    const pools = await this.subgraphProvider.getPools();

    await this.cache.set(this.SUBGRAPH_KEY(this.chainId), pools);

    return pools;
  }
}
