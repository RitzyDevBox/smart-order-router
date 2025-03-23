import { BigNumber } from '@ethersproject/bignumber';
import { Protocol } from '@rtz-dex-tools/router-sdk';
import { Currency, DepricatedChainId } from '@rtz-dex-tools/sdk-core';

import { AAVE_MAINNET, LIDO_MAINNET } from '../../../providers';
import { V3Route, V4Route } from '../../router';

// Cost for crossing an uninitialized tick.
export const COST_PER_UNINIT_TICK = BigNumber.from(0);

//l2 execution fee on optimism is roughly the same as mainnet
export const BASE_SWAP_COST = (id: DepricatedChainId): BigNumber => {
  switch (id) {
    case DepricatedChainId.MAINNET:
    case DepricatedChainId.GOERLI:
    case DepricatedChainId.SEPOLIA:
    case DepricatedChainId.OPTIMISM:
    case DepricatedChainId.OPTIMISM_GOERLI:
    case DepricatedChainId.OPTIMISM_SEPOLIA:
    case DepricatedChainId.BNB:
    case DepricatedChainId.AVALANCHE:
    case DepricatedChainId.BASE:
    case DepricatedChainId.BASE_GOERLI:
    case DepricatedChainId.ZORA:
    case DepricatedChainId.ZORA_SEPOLIA:
    case DepricatedChainId.ROOTSTOCK:
    case DepricatedChainId.BLAST:
    case DepricatedChainId.ZKSYNC:
    case DepricatedChainId.WORLDCHAIN:
    case DepricatedChainId.UNICHAIN_SEPOLIA:
    case DepricatedChainId.UNICHAIN:
    case DepricatedChainId.BASE_SEPOLIA:
    case DepricatedChainId.MONAD_TESTNET: // TODO: double check on monad gas
    case DepricatedChainId.SONEIUM:
      return BigNumber.from(2000);
    case DepricatedChainId.ARBITRUM_ONE:
    case DepricatedChainId.ARBITRUM_GOERLI:
    case DepricatedChainId.ARBITRUM_SEPOLIA:
      return BigNumber.from(5000);
    case DepricatedChainId.POLYGON:
    case DepricatedChainId.POLYGON_MUMBAI:
      return BigNumber.from(2000);

    case DepricatedChainId.CELO:
    case DepricatedChainId.CELO_ALFAJORES:
      return BigNumber.from(2000);

    //TODO determine if sufficient
    case DepricatedChainId.GNOSIS:
      return BigNumber.from(2000);
    case DepricatedChainId.MOONBEAM:
      return BigNumber.from(2000);
  }
};
export const COST_PER_INIT_TICK = (id: DepricatedChainId): BigNumber => {
  switch (id) {
    case DepricatedChainId.MAINNET:
    case DepricatedChainId.GOERLI:
    case DepricatedChainId.SEPOLIA:
    case DepricatedChainId.BNB:
    case DepricatedChainId.AVALANCHE:
      return BigNumber.from(31000);
    case DepricatedChainId.OPTIMISM:
    case DepricatedChainId.OPTIMISM_GOERLI:
    case DepricatedChainId.OPTIMISM_SEPOLIA:
    case DepricatedChainId.BASE:
    case DepricatedChainId.BASE_GOERLI:
    case DepricatedChainId.ZORA:
    case DepricatedChainId.ZORA_SEPOLIA:
    case DepricatedChainId.ROOTSTOCK:
    case DepricatedChainId.BLAST:
    case DepricatedChainId.ZKSYNC:
    case DepricatedChainId.WORLDCHAIN:
    case DepricatedChainId.UNICHAIN_SEPOLIA:
    case DepricatedChainId.UNICHAIN:
    case DepricatedChainId.BASE_SEPOLIA:
    case DepricatedChainId.MONAD_TESTNET: // TODO: double check on monad gas
    case DepricatedChainId.SONEIUM:
      return BigNumber.from(31000);
    case DepricatedChainId.ARBITRUM_ONE:
    case DepricatedChainId.ARBITRUM_GOERLI:
    case DepricatedChainId.ARBITRUM_SEPOLIA:
      return BigNumber.from(31000);
    case DepricatedChainId.POLYGON:
    case DepricatedChainId.POLYGON_MUMBAI:
      return BigNumber.from(31000);
    case DepricatedChainId.CELO:
    case DepricatedChainId.CELO_ALFAJORES:
      return BigNumber.from(31000);
    case DepricatedChainId.GNOSIS:
      return BigNumber.from(31000);
    case DepricatedChainId.MOONBEAM:
      return BigNumber.from(31000);
  }
};

