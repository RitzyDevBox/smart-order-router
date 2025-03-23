import {
Currency,
  DepricatedChainId,
  Ether,
  NativeCurrency,
  Token,
} from '@rtz-dex-tools/sdk-core';

// WIP: Gnosis, Moonbeam
export const SUPPORTED_CHAINS:DepricatedChainId[] = [
  DepricatedChainId.MAINNET,
  DepricatedChainId.OPTIMISM,
  DepricatedChainId.OPTIMISM_GOERLI,
  DepricatedChainId.OPTIMISM_SEPOLIA,
  DepricatedChainId.ARBITRUM_ONE,
  DepricatedChainId.ARBITRUM_GOERLI,
  DepricatedChainId.ARBITRUM_SEPOLIA,
  DepricatedChainId.POLYGON,
  DepricatedChainId.POLYGON_MUMBAI,
  DepricatedChainId.SEPOLIA,
  DepricatedChainId.CELO_ALFAJORES,
  DepricatedChainId.CELO,
  DepricatedChainId.BNB,
  DepricatedChainId.AVALANCHE,
  DepricatedChainId.BASE,
  DepricatedChainId.BLAST,
  DepricatedChainId.ZORA,
  DepricatedChainId.ZKSYNC,
  DepricatedChainId.WORLDCHAIN,
  DepricatedChainId.UNICHAIN,
  DepricatedChainId.UNICHAIN_SEPOLIA,
  DepricatedChainId.MONAD_TESTNET,
  DepricatedChainId.BASE_SEPOLIA,
  DepricatedChainId.SONEIUM,
  // Gnosis and Moonbeam don't yet have contracts deployed yet
];

export const V2_SUPPORTED = [
  DepricatedChainId.MAINNET,
  DepricatedChainId.SEPOLIA,
  DepricatedChainId.ARBITRUM_ONE,
  DepricatedChainId.OPTIMISM,
  DepricatedChainId.POLYGON,
  DepricatedChainId.BASE,
  DepricatedChainId.BNB,
  DepricatedChainId.AVALANCHE,
  DepricatedChainId.MONAD_TESTNET,
  DepricatedChainId.UNICHAIN_SEPOLIA,
  DepricatedChainId.UNICHAIN,
  DepricatedChainId.SONEIUM,
];

export const V4_SUPPORTED = [
  DepricatedChainId.MAINNET,
  DepricatedChainId.SEPOLIA,
  DepricatedChainId.ARBITRUM_ONE,
  DepricatedChainId.OPTIMISM,
  DepricatedChainId.POLYGON,
  DepricatedChainId.BASE,
  DepricatedChainId.BNB,
  DepricatedChainId.AVALANCHE,
  DepricatedChainId.MONAD_TESTNET,
  DepricatedChainId.UNICHAIN_SEPOLIA,
  DepricatedChainId.UNICHAIN,
  DepricatedChainId.SONEIUM,
];

export const MIXED_SUPPORTED = [
  DepricatedChainId.MAINNET,
  DepricatedChainId.SEPOLIA,
  DepricatedChainId.GOERLI,
  DepricatedChainId.BASE,
  DepricatedChainId.UNICHAIN,
  DepricatedChainId.BASE,
  DepricatedChainId.ARBITRUM_ONE,
  DepricatedChainId.POLYGON,
  DepricatedChainId.OPTIMISM,
  DepricatedChainId.AVALANCHE,
  DepricatedChainId.BNB,
  DepricatedChainId.WORLDCHAIN,
  DepricatedChainId.ZORA,
  DepricatedChainId.SONEIUM,
];

export const HAS_L1_FEE = [
  DepricatedChainId.OPTIMISM,
  DepricatedChainId.OPTIMISM_GOERLI,
  DepricatedChainId.OPTIMISM_SEPOLIA,
  DepricatedChainId.ARBITRUM_ONE,
  DepricatedChainId.ARBITRUM_GOERLI,
  DepricatedChainId.ARBITRUM_SEPOLIA,
  DepricatedChainId.BASE,
  DepricatedChainId.BASE_GOERLI,
  DepricatedChainId.BLAST,
  DepricatedChainId.ZORA,
  DepricatedChainId.WORLDCHAIN,
  DepricatedChainId.UNICHAIN_SEPOLIA,
  DepricatedChainId.MONAD_TESTNET,
  DepricatedChainId.UNICHAIN,
  DepricatedChainId.SONEIUM,
];

