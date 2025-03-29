import { Protocol } from '@rtz-dex-tools/router-sdk';
import { DepricatedChainId, Token } from '@rtz-dex-tools/sdk-core';

import { ProviderConfig } from '../provider';
import { SubgraphProvider } from '../subgraph-provider';

export interface V3SubgraphPool {
  id: string;
  feeTier: string;
  liquidity: string;
  token0: {
    id: string;
  };
  token1: {
    id: string;
  };
  tvlETH: number;
  tvlUSD: number;
}

export type V3RawSubgraphPool = {
  id: string;
  feeTier: string;
  liquidity: string;
  token0: {
    symbol: string;
    id: string;
  };
  token1: {
    symbol: string;
    id: string;
  };
  totalValueLockedUSD: string;
  totalValueLockedETH: string;
  totalValueLockedUSDUntracked: string;
};

const SUBGRAPH_URL_BY_CHAIN: { [chainId in DepricatedChainId]?: string } = {
  [DepricatedChainId.MAINNET]:
    'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
  [DepricatedChainId.OPTIMISM]:
    'https://api.thegraph.com/subgraphs/name/ianlapham/optimism-post-regenesis',
  // todo: add once subgraph is live
  [DepricatedChainId.OPTIMISM_SEPOLIA]: '',
  [DepricatedChainId.ARBITRUM_ONE]:
    'https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-minimal',
  // todo: add once subgraph is live
  [DepricatedChainId.ARBITRUM_SEPOLIA]: '',
  [DepricatedChainId.POLYGON]:
    'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-polygon',
  [DepricatedChainId.CELO]:
    'https://api.thegraph.com/subgraphs/name/jesse-sawa/uniswap-celo',
  [DepricatedChainId.GOERLI]:
    'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-gorli',
  [DepricatedChainId.BNB]:
    'https://api.thegraph.com/subgraphs/name/ilyamk/uniswap-v3---bnb-chain',
  [DepricatedChainId.AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/lynnshaoyu/uniswap-v3-avax',
  [DepricatedChainId.BASE]:
    'https://api.studio.thegraph.com/query/48211/uniswap-v3-base/version/latest',
  [DepricatedChainId.BLAST]:
    'https://gateway-arbitrum.network.thegraph.com/api/0ae45f0bf40ae2e73119b44ccd755967/subgraphs/id/2LHovKznvo8YmKC9ZprPjsYAZDCc4K5q4AYz8s3cnQn1',
};

/**
 * Provider for getting V3 pools from the Subgraph
 *
 * @export
 * @interface IV3SubgraphProvider
 */
export interface IV3SubgraphProvider {
  getPools(
    tokenIn?: Token,
    tokenOut?: Token,
    providerConfig?: ProviderConfig
  ): Promise<V3SubgraphPool[]>;
}

export class V3SubgraphProvider
  extends SubgraphProvider<V3RawSubgraphPool, V3SubgraphPool>
  implements IV3SubgraphProvider {
  constructor(
    chainId: number,
    retries = 2,
    timeout = 30000,
    rollback = true,
    trackedEthThreshold = 0.01,
    untrackedUsdThreshold = Number.MAX_VALUE,
    subgraphUrlOverride?: string
  ) {
    super(
      Protocol.V3,
      chainId,
      retries,
      timeout,
      rollback,
      trackedEthThreshold,
      untrackedUsdThreshold,
      subgraphUrlOverride ?? SUBGRAPH_URL_BY_CHAIN[chainId]
    );
  }

  protected override subgraphQuery(blockNumber?: number): string {
    return `
    query getPools($pageSize: Int!, $id: String) {
      pools(
        first: $pageSize
        ${blockNumber ? `block: { number: ${blockNumber} }` : ``}
          where: { id_gt: $id }
        ) {
          id
          token0 {
            symbol
            id
          }
          token1 {
            symbol
            id
          }
          feeTier
          liquidity
          totalValueLockedUSD
          totalValueLockedETH
          totalValueLockedUSDUntracked
        }
      }
   `;
  }

  protected override mapSubgraphPool(
    rawPool: V3RawSubgraphPool
  ): V3SubgraphPool {
    return {
      id: rawPool.id,
      feeTier: rawPool.feeTier,
      liquidity: rawPool.liquidity,
      token0: {
        id: rawPool.token0.id,
      },
      token1: {
        id: rawPool.token1.id,
      },
      tvlETH: parseFloat(rawPool.totalValueLockedETH),
      tvlUSD: parseFloat(rawPool.totalValueLockedUSD),
    };
  }
}
