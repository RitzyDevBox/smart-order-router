import {
  DepricatedChainId,
  CHAIN_TO_ADDRESSES_MAP,
  Currency,
  SWAP_ROUTER_02_ADDRESSES as SWAP_ROUTER_02_ADDRESSES_HELPER,
  Token,
} from '@rtz-dex-tools/sdk-core';
import { FACTORY_ADDRESS } from '@rtz-dex-tools/v3-sdk';

import { ADDRESS_ZERO } from '@rtz-dex-tools/router-sdk';
import { NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';

export const BNB_TICK_LENS_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BNB].tickLensAddress;
export const BNB_NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BNB].nonfungiblePositionManagerAddress;
export const BNB_SWAP_ROUTER_02_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BNB].swapRouter02Address!;
export const BNB_V3_MIGRATOR_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BNB].v3MigratorAddress;

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(FACTORY_ADDRESS),
  [DepricatedChainId.CELO]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.CELO].v3CoreFactoryAddress,
  [DepricatedChainId.CELO_ALFAJORES]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.CELO_ALFAJORES].v3CoreFactoryAddress,
  [DepricatedChainId.OPTIMISM_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.OPTIMISM_GOERLI].v3CoreFactoryAddress,
  [DepricatedChainId.OPTIMISM_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.OPTIMISM_SEPOLIA].v3CoreFactoryAddress,
  [DepricatedChainId.SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.SEPOLIA].v3CoreFactoryAddress,
  [DepricatedChainId.ARBITRUM_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ARBITRUM_GOERLI].v3CoreFactoryAddress,
  [DepricatedChainId.ARBITRUM_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ARBITRUM_SEPOLIA].v3CoreFactoryAddress,
  [DepricatedChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BNB].v3CoreFactoryAddress,
  [DepricatedChainId.AVALANCHE]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.AVALANCHE].v3CoreFactoryAddress,
  [DepricatedChainId.BASE_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BASE_GOERLI].v3CoreFactoryAddress,
  [DepricatedChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BASE].v3CoreFactoryAddress,
  [DepricatedChainId.BLAST]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BLAST].v3CoreFactoryAddress,
  [DepricatedChainId.ZORA]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ZORA].v3CoreFactoryAddress,
  [DepricatedChainId.ZKSYNC]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ZKSYNC].v3CoreFactoryAddress,
  [DepricatedChainId.WORLDCHAIN]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.WORLDCHAIN].v3CoreFactoryAddress,
  [DepricatedChainId.UNICHAIN_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.UNICHAIN_SEPOLIA].v3CoreFactoryAddress,
  [DepricatedChainId.MONAD_TESTNET]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.MONAD_TESTNET].v3CoreFactoryAddress,
  [DepricatedChainId.BASE_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BASE_SEPOLIA].v3CoreFactoryAddress,
  // TODO: Gnosis + Moonbeam contracts to be deployed
  [DepricatedChainId.UNICHAIN]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.UNICHAIN].v3CoreFactoryAddress,
  [DepricatedChainId.SONEIUM]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.SONEIUM].v3CoreFactoryAddress,
};

export const QUOTER_V2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x61fFE014bA17989E743c5F6cB21bF9697530B21e'),
  [DepricatedChainId.CELO]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.CELO].quoterAddress,
  [DepricatedChainId.CELO_ALFAJORES]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.CELO_ALFAJORES].quoterAddress,
  [DepricatedChainId.OPTIMISM_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.OPTIMISM_GOERLI].quoterAddress,
  [DepricatedChainId.OPTIMISM_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.OPTIMISM_SEPOLIA].quoterAddress,
  [DepricatedChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.SEPOLIA].quoterAddress,
  [DepricatedChainId.ARBITRUM_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ARBITRUM_GOERLI].quoterAddress,
  [DepricatedChainId.ARBITRUM_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ARBITRUM_SEPOLIA].quoterAddress,
  [DepricatedChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BNB].quoterAddress,
  [DepricatedChainId.AVALANCHE]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.AVALANCHE].quoterAddress,
  [DepricatedChainId.BASE_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BASE_GOERLI].quoterAddress,
  [DepricatedChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BASE].quoterAddress,
  [DepricatedChainId.BLAST]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BLAST].quoterAddress,
  [DepricatedChainId.ZORA]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ZORA].quoterAddress,
  [DepricatedChainId.ZKSYNC]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ZKSYNC].quoterAddress,
  [DepricatedChainId.WORLDCHAIN]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.WORLDCHAIN].quoterAddress,
  [DepricatedChainId.UNICHAIN_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.UNICHAIN_SEPOLIA].quoterAddress,
  [DepricatedChainId.MONAD_TESTNET]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.MONAD_TESTNET].quoterAddress,
  [DepricatedChainId.BASE_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BASE_SEPOLIA].quoterAddress,
  // TODO: Gnosis + Moonbeam contracts to be deployed
  [DepricatedChainId.UNICHAIN]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.UNICHAIN].quoterAddress,
  [DepricatedChainId.SONEIUM]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.SONEIUM].quoterAddress,
};