export const NETWORKS_WITH_SAME_UNISWAP_ADDRESSES = [
  DepricatedChainId.MAINNET,
  DepricatedChainId.GOERLI,
  DepricatedChainId.OPTIMISM,
  DepricatedChainId.ARBITRUM_ONE,
  DepricatedChainId.POLYGON,
  DepricatedChainId.POLYGON_MUMBAI,
];

export const ID_TO_CHAIN_ID = (id: number):DepricatedChainId => {
  switch (id) {
    case 1:
      return DepricatedChainId.MAINNET;
    case 5:
      return DepricatedChainId.GOERLI;
    case 11155111:
      return DepricatedChainId.SEPOLIA;
    case 56:
      return DepricatedChainId.BNB;
    case 10:
      return DepricatedChainId.OPTIMISM;
    case 420:
      return DepricatedChainId.OPTIMISM_GOERLI;
    case 11155420:
      return DepricatedChainId.OPTIMISM_SEPOLIA;
    case 42161:
      return DepricatedChainId.ARBITRUM_ONE;
    case 421613:
      return DepricatedChainId.ARBITRUM_GOERLI;
    case 421614:
      return DepricatedChainId.ARBITRUM_SEPOLIA;
    case 137:
      return DepricatedChainId.POLYGON;
    case 80001:
      return DepricatedChainId.POLYGON_MUMBAI;
    case 42220:
      return DepricatedChainId.CELO;
    case 44787:
      return DepricatedChainId.CELO_ALFAJORES;
    case 100:
      return DepricatedChainId.GNOSIS;
    case 1284:
      return DepricatedChainId.MOONBEAM;
    case 43114:
      return DepricatedChainId.AVALANCHE;
    case 8453:
      return DepricatedChainId.BASE;
    case 84531:
      return DepricatedChainId.BASE_GOERLI;
    case 84532:
      return DepricatedChainId.BASE_SEPOLIA;
    case 81457:
      return DepricatedChainId.BLAST;
    case 7777777:
      return DepricatedChainId.ZORA;
    case 324:
      return DepricatedChainId.ZKSYNC;
    case 480:
      return DepricatedChainId.WORLDCHAIN;
    case 1301:
      return DepricatedChainId.UNICHAIN_SEPOLIA;
    case 10143:
      return DepricatedChainId.MONAD_TESTNET;
    case 130:
      return DepricatedChainId.UNICHAIN;
    case 1868:
      return DepricatedChainId.SONEIUM;
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export enum ChainName {
  MAINNET = 'mainnet',
  GOERLI = 'goerli',
  SEPOLIA = 'sepolia',
  OPTIMISM = 'optimism-mainnet',
  OPTIMISM_GOERLI = 'optimism-goerli',
  OPTIMISM_SEPOLIA = 'optimism-sepolia',
  ARBITRUM_ONE = 'arbitrum-mainnet',
  ARBITRUM_GOERLI = 'arbitrum-goerli',
  ARBITRUM_SEPOLIA = 'arbitrum-sepolia',
  POLYGON = 'polygon-mainnet',
  POLYGON_MUMBAI = 'polygon-mumbai',
  CELO = 'celo-mainnet',
  CELO_ALFAJORES = 'celo-alfajores',
  GNOSIS = 'gnosis-mainnet',
  MOONBEAM = 'moonbeam-mainnet',
  BNB = 'bnb-mainnet',
  AVALANCHE = 'avalanche-mainnet',
  BASE = 'base-mainnet',
  BASE_GOERLI = 'base-goerli',
  BASE_SEPOLIA = 'base-sepolia',
  BLAST = 'blast-mainnet',
  ZORA = 'zora-mainnet',
  ZKSYNC = 'zksync-mainnet',
  WORLDCHAIN = 'worldchain-mainnet',
  UNICHAIN_SEPOLIA = 'unichain-sepolia',
  UNICHAIN = 'unichain-mainnet',
  MONAD_TESTNET = 'monad-testnet',
  SONEIUM = 'soneium-mainnet',
}

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  MATIC = 'MATIC',
  CELO = 'CELO',
  GNOSIS = 'XDAI',
  MOONBEAM = 'GLMR',
  BNB = 'BNB',
  AVALANCHE = 'AVAX',
  MONAD = 'MON',
}

export const NATIVE_NAMES_BY_ID: { [chainId: number]: string[] } = {
  [DepricatedChainId.MAINNET]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.GOERLI]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.SEPOLIA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.OPTIMISM]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.OPTIMISM_GOERLI]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.OPTIMISM_SEPOLIA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.ARBITRUM_ONE]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.ARBITRUM_GOERLI]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.ARBITRUM_SEPOLIA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.POLYGON]: ['MATIC', '0x0000000000000000000000000000000000001010'],
  [DepricatedChainId.POLYGON_MUMBAI]: [
    'MATIC',
    '0x0000000000000000000000000000000000001010',
  ],
  [DepricatedChainId.CELO]: ['CELO'],
  [DepricatedChainId.CELO_ALFAJORES]: ['CELO'],
  [DepricatedChainId.GNOSIS]: ['XDAI'],
  [DepricatedChainId.MOONBEAM]: ['GLMR'],
  [DepricatedChainId.BNB]: ['BNB', 'BNB', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
  [DepricatedChainId.AVALANCHE]: [
    'AVAX',
    'AVALANCHE',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.BASE]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.BLAST]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.ZORA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.ZKSYNC]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.WORLDCHAIN]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.UNICHAIN_SEPOLIA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.MONAD_TESTNET]: [
    'MON',
    'MONAD',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.BASE_SEPOLIA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.UNICHAIN]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [DepricatedChainId.SONEIUM]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
};

