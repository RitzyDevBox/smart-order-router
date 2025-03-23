import { DepricatedChainId } from '@rtz-dex-tools/sdk-core';

export const DEFAULT_BLOCKS_TO_LIVE: { [chain in DepricatedChainId]: number } = {
  // (60 minutes) / (12 seconds)= 300
  [DepricatedChainId.MAINNET]: 300,
  [DepricatedChainId.GOERLI]: 300,
  [DepricatedChainId.SEPOLIA]: 300,
  // (60 minutes) / (2 seconds) = 1800
  [DepricatedChainId.OPTIMISM]: 1800,
  [DepricatedChainId.OPTIMISM_GOERLI]: 1800,
  [DepricatedChainId.OPTIMISM_SEPOLIA]: 1800,
  [DepricatedChainId.BASE]: 1800,
  [DepricatedChainId.ZORA]: 1800,
  [DepricatedChainId.BASE_GOERLI]: 1800,
  [DepricatedChainId.BASE_SEPOLIA]: 1800,
  [DepricatedChainId.ZORA_SEPOLIA]: 1800,
  [DepricatedChainId.BLAST]: 1800,
  // Note: Experiment with longer TTL
  // (12 hours) / (2 seconds) = 21600
  [DepricatedChainId.WORLDCHAIN]: 21600,
  // (60 minutes) / (1 seconds) = 3600
  [DepricatedChainId.UNICHAIN_SEPOLIA]: 3600,
  [DepricatedChainId.UNICHAIN]: 3600,
  [DepricatedChainId.MONAD_TESTNET]: 3600,
  // (60 minutes) / (250 milliseconds) = 14400
  [DepricatedChainId.ARBITRUM_ONE]: 14400,
  [DepricatedChainId.ARBITRUM_GOERLI]: 14400,
  [DepricatedChainId.ARBITRUM_SEPOLIA]: 14400,
  // (60 minutes) / (2 seconds) = 1800
  [DepricatedChainId.POLYGON]: 1800,
  [DepricatedChainId.POLYGON_MUMBAI]: 1800,
  // (60 minutes) / (5 seconds) = 720
  [DepricatedChainId.CELO]: 720,
  [DepricatedChainId.CELO_ALFAJORES]: 720,
  // (60 minutes) / (5 seconds) = 720
  [DepricatedChainId.GNOSIS]: 720,
  // (60 minutes) / (6 seconds) = 600
  [DepricatedChainId.MOONBEAM]: 600,
  // (60 minutes) / (3 seconds) = 1200
  [DepricatedChainId.BNB]: 1200,
  // (60 minutes) / (3 seconds) = 1200
  [DepricatedChainId.AVALANCHE]: 1200,
  // (60 minutes) / (33 seconds) = 148
  [DepricatedChainId.ROOTSTOCK]: 148,
  // (60 minutes) / (1 seconds) = 3600
  [DepricatedChainId.ZKSYNC]: 3600,
  [DepricatedChainId.MONAD_TESTNET]: 3600,
  // (60 minutes) / (1 seconds) = 3600
  [DepricatedChainId.SONEIUM]: 3600,
};