export const NEW_QUOTER_V2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3'),
  [DepricatedChainId.CELO]: '0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3',
  [DepricatedChainId.CELO_ALFAJORES]: '0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3',
  [DepricatedChainId.OPTIMISM_SEPOLIA]: '0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3',
  [DepricatedChainId.SEPOLIA]: '0xf0c802dcb0cf1c4f7b953756b49d940eed190221',
  [DepricatedChainId.ARBITRUM_SEPOLIA]: '0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3',
  [DepricatedChainId.BNB]: '0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3',
  [DepricatedChainId.AVALANCHE]: '0xf0c802dcb0cf1c4f7b953756b49d940eed190221',
  [DepricatedChainId.POLYGON_MUMBAI]: '0x60e06b92bC94a665036C26feC5FF2A92E2d04c5f',
  [DepricatedChainId.BASE]: '0x222cA98F00eD15B1faE10B61c277703a194cf5d2',
  [DepricatedChainId.BLAST]: '0x9D0F15f2cf58655fDDcD1EE6129C547fDaeD01b1',
  [DepricatedChainId.ZORA]: '0x9D0F15f2cf58655fDDcD1EE6129C547fDaeD01b1',
  [DepricatedChainId.ZKSYNC]: '0x071Bd2063dF031EDd110E27C6F4CDe50A3DeF2d4',
  [DepricatedChainId.WORLDCHAIN]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.WORLDCHAIN].quoterAddress, // TODO: deploy view-only-quoter to worldchain
  [DepricatedChainId.UNICHAIN_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.UNICHAIN_SEPOLIA].quoterAddress, // TODO: deploy view-only-quoter to UNICHAIN
  [DepricatedChainId.MONAD_TESTNET]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.MONAD_TESTNET].quoterAddress, // TODO: deploy view-only-quoter to monad testnet
  [DepricatedChainId.BASE_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BASE_SEPOLIA].quoterAddress,
  [DepricatedChainId.UNICHAIN]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.UNICHAIN].quoterAddress, // TODO: deploy view-only-quoter to unichain
  [DepricatedChainId.SONEIUM]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.SONEIUM].quoterAddress,
};

export const PROTOCOL_V4_QUOTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xf3a39c86dbd13c45365e57fb90fe413371f65af8'),
  [DepricatedChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.SEPOLIA].v4QuoterAddress,
  [DepricatedChainId.ARBITRUM_ONE]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ARBITRUM_ONE].v4QuoterAddress,
  [DepricatedChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BASE].v4QuoterAddress,
  [DepricatedChainId.POLYGON]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.POLYGON].v4QuoterAddress,
  [DepricatedChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BNB].v4QuoterAddress,
  [DepricatedChainId.AVALANCHE]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.AVALANCHE].v4QuoterAddress,
  [DepricatedChainId.OPTIMISM]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.OPTIMISM].v4QuoterAddress,
  [DepricatedChainId.WORLDCHAIN]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.WORLDCHAIN].v4QuoterAddress,
  [DepricatedChainId.ZORA]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ZORA].v4QuoterAddress,
  [DepricatedChainId.UNICHAIN_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.UNICHAIN_SEPOLIA].v4QuoterAddress,
  [DepricatedChainId.UNICHAIN]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.UNICHAIN].v4QuoterAddress,
  [DepricatedChainId.BLAST]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BLAST].v4QuoterAddress,
  [DepricatedChainId.MAINNET]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.MAINNET].v4QuoterAddress,
  [DepricatedChainId.SONEIUM]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.SONEIUM].v4QuoterAddress,
};

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = {
  [DepricatedChainId.MAINNET]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.MAINNET].mixedRouteQuoterV1Address,
  [DepricatedChainId.GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.GOERLI].mixedRouteQuoterV1Address,
  [DepricatedChainId.BASE]: '0xe544efae946f0008ae9a8d64493efa7886b73776',
  [DepricatedChainId.UNICHAIN]: '0x48C0648E357639B446C99a6c7316A3eaFEaB35aE',
  [DepricatedChainId.ARBITRUM_ONE]: '0x003aa18c6E682dB80Cf4aa17261CcbFfd28690CE',
  [DepricatedChainId.POLYGON]: '0x58ead433EA99708604C4dD7c9b7E80C70976E202',
  [DepricatedChainId.OPTIMISM]: '0x204faca1764b154221e35c0d20abb3c525710498',
  [DepricatedChainId.AVALANCHE]: '0x204FAca1764B154221e35c0d20aBb3c525710498',
  [DepricatedChainId.BNB]: '0x204FAca1764B154221e35c0d20aBb3c525710498',
  [DepricatedChainId.WORLDCHAIN]: '0x204FAca1764B154221e35c0d20aBb3c525710498',
  [DepricatedChainId.ZORA]: '0x204FAca1764B154221e35c0d20aBb3c525710498',
  [DepricatedChainId.SONEIUM]: '0x42c14CE921e85bf14467A82fAf8182546cf7c604',
};