export const NATIVE_CURRENCY: { [chainId: number]: NativeCurrencyName } = {
  [DepricatedChainId.MAINNET]: NativeCurrencyName.ETHER,
  [DepricatedChainId.GOERLI]: NativeCurrencyName.ETHER,
  [DepricatedChainId.SEPOLIA]: NativeCurrencyName.ETHER,
  [DepricatedChainId.OPTIMISM]: NativeCurrencyName.ETHER,
  [DepricatedChainId.OPTIMISM_GOERLI]: NativeCurrencyName.ETHER,
  [DepricatedChainId.OPTIMISM_SEPOLIA]: NativeCurrencyName.ETHER,
  [DepricatedChainId.ARBITRUM_ONE]: NativeCurrencyName.ETHER,
  [DepricatedChainId.ARBITRUM_GOERLI]: NativeCurrencyName.ETHER,
  [DepricatedChainId.ARBITRUM_SEPOLIA]: NativeCurrencyName.ETHER,
  [DepricatedChainId.POLYGON]: NativeCurrencyName.MATIC,
  [DepricatedChainId.POLYGON_MUMBAI]: NativeCurrencyName.MATIC,
  [DepricatedChainId.CELO]: NativeCurrencyName.CELO,
  [DepricatedChainId.CELO_ALFAJORES]: NativeCurrencyName.CELO,
  [DepricatedChainId.GNOSIS]: NativeCurrencyName.GNOSIS,
  [DepricatedChainId.MOONBEAM]: NativeCurrencyName.MOONBEAM,
  [DepricatedChainId.BNB]: NativeCurrencyName.BNB,
  [DepricatedChainId.AVALANCHE]: NativeCurrencyName.AVALANCHE,
  [DepricatedChainId.BASE]: NativeCurrencyName.ETHER,
  [DepricatedChainId.BLAST]: NativeCurrencyName.ETHER,
  [DepricatedChainId.ZORA]: NativeCurrencyName.ETHER,
  [DepricatedChainId.ZKSYNC]: NativeCurrencyName.ETHER,
  [DepricatedChainId.WORLDCHAIN]: NativeCurrencyName.ETHER,
  [DepricatedChainId.UNICHAIN_SEPOLIA]: NativeCurrencyName.ETHER,
  [DepricatedChainId.MONAD_TESTNET]: NativeCurrencyName.MONAD,
  [DepricatedChainId.BASE_SEPOLIA]: NativeCurrencyName.ETHER,
  [DepricatedChainId.UNICHAIN]: NativeCurrencyName.ETHER,
  [DepricatedChainId.SONEIUM]: NativeCurrencyName.ETHER,
};

