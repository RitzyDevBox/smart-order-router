import { ADDRESS_ZERO } from '@rtz-dex-tools/router-sdk';
import { DepricatedChainId } from '@rtz-dex-tools/sdk-core';
import { Pool as V4Pool } from '@rtz-dex-tools/v4-sdk';

import { nativeOnChain } from './chains';

const FAKE_TICK_SPACING = 0;

export const V4_ETH_WETH_FAKE_POOL: { [chainId in DepricatedChainId]: V4Pool } = {
  [DepricatedChainId.MAINNET]: new V4Pool(
    nativeOnChain(DepricatedChainId.MAINNET),
    nativeOnChain(DepricatedChainId.MAINNET).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.GOERLI]: new V4Pool(
    nativeOnChain(DepricatedChainId.GOERLI),
    nativeOnChain(DepricatedChainId.GOERLI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.SEPOLIA]: new V4Pool(
    nativeOnChain(DepricatedChainId.SEPOLIA),
    nativeOnChain(DepricatedChainId.SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.OPTIMISM]: new V4Pool(
    nativeOnChain(DepricatedChainId.OPTIMISM),
    nativeOnChain(DepricatedChainId.OPTIMISM).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.OPTIMISM_GOERLI]: new V4Pool(
    nativeOnChain(DepricatedChainId.OPTIMISM_GOERLI),
    nativeOnChain(DepricatedChainId.OPTIMISM_GOERLI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.OPTIMISM_SEPOLIA]: new V4Pool(
    nativeOnChain(DepricatedChainId.OPTIMISM_SEPOLIA),
    nativeOnChain(DepricatedChainId.OPTIMISM_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.ARBITRUM_ONE]: new V4Pool(
    nativeOnChain(DepricatedChainId.ARBITRUM_ONE),
    nativeOnChain(DepricatedChainId.ARBITRUM_ONE).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.ARBITRUM_GOERLI]: new V4Pool(
    nativeOnChain(DepricatedChainId.ARBITRUM_GOERLI),
    nativeOnChain(DepricatedChainId.ARBITRUM_GOERLI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.ARBITRUM_SEPOLIA]: new V4Pool(
    nativeOnChain(DepricatedChainId.ARBITRUM_SEPOLIA),
    nativeOnChain(DepricatedChainId.ARBITRUM_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.POLYGON]: new V4Pool(
    nativeOnChain(DepricatedChainId.POLYGON),
    nativeOnChain(DepricatedChainId.POLYGON).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.POLYGON_MUMBAI]: new V4Pool(
    nativeOnChain(DepricatedChainId.POLYGON_MUMBAI),
    nativeOnChain(DepricatedChainId.POLYGON_MUMBAI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.CELO]: new V4Pool(
    nativeOnChain(DepricatedChainId.CELO),
    nativeOnChain(DepricatedChainId.CELO).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.CELO_ALFAJORES]: new V4Pool(
    nativeOnChain(DepricatedChainId.CELO_ALFAJORES),
    nativeOnChain(DepricatedChainId.CELO_ALFAJORES).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.GNOSIS]: new V4Pool(
    nativeOnChain(DepricatedChainId.GNOSIS),
    nativeOnChain(DepricatedChainId.GNOSIS).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.MOONBEAM]: new V4Pool(
    nativeOnChain(DepricatedChainId.MOONBEAM),
    nativeOnChain(DepricatedChainId.MOONBEAM).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.BNB]: new V4Pool(
    nativeOnChain(DepricatedChainId.BNB),
    nativeOnChain(DepricatedChainId.BNB).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.AVALANCHE]: new V4Pool(
    nativeOnChain(DepricatedChainId.AVALANCHE),
    nativeOnChain(DepricatedChainId.AVALANCHE).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.BASE_GOERLI]: new V4Pool(
    nativeOnChain(DepricatedChainId.BASE_GOERLI),
    nativeOnChain(DepricatedChainId.BASE_GOERLI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.BASE_SEPOLIA]: new V4Pool(
    nativeOnChain(DepricatedChainId.BASE_SEPOLIA),
    nativeOnChain(DepricatedChainId.BASE_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.BASE]: new V4Pool(
    nativeOnChain(DepricatedChainId.BASE),
    nativeOnChain(DepricatedChainId.BASE).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.ZORA]: new V4Pool(
    nativeOnChain(DepricatedChainId.ZORA),
    nativeOnChain(DepricatedChainId.ZORA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.ZORA_SEPOLIA]: new V4Pool(
    nativeOnChain(DepricatedChainId.ZORA_SEPOLIA),
    nativeOnChain(DepricatedChainId.ZORA_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.ROOTSTOCK]: new V4Pool(
    nativeOnChain(DepricatedChainId.ROOTSTOCK),
    nativeOnChain(DepricatedChainId.ROOTSTOCK).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.BLAST]: new V4Pool(
    nativeOnChain(DepricatedChainId.BLAST),
    nativeOnChain(DepricatedChainId.BLAST).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.ZKSYNC]: new V4Pool(
    nativeOnChain(DepricatedChainId.ZKSYNC),
    nativeOnChain(DepricatedChainId.ZKSYNC).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.WORLDCHAIN]: new V4Pool(
    nativeOnChain(DepricatedChainId.WORLDCHAIN),
    nativeOnChain(DepricatedChainId.WORLDCHAIN).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.UNICHAIN_SEPOLIA]: new V4Pool(
    nativeOnChain(DepricatedChainId.UNICHAIN_SEPOLIA),
    nativeOnChain(DepricatedChainId.UNICHAIN_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.UNICHAIN]: new V4Pool(
    nativeOnChain(DepricatedChainId.UNICHAIN),
    nativeOnChain(DepricatedChainId.UNICHAIN).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.MONAD_TESTNET]: new V4Pool(
    nativeOnChain(DepricatedChainId.MONAD_TESTNET),
    nativeOnChain(DepricatedChainId.MONAD_TESTNET).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [DepricatedChainId.SONEIUM]: new V4Pool(
    nativeOnChain(DepricatedChainId.SONEIUM),
    nativeOnChain(DepricatedChainId.SONEIUM).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
};