export const COST_PER_HOP = (id: DepricatedChainId): BigNumber => {
  switch (id) {
    case DepricatedChainId.MAINNET:
    case DepricatedChainId.GOERLI:
    case DepricatedChainId.SEPOLIA:
    case DepricatedChainId.BNB:
    case DepricatedChainId.OPTIMISM:
    case DepricatedChainId.OPTIMISM_GOERLI:
    case DepricatedChainId.OPTIMISM_SEPOLIA:
    case DepricatedChainId.AVALANCHE:
    case DepricatedChainId.BASE:
    case DepricatedChainId.BASE_GOERLI:
    case DepricatedChainId.ZORA:
    case DepricatedChainId.ZORA_SEPOLIA:
    case DepricatedChainId.ROOTSTOCK:
    case DepricatedChainId.BLAST:
    case DepricatedChainId.ZKSYNC:
    case DepricatedChainId.WORLDCHAIN:
    case DepricatedChainId.UNICHAIN_SEPOLIA:
    case DepricatedChainId.UNICHAIN:
    case DepricatedChainId.BASE_SEPOLIA:
    case DepricatedChainId.MONAD_TESTNET: // TODO: double check on monad gas
    case DepricatedChainId.SONEIUM:
      return BigNumber.from(80000);
    case DepricatedChainId.ARBITRUM_ONE:
    case DepricatedChainId.ARBITRUM_GOERLI:
    case DepricatedChainId.ARBITRUM_SEPOLIA:
      return BigNumber.from(80000);
    case DepricatedChainId.POLYGON:
    case DepricatedChainId.POLYGON_MUMBAI:
      return BigNumber.from(80000);
    case DepricatedChainId.CELO:
    case DepricatedChainId.CELO_ALFAJORES:
      return BigNumber.from(80000);
    case DepricatedChainId.GNOSIS:
      return BigNumber.from(80000);
    case DepricatedChainId.MOONBEAM:
      return BigNumber.from(80000);
  }
};

export const SINGLE_HOP_OVERHEAD = (_id: DepricatedChainId): BigNumber => {
  return BigNumber.from(15000);
};

export const TOKEN_OVERHEAD = (
  id: DepricatedChainId,
  route: V3Route | V4Route
): BigNumber => {
  const currencies: Currency[] =
    route.protocol === Protocol.V4 ? route.currencyPath : route.tokenPath;
  let overhead = BigNumber.from(0);

  if (id == DepricatedChainId.MAINNET) {
    // AAVE's transfer contains expensive governance snapshotting logic. We estimate
    // it at around 150k.
    if (currencies.some((t: Currency) => t.equals(AAVE_MAINNET))) {
      overhead = overhead.add(150000);
    }

    // LDO's reaches out to an external token controller which adds a large overhead
    // of around 150k.
    if (currencies.some((t: Currency) => t.equals(LIDO_MAINNET))) {
      overhead = overhead.add(150000);
    }
  }

  return overhead;
};

// TODO: change per chain
export const NATIVE_WRAP_OVERHEAD = (id: DepricatedChainId): BigNumber => {
  switch (id) {
    default:
      return BigNumber.from(27938);
  }
};

export const NATIVE_UNWRAP_OVERHEAD = (id: DepricatedChainId): BigNumber => {
  switch (id) {
    default:
      return BigNumber.from(36000);
  }
};

export const NATIVE_OVERHEAD = (
  chainId: DepricatedChainId,
  amount: Currency,
  quote: Currency
): BigNumber => {
  if (amount.isNative) {
    // need to wrap eth in
    return NATIVE_WRAP_OVERHEAD(chainId);
  }
  if (quote.isNative) {
    // need to unwrap eth out
    return NATIVE_UNWRAP_OVERHEAD(chainId);
  }
  return BigNumber.from(0);
};