export const ID_TO_NETWORK_NAME = (id: number): ChainName => {
  switch (id) {
    case 1:
      return ChainName.MAINNET;
    case 5:
      return ChainName.GOERLI;
    case 11155111:
      return ChainName.SEPOLIA;
    case 56:
      return ChainName.BNB;
    case 10:
      return ChainName.OPTIMISM;
    case 420:
      return ChainName.OPTIMISM_GOERLI;
    case 11155420:
      return ChainName.OPTIMISM_SEPOLIA;
    case 42161:
      return ChainName.ARBITRUM_ONE;
    case 421613:
      return ChainName.ARBITRUM_GOERLI;
    case 421614:
      return ChainName.ARBITRUM_SEPOLIA;
    case 137:
      return ChainName.POLYGON;
    case 80001:
      return ChainName.POLYGON_MUMBAI;
    case 42220:
      return ChainName.CELO;
    case 44787:
      return ChainName.CELO_ALFAJORES;
    case 100:
      return ChainName.GNOSIS;
    case 1284:
      return ChainName.MOONBEAM;
    case 43114:
      return ChainName.AVALANCHE;
    case 8453:
      return ChainName.BASE;
    case 84531:
      return ChainName.BASE_GOERLI;
    case 84532:
      return ChainName.BASE_SEPOLIA;
    case 81457:
      return ChainName.BLAST;
    case 7777777:
      return ChainName.ZORA;
    case 324:
      return ChainName.ZKSYNC;
    case 480:
      return ChainName.WORLDCHAIN;
    case 1301:
      return ChainName.UNICHAIN_SEPOLIA;
    case 130:
      return ChainName.UNICHAIN;
    case 10143:
      return ChainName.MONAD_TESTNET;
    case 1868:
      return ChainName.SONEIUM;
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export const CHAIN_IDS_LIST = Object.values(DepricatedChainId).map((c) =>
  c.toString()
) as string[];

export const ID_TO_PROVIDER = (id: DepricatedChainId): string => {
  switch (id) {
    case DepricatedChainId.MAINNET:
      return process.env.JSON_RPC_PROVIDER!;
    case DepricatedChainId.GOERLI:
      return process.env.JSON_RPC_PROVIDER_GORLI!;
    case DepricatedChainId.SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_SEPOLIA!;
    case DepricatedChainId.OPTIMISM:
      return process.env.JSON_RPC_PROVIDER_OPTIMISM!;
    case DepricatedChainId.OPTIMISM_GOERLI:
      return process.env.JSON_RPC_PROVIDER_OPTIMISM_GOERLI!;
    case DepricatedChainId.OPTIMISM_SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_OPTIMISM_SEPOLIA!;
    case DepricatedChainId.ARBITRUM_ONE:
      return process.env.JSON_RPC_PROVIDER_ARBITRUM_ONE!;
    case DepricatedChainId.ARBITRUM_GOERLI:
      return process.env.JSON_RPC_PROVIDER_ARBITRUM_GOERLI!;
    case DepricatedChainId.ARBITRUM_SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_ARBITRUM_SEPOLIA!;
    case DepricatedChainId.POLYGON:
      return process.env.JSON_RPC_PROVIDER_POLYGON!;
    case DepricatedChainId.POLYGON_MUMBAI:
      return process.env.JSON_RPC_PROVIDER_POLYGON_MUMBAI!;
    case DepricatedChainId.CELO:
      return process.env.JSON_RPC_PROVIDER_CELO!;
    case DepricatedChainId.CELO_ALFAJORES:
      return process.env.JSON_RPC_PROVIDER_CELO_ALFAJORES!;
    case DepricatedChainId.BNB:
      return process.env.JSON_RPC_PROVIDER_BNB!;
    case DepricatedChainId.AVALANCHE:
      return process.env.JSON_RPC_PROVIDER_AVALANCHE!;
    case DepricatedChainId.BASE:
      return process.env.JSON_RPC_PROVIDER_BASE!;
    case DepricatedChainId.BLAST:
      return process.env.JSON_RPC_PROVIDER_BLAST!;
    case DepricatedChainId.ZORA:
      return process.env.JSON_RPC_PROVIDER_ZORA!;
    case DepricatedChainId.ZKSYNC:
      return process.env.JSON_RPC_PROVIDER_ZKSYNC!;
    case DepricatedChainId.WORLDCHAIN:
      return process.env.JSON_RPC_PROVIDER_WORLDCHAIN!;
    case DepricatedChainId.UNICHAIN_SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_UNICHAIN_SEPOLIA!;
    case DepricatedChainId.MONAD_TESTNET:
      return process.env.JSON_RPC_PROVIDER_MONAD_TESTNET!;
    case DepricatedChainId.BASE_SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_BASE_SEPOLIA!;
    case DepricatedChainId.UNICHAIN:
      return process.env.JSON_RPC_PROVIDER_UNICHAIN!;
    case DepricatedChainId.SONEIUM:
      return process.env.JSON_RPC_PROVIDER_SONEIUM!;
    default:
      throw new Error(`Chain id: ${id} not supported`);
  }
};

export const WRAPPED_NATIVE_CURRENCY: { [chainId in DepricatedChainId]: Token } = {
  [DepricatedChainId.MAINNET]: new Token(
    1,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.GOERLI]: new Token(
    5,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.SEPOLIA]: new Token(
    11155111,
    '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.BNB]: new Token(
    56,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [DepricatedChainId.OPTIMISM]: new Token(
    DepricatedChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.OPTIMISM_GOERLI]: new Token(
    DepricatedChainId.OPTIMISM_GOERLI,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.OPTIMISM_SEPOLIA]: new Token(
    DepricatedChainId.OPTIMISM_SEPOLIA,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.ARBITRUM_ONE]: new Token(
    DepricatedChainId.ARBITRUM_ONE,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.ARBITRUM_GOERLI]: new Token(
    DepricatedChainId.ARBITRUM_GOERLI,
    '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.ARBITRUM_SEPOLIA]: new Token(
    DepricatedChainId.ARBITRUM_SEPOLIA,
    '0xc556bAe1e86B2aE9c22eA5E036b07E55E7596074',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.POLYGON]: new Token(
    DepricatedChainId.POLYGON,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped MATIC'
  ),
  [DepricatedChainId.POLYGON_MUMBAI]: new Token(
    DepricatedChainId.POLYGON_MUMBAI,
    '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    18,
    'WMATIC',
    'Wrapped MATIC'
  ),

  // The Celo native currency 'CELO' implements the erc-20 token standard
  [DepricatedChainId.CELO]: new Token(
    DepricatedChainId.CELO,
    '0x471EcE3750Da237f93B8E339c536989b8978a438',
    18,
    'CELO',
    'Celo native asset'
  ),
  [DepricatedChainId.CELO_ALFAJORES]: new Token(
    DepricatedChainId.CELO_ALFAJORES,
    '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
    18,
    'CELO',
    'Celo native asset'
  ),
  [DepricatedChainId.GNOSIS]: new Token(
    DepricatedChainId.GNOSIS,
    '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
    18,
    'WXDAI',
    'Wrapped XDAI on Gnosis'
  ),
  [DepricatedChainId.MOONBEAM]: new Token(
    DepricatedChainId.MOONBEAM,
    '0xAcc15dC74880C9944775448304B263D191c6077F',
    18,
    'WGLMR',
    'Wrapped GLMR'
  ),
  [DepricatedChainId.AVALANCHE]: new Token(
    DepricatedChainId.AVALANCHE,
    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [DepricatedChainId.BASE]: new Token(
    DepricatedChainId.BASE,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.BASE_GOERLI]: new Token(
    DepricatedChainId.BASE_GOERLI,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.ROOTSTOCK]: new Token(
    DepricatedChainId.ROOTSTOCK,
    '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d',
    18,
    'WRBTC',
    'Wrapped BTC'
  ),
  [DepricatedChainId.ZORA]: new Token(
    DepricatedChainId.ZORA,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.ZORA_SEPOLIA]: new Token(
    DepricatedChainId.ZORA_SEPOLIA,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.BLAST]: new Token(
    DepricatedChainId.BLAST,
    '0x4300000000000000000000000000000000000004',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.ZKSYNC]: new Token(
    DepricatedChainId.ZKSYNC,
    '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.WORLDCHAIN]: new Token(
    DepricatedChainId.WORLDCHAIN,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.UNICHAIN_SEPOLIA]: new Token(
    DepricatedChainId.UNICHAIN_SEPOLIA,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.UNICHAIN]: new Token(
    DepricatedChainId.UNICHAIN,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.MONAD_TESTNET]: new Token(
    DepricatedChainId.MONAD_TESTNET,
    '0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701',
    18,
    'WMON',
    'Wrapped Monad'
  ),
  [DepricatedChainId.BASE_SEPOLIA]: new Token(
    DepricatedChainId.BASE_SEPOLIA,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.SONEIUM]: new Token(
    DepricatedChainId.SONEIUM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
};

function isMatic(
  chainId: number
): chainId is DepricatedChainId.POLYGON | DepricatedChainId.POLYGON_MUMBAI {
  return chainId === DepricatedChainId.POLYGON_MUMBAI || chainId === DepricatedChainId.POLYGON;
}

class MaticNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isMatic(this.chainId)) throw new Error('Not matic');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isMatic(chainId)) throw new Error('Not matic');
    super(chainId, 18, 'MATIC', 'Polygon Matic');
  }
}

function isCelo(
  chainId: number
): chainId is DepricatedChainId.CELO | DepricatedChainId.CELO_ALFAJORES {
  return chainId === DepricatedChainId.CELO_ALFAJORES || chainId === DepricatedChainId.CELO;
}

class CeloNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isCelo(this.chainId)) throw new Error('Not celo');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isCelo(chainId)) throw new Error('Not celo');
    super(chainId, 18, 'CELO', 'Celo');
  }
}

