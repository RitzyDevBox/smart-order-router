/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DepricatedChainId, Token } from '@rtz-dex-tools/sdk-core';

import {
  BTC_BNB,
  BUSD_BNB,
  DAI_AVAX,
  DAI_BNB,
  DAI_MAINNET,
  DAI_UNICHAIN,
  ITokenProvider,
  USDB_BLAST,
  USDCE_ZKSYNC,
  USDC_AVAX,
  USDC_BASE,
  USDC_BASE_SEPOLIA,
  USDC_BNB,
  USDC_MAINNET,
  USDC_SONEIUM,
  USDC_UNICHAIN,
  USDC_UNICHAIN_SEPOLIA,
  USDC_WORLDCHAIN,
  USDC_ZKSYNC,
  USDT_BNB,
  USDT_MAINNET,
  USDT_MONAD_TESTNET,
  WBTC_MAINNET,
  WBTC_WORLDCHAIN,
  WLD_WORLDCHAIN,
  WMATIC_POLYGON,
  WMATIC_POLYGON_MUMBAI,
} from '../../providers/token-provider';
import { WRAPPED_NATIVE_CURRENCY } from '../../util/chains';

type ChainTokenList = {
  readonly [chainId in DepricatedChainId]: Token[];
};

export const BASES_TO_CHECK_TRADES_AGAINST = (
  _tokenProvider: ITokenProvider
): ChainTokenList => {
  return {
    [DepricatedChainId.MAINNET]: [
      WRAPPED_NATIVE_CURRENCY[DepricatedChainId.MAINNET]!,
      DAI_MAINNET,
      USDC_MAINNET,
      USDT_MAINNET,
      WBTC_MAINNET,
    ],
    [DepricatedChainId.GOERLI]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.GOERLI]!],
    [DepricatedChainId.SEPOLIA]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.SEPOLIA]!],
    [DepricatedChainId.OPTIMISM]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.OPTIMISM]!],
    [DepricatedChainId.OPTIMISM_GOERLI]: [
      WRAPPED_NATIVE_CURRENCY[DepricatedChainId.OPTIMISM_GOERLI]!,
    ],
    [DepricatedChainId.OPTIMISM_SEPOLIA]: [
      WRAPPED_NATIVE_CURRENCY[DepricatedChainId.OPTIMISM_SEPOLIA]!,
    ],
    [DepricatedChainId.ARBITRUM_ONE]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ARBITRUM_ONE]!],
    [DepricatedChainId.ARBITRUM_GOERLI]: [
      WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ARBITRUM_GOERLI]!,
    ],
    [DepricatedChainId.ARBITRUM_SEPOLIA]: [
      WRAPPED_NATIVE_CURRENCY[DepricatedChainId.ARBITRUM_SEPOLIA]!,
    ],
    [DepricatedChainId.POLYGON]: [WMATIC_POLYGON],
    [DepricatedChainId.POLYGON_MUMBAI]: [WMATIC_POLYGON_MUMBAI],
    [DepricatedChainId.CELO]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.CELO]],
    [DepricatedChainId.CELO_ALFAJORES]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.CELO_ALFAJORES]],
    [DepricatedChainId.GNOSIS]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.GNOSIS]],
    [DepricatedChainId.MOONBEAM]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.MOONBEAM]],
    [DepricatedChainId.BNB]: [
      WRAPPED_NATIVE_CURRENCY[DepricatedChainId.BNB]!,
      BUSD_BNB,
      DAI_BNB,
      USDC_BNB,
      USDT_BNB,
      BTC_BNB,
    ],
    [DepricatedChainId.AVALANCHE]: [
      WRAPPED_NATIVE_CURRENCY[DepricatedChainId.AVALANCHE]!,
      USDC_AVAX,
      DAI_AVAX,
    ],
    [DepricatedChainId.BASE]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.BASE]!, USDC_BASE],
    [DepricatedChainId.BASE_GOERLI]: [WRAPPED_NATIVE_CURRENCY[DepricatedChainId.BASE_GOERLI]!],
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
    [DepricatedChainId.SONEIUM]: [
      WRAPPED_NATIVE_CURRENCY[DepricatedChainId.SONEIUM]!,
      USDC_SONEIUM,
    ],
  };
};

const getBasePairByAddress = async (
  tokenProvider: ITokenProvider,
  _chainId: DepricatedChainId,
  fromAddress: string,
  toAddress: string
): Promise<{ [tokenAddress: string]: Token[] }> => {
  const accessor = await tokenProvider.getTokens([toAddress]);
  const toToken: Token | undefined = accessor.getTokenByAddress(toAddress);

  if (!toToken) return {};

  return {
    [fromAddress]: [toToken],
  };
};

export const ADDITIONAL_BASES = async (
  tokenProvider: ITokenProvider
): Promise<{
  [chainId in DepricatedChainId]?: { [tokenAddress: string]: Token[] };
}> => {
  return {
    [DepricatedChainId.MAINNET]: {
      ...(await getBasePairByAddress(
        tokenProvider,
        DepricatedChainId.MAINNET,
        '0xA948E86885e12Fb09AfEF8C52142EBDbDf73cD18',
        '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        DepricatedChainId.MAINNET,
        '0x561a4717537ff4AF5c687328c0f7E90a319705C0',
        '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        DepricatedChainId.MAINNET,
        '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
        '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        DepricatedChainId.MAINNET,
        '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',
        '0x956F47F50A910163D8BF957Cf5846D573E7f87CA'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        DepricatedChainId.MAINNET,
        '0x853d955acef822db058eb8505911ed77f175b99e',
        '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        DepricatedChainId.MAINNET,
        '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
        '0x853d955acef822db058eb8505911ed77f175b99e'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        DepricatedChainId.MAINNET,
        '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        DepricatedChainId.MAINNET,
        '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
        '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
      )),
    },
  };
};

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES = async (
  tokenProvider: ITokenProvider
): Promise<{
  [chainId in DepricatedChainId]?: { [tokenAddress: string]: Token[] };
}> => {
  return {
    [DepricatedChainId.MAINNET]: {
      ...(await getBasePairByAddress(
        tokenProvider,
        DepricatedChainId.MAINNET,
        '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
        DAI_MAINNET.address
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        DepricatedChainId.MAINNET,
        '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
        WRAPPED_NATIVE_CURRENCY[1]!.address
      )),
    },
  };
};