export const MIXED_ROUTE_QUOTER_V2_ADDRESSES: AddressMap = {
  [DepricatedChainId.SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.SEPOLIA].mixedRouteQuoterV2Address,
  [DepricatedChainId.MAINNET]: '0xE63C5F5005909E96b5aA9CE10744CCE70eC16CC3',
  [DepricatedChainId.BASE]: '0xc7A3b85D43fF66AD98A895dE0EaE4b9e24C932D7',
  [DepricatedChainId.UNICHAIN]: '0x48C0648E357639B446C99a6c7316A3eaFEaB35aE',
  [DepricatedChainId.ARBITRUM_ONE]: '0x9D0F15f2cf58655fDDcD1EE6129C547fDaeD01b1',
  [DepricatedChainId.POLYGON]: '0x9d0f15f2cf58655fddcd1ee6129c547fdaed01b1',
  [DepricatedChainId.OPTIMISM]: '0xf0c802DCb0cF1C4f7B953756b49D940EED190221',
  [DepricatedChainId.AVALANCHE]: '0x9D0F15f2cf58655fDDcD1EE6129C547fDaeD01b1',
  [DepricatedChainId.BNB]: '0xf0c802DCb0cF1C4f7B953756b49D940EED190221',
  [DepricatedChainId.WORLDCHAIN]: '0x9D0F15f2cf58655fDDcD1EE6129C547fDaeD01b1',
  [DepricatedChainId.ZORA]: '0x5f739c790a48E97eec0efb81bab5D152c0A0ecA0',
  [DepricatedChainId.SONEIUM]: '0x42c14CE921e85bf14467A82fAf8182546cf7c604',
};

export const UNISWAP_MULTICALL_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984'),
  [DepricatedChainId.CELO]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.CELO].multicallAddress,
  [DepricatedChainId.CELO_ALFAJORES]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.CELO_ALFAJORES].multicallAddress,
  [DepricatedChainId.OPTIMISM_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.OPTIMISM_GOERLI].multicallAddress,
  [DepricatedChainId.OPTIMISM_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.OPTIMISM_SEPOLIA].multicallAddress,
  [DepricatedChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.SEPOLIA].multicallAddress,
  [DepricatedChainId.ARBITRUM_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ARBITRUM_GOERLI].multicallAddress,
  [DepricatedChainId.ARBITRUM_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ARBITRUM_SEPOLIA].multicallAddress,
  [DepricatedChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BNB].multicallAddress,
  [DepricatedChainId.AVALANCHE]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.AVALANCHE].multicallAddress,
  [DepricatedChainId.BASE_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BASE_GOERLI].multicallAddress,
  [DepricatedChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BASE].multicallAddress,
  [DepricatedChainId.BLAST]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BLAST].multicallAddress,
  [DepricatedChainId.ZORA]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ZORA].multicallAddress,
  [DepricatedChainId.ZKSYNC]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ZKSYNC].multicallAddress,
  [DepricatedChainId.WORLDCHAIN]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.WORLDCHAIN].multicallAddress,
  [DepricatedChainId.UNICHAIN_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.UNICHAIN_SEPOLIA].multicallAddress,
  [DepricatedChainId.MONAD_TESTNET]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.MONAD_TESTNET].multicallAddress,
  [DepricatedChainId.BASE_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BASE_SEPOLIA].multicallAddress,
  // TODO: Gnosis + Moonbeam contracts to be deployed
  [DepricatedChainId.UNICHAIN]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.UNICHAIN].multicallAddress,
  [DepricatedChainId.SONEIUM]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.SONEIUM].multicallAddress,
};

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number): string => {
  return (
    SWAP_ROUTER_02_ADDRESSES_HELPER(chainId) ??
    '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'
  );
};