function isGnosis(chainId: number): chainId is DepricatedChainId.GNOSIS {
  return chainId === DepricatedChainId.GNOSIS;
}

class GnosisNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isGnosis(this.chainId)) throw new Error('Not gnosis');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isGnosis(chainId)) throw new Error('Not gnosis');
    super(chainId, 18, 'XDAI', 'xDai');
  }
}

function isBnb(chainId: number): chainId is DepricatedChainId.BNB {
  return chainId === DepricatedChainId.BNB;
}

class BnbNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isBnb(this.chainId)) throw new Error('Not bnb');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isBnb(chainId)) throw new Error('Not bnb');
    super(chainId, 18, 'BNB', 'BNB');
  }
}

function isMoonbeam(chainId: number): chainId is DepricatedChainId.MOONBEAM {
  return chainId === DepricatedChainId.MOONBEAM;
}

class MoonbeamNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isMoonbeam(this.chainId)) throw new Error('Not moonbeam');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isMoonbeam(chainId)) throw new Error('Not moonbeam');
    super(chainId, 18, 'GLMR', 'Glimmer');
  }
}

function isAvax(chainId: number): chainId is DepricatedChainId.AVALANCHE {
  return chainId === DepricatedChainId.AVALANCHE;
}

class AvalancheNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isAvax(this.chainId)) throw new Error('Not avalanche');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isAvax(chainId)) throw new Error('Not avalanche');
    super(chainId, 18, 'AVAX', 'Avalanche');
  }
}

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    if (this.chainId in WRAPPED_NATIVE_CURRENCY) {
      return WRAPPED_NATIVE_CURRENCY[this.chainId as DepricatedChainId];
    }
    throw new Error('Unsupported chain ID');
  }

  private static _cachedExtendedEther: { [chainId: number]: NativeCurrency } =
    {};

  public static onChain(chainId: number): ExtendedEther {
    return (
      this._cachedExtendedEther[chainId] ??
      (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId))
    );
  }
}

const cachedNativeCurrency: { [chainId: number]: NativeCurrency } = {};

export function nativeOnChain(chainId: number): NativeCurrency {
  if (cachedNativeCurrency[chainId] != undefined) {
    return cachedNativeCurrency[chainId]!;
  }
  if (isMatic(chainId)) {
    cachedNativeCurrency[chainId] = new MaticNativeCurrency(chainId);
  } else if (isCelo(chainId)) {
    cachedNativeCurrency[chainId] = new CeloNativeCurrency(chainId);
  } else if (isGnosis(chainId)) {
    cachedNativeCurrency[chainId] = new GnosisNativeCurrency(chainId);
  } else if (isMoonbeam(chainId)) {
    cachedNativeCurrency[chainId] = new MoonbeamNativeCurrency(chainId);
  } else if (isBnb(chainId)) {
    cachedNativeCurrency[chainId] = new BnbNativeCurrency(chainId);
  } else if (isAvax(chainId)) {
    cachedNativeCurrency[chainId] = new AvalancheNativeCurrency(chainId);
  } else {
    cachedNativeCurrency[chainId] = ExtendedEther.onChain(chainId);
  }

  return cachedNativeCurrency[chainId]!;
}