export const STATE_VIEW_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984'),
  [DepricatedChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.SEPOLIA].v4StateView,
  [DepricatedChainId.ARBITRUM_ONE]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ARBITRUM_ONE].v4StateView,
  [DepricatedChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BASE].v4StateView,
  [DepricatedChainId.POLYGON]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.POLYGON].v4StateView,
  [DepricatedChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BNB].v4StateView,
  [DepricatedChainId.OPTIMISM]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.OPTIMISM].v4StateView,
  [DepricatedChainId.AVALANCHE]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.AVALANCHE].v4StateView,
  [DepricatedChainId.WORLDCHAIN]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.WORLDCHAIN].v4StateView,
  [DepricatedChainId.ZORA]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ZORA].v4StateView,
  [DepricatedChainId.UNICHAIN_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.UNICHAIN_SEPOLIA].v4StateView,
  [DepricatedChainId.UNICHAIN]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.UNICHAIN].v4StateView,
  [DepricatedChainId.BLAST]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.BLAST].v4StateView,
  [DepricatedChainId.MAINNET]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.MAINNET].v4StateView,
  [DepricatedChainId.SONEIUM]: CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.SONEIUM].v4StateView,
};

export const OVM_GASPRICE_ADDRESS =
  '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
export const TICK_LENS_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.ARBITRUM_ONE].tickLensAddress;
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.MAINNET].nonfungiblePositionManagerAddress;
export const V3_MIGRATOR_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[DepricatedChainId.MAINNET].v3MigratorAddress;
export const MULTICALL2_ADDRESS = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';

export type AddressMap = { [chainId: number]: string | undefined };

export function constructSameAddressMap<T extends string>(
  address: T,
  additionalNetworks: DepricatedChainId[] = []
): { [chainId: number]: T } {
  return NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(
    additionalNetworks
  ).reduce<{
    [chainId: number]: T;
  }>((memo, chainId) => {
    memo[chainId] = address;
    return memo;
  }, {});
}

export const WETH9: {
  [chainId in Exclude<
    DepricatedChainId,
    | DepricatedChainId.POLYGON
    | DepricatedChainId.POLYGON_MUMBAI
    | DepricatedChainId.CELO
    | DepricatedChainId.CELO_ALFAJORES
    | DepricatedChainId.GNOSIS
    | DepricatedChainId.MOONBEAM
    | DepricatedChainId.BNB
    | DepricatedChainId.AVALANCHE
    | DepricatedChainId.MONAD_TESTNET
    // TODO: remove ROOTSTOCK once we support both at the routing level
    | DepricatedChainId.ROOTSTOCK
  >]: Token;
} = {
  [DepricatedChainId.MAINNET]: new Token(
    DepricatedChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.GOERLI]: new Token(
    DepricatedChainId.GOERLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.SEPOLIA]: new Token(
    DepricatedChainId.SEPOLIA,
    '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
    18,
    'WETH',
    'Wrapped Ether'
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
  [DepricatedChainId.BASE_GOERLI]: new Token(
    DepricatedChainId.BASE_GOERLI,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [DepricatedChainId.BASE]: new Token(
    DepricatedChainId.BASE,
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
  [DepricatedChainId.BASE_SEPOLIA]: new Token(
    DepricatedChainId.BASE_SEPOLIA,
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
  [DepricatedChainId.SONEIUM]: new Token(
    DepricatedChainId.SONEIUM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
};

export const BEACON_CHAIN_DEPOSIT_ADDRESS =
  '0x00000000219ab540356cBB839Cbe05303d7705Fa';

export function getAddressLowerCase(currency: Currency): string {
  if (currency.isToken) {
    return currency.address.toLowerCase();
  } else {
    return ADDRESS_ZERO;
  }
}

export function getAddress(currency: Currency): string {
  if (currency.isToken) {
    return currency.address;
  } else {
    return ADDRESS_ZERO;
  }
}
