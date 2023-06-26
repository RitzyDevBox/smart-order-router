import { Interface } from '@ethersproject/abi';
import { parseBytes32String } from '@ethersproject/strings';
import { ChainId, Token } from '@uniswap/sdk-core';
import _ from 'lodash';
import { IERC20Metadata__factory } from '../types/v3/factories/IERC20Metadata__factory';
import { log, WRAPPED_NATIVE_CURRENCY } from '../util';
// Some well known tokens on each chain for seeding cache / testing.
export const USDC_MAINNET = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C');
export const USDT_MAINNET = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD');
export const WBTC_MAINNET = new Token(ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC');
export const DAI_MAINNET = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin');
export const FEI_MAINNET = new Token(ChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD');
export const UNI_MAINNET = new Token(ChainId.MAINNET, '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', 18, 'UNI', 'Uniswap');
export const USDC_SEPOLIA = new Token(ChainId.SEPOLIA, '0x6f14C02Fc1F78322cFd7d707aB90f18baD3B54f5', 18, 'USDC', 'USDC Token');
export const DAI_SEPOLIA = new Token(ChainId.SEPOLIA, '0x7AF17A48a6336F7dc1beF9D485139f7B6f4FB5C8', 18, 'DAI', 'DAI Token');
export const USDC_GOERLI = new Token(ChainId.GOERLI, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
export const USDT_GOERLI = new Token(ChainId.GOERLI, '0xe583769738b6dd4e7caf8451050d1948be717679', 18, 'USDT', 'Tether USD');
export const WBTC_GOERLI = new Token(ChainId.GOERLI, '0xa0a5ad2296b38bd3e3eb59aaeaf1589e8d9a29a9', 8, 'WBTC', 'Wrapped BTC');
export const DAI_GOERLI = new Token(ChainId.GOERLI, '0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844', 18, 'DAI', 'Dai Stablecoin');
export const UNI_GOERLI = new Token(ChainId.GOERLI, '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 18, 'UNI', 'Uni token');
export const USDC_OPTIMISM = new Token(ChainId.OPTIMISM, '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', 6, 'USDC', 'USD//C');
export const USDT_OPTIMISM = new Token(ChainId.OPTIMISM, '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', 6, 'USDT', 'Tether USD');
export const WBTC_OPTIMISM = new Token(ChainId.OPTIMISM, '0x68f180fcCe6836688e9084f035309E29Bf0A2095', 8, 'WBTC', 'Wrapped BTC');
export const DAI_OPTIMISM = new Token(ChainId.OPTIMISM, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
export const OP_OPTIMISM = new Token(ChainId.OPTIMISM, '0x4200000000000000000000000000000000000042', 18, 'OP', 'Optimism');
export const USDC_OPTIMISM_GOERLI = new Token(ChainId.OPTIMISM_GOERLI, '0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E', 6, 'USDC', 'USD//C');
export const USDT_OPTIMISM_GOERLI = new Token(ChainId.OPTIMISM_GOERLI, '0x853eb4bA5D0Ba2B77a0A5329Fd2110d5CE149ECE', 6, 'USDT', 'Tether USD');
export const WBTC_OPTIMISM_GOERLI = new Token(ChainId.OPTIMISM_GOERLI, '0xe0a592353e81a94Db6E3226fD4A99F881751776a', 8, 'WBTC', 'Wrapped BTC');
export const DAI_OPTIMISM_GOERLI = new Token(ChainId.OPTIMISM_GOERLI, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
export const USDC_ARBITRUM = new Token(ChainId.ARBITRUM_ONE, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC', 'USD//C');
export const USDT_ARBITRUM = new Token(ChainId.ARBITRUM_ONE, '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', 6, 'USDT', 'Tether USD');
export const WBTC_ARBITRUM = new Token(ChainId.ARBITRUM_ONE, '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 8, 'WBTC', 'Wrapped BTC');
export const DAI_ARBITRUM = new Token(ChainId.ARBITRUM_ONE, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
export const ARB_ARBITRUM = new Token(ChainId.ARBITRUM_ONE, '0x912CE59144191C1204E64559FE8253a0e49E6548', 18, 'ARB', 'Arbitrum');
export const DAI_ARBITRUM_GOERLI = new Token(ChainId.ARBITRUM_GOERLI, '0x0000000000000000000000000000000000000000', // TODO: add address
18, 'DAI', 'Dai Stablecoin');
// Bridged version of official Goerli USDC
export const USDC_ARBITRUM_GOERLI = new Token(ChainId.ARBITRUM_GOERLI, '0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892', 6, 'USDC', 'USD//C');
//polygon tokens
export const WMATIC_POLYGON = new Token(ChainId.POLYGON, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC');
export const WETH_POLYGON = new Token(ChainId.POLYGON, '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 18, 'WETH', 'Wrapped Ether');
export const USDC_POLYGON = new Token(ChainId.POLYGON, '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 6, 'USDC', 'USD//C');
export const DAI_POLYGON = new Token(ChainId.POLYGON, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'Dai Stablecoin');
//polygon mumbai tokens
export const WMATIC_POLYGON_MUMBAI = new Token(ChainId.POLYGON_MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped MATIC');
export const USDC_POLYGON_MUMBAI = new Token(ChainId.POLYGON_MUMBAI, '0xe11a86849d99f524cac3e7a0ec1241828e332c62', 6, 'USDC', 'USD//C');
export const DAI_POLYGON_MUMBAI = new Token(ChainId.POLYGON_MUMBAI, '0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f', 18, 'DAI', 'Dai Stablecoin');
export const WETH_POLYGON_MUMBAI = new Token(ChainId.POLYGON_MUMBAI, '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa', 18, 'WETH', 'Wrapped Ether');
// BNB chain Tokens
export const BTC_BNB = new Token(ChainId.BNB, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC');
export const BUSD_BNB = new Token(ChainId.BNB, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'BUSD');
export const DAI_BNB = new Token(ChainId.BNB, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'DAI');
export const ETH_BNB = new Token(ChainId.BNB, '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', 18, 'ETH', 'ETH');
export const USDC_BNB = new Token(ChainId.BNB, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC', 'USDC');
export const USDT_BNB = new Token(ChainId.BNB, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'USDT');
// Celo Tokens
export const CELO = new Token(ChainId.CELO, '0x471EcE3750Da237f93B8E339c536989b8978a438', 18, 'CELO', 'Celo native asset');
export const DAI_CELO = new Token(ChainId.CELO, '0xE4fE50cdD716522A56204352f00AA110F731932d', 18, 'DAI', 'Dai Stablecoin');
export const CUSD_CELO = new Token(ChainId.CELO, '0x765DE816845861e75A25fCA122bb6898B8B1282a', 18, 'CUSD', 'Celo Dollar Stablecoin');
export const CEUR_CELO = new Token(ChainId.CELO, '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73', 18, 'CEUR', 'Celo Euro Stablecoin');
// Celo Alfajores Tokens
export const CELO_ALFAJORES = new Token(ChainId.CELO_ALFAJORES, '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9', 18, 'CELO', 'Celo native asset');
export const DAI_CELO_ALFAJORES = new Token(ChainId.CELO_ALFAJORES, '0x7d91E51C8F218f7140188A155f5C75388630B6a8', 18, 'DAI', 'Dai Stablecoin');
export const CUSD_CELO_ALFAJORES = new Token(ChainId.CELO_ALFAJORES, '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1', 18, 'CUSD', 'Celo Dollar Stablecoin');
export const CEUR_CELO_ALFAJORES = new Token(ChainId.CELO_ALFAJORES, '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F', 18, 'CEUR', 'Celo Euro Stablecoin');
// Avalanche Tokens
export const DAI_AVAX = new Token(ChainId.AVALANCHE, '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', 18, 'DAI.e', 'DAI.e Token');
export const USDC_AVAX = new Token(ChainId.AVALANCHE, '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', 6, 'USDC', 'USDC Token');
// Gnosis Tokens
export const USDC_ETHEREUM_GNOSIS = new Token(ChainId.GNOSIS, '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83', 6, 'USDC', 'USDC from Ethereum on Gnosis');
export const WXDAI_GNOSIS = new Token(ChainId.GNOSIS, '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d', 18, 'WXDAI', 'Wrapped XDAI on Gnosis');
export const WBTC_GNOSIS = new Token(ChainId.GNOSIS, '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252', 8, 'WBTC', 'Wrapped BTC from Ethereum on Gnosis');
// Moonbeam Tokens
export const USDC_MOONBEAM = new Token(ChainId.MOONBEAM, '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b', 6, 'USDC', 'USD Coin bridged using Multichain');
export const WGLMR_MOONBEAM = new Token(ChainId.MOONBEAM, '0xAcc15dC74880C9944775448304B263D191c6077F', 18, 'WGLMR', 'Wrapped GLMR');
export const DAI_MOONBEAM = new Token(ChainId.MOONBEAM, '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b', 6, 'DAI', 'Dai on moonbeam bridged using Multichain');
export const WBTC_MOONBEAM = new Token(ChainId.MOONBEAM, '0x922D641a426DcFFaeF11680e5358F34d97d112E1', 8, 'WBTC', 'Wrapped BTC bridged using Multichain');
// BOBA Tokens
export const BOBA = new Token(ChainId.BOBA, '0xa18bf3994c0cc6e3b63ac420308e5383f53120d7', 18, 'BOBA', 'Boba native asset');
export const USDC_BOBA = new Token(ChainId.BOBA, '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc', 6, 'USDC', 'USD Coin');
export class TokenProvider {
    constructor(chainId, multicall2Provider) {
        this.chainId = chainId;
        this.multicall2Provider = multicall2Provider;
    }
    async getTokenSymbol(addresses, providerConfig) {
        let result;
        let isBytes32 = false;
        try {
            result = await this.multicall2Provider.callSameFunctionOnMultipleContracts({
                addresses,
                contractInterface: IERC20Metadata__factory.createInterface(),
                functionName: 'symbol',
                providerConfig,
            });
        }
        catch (error) {
            log.error({ addresses }, `TokenProvider.getTokenSymbol[string] failed with error ${error}. Trying with bytes32.`);
            const bytes32Interface = new Interface([
                {
                    inputs: [],
                    name: 'symbol',
                    outputs: [
                        {
                            internalType: 'bytes32',
                            name: '',
                            type: 'bytes32',
                        },
                    ],
                    stateMutability: 'view',
                    type: 'function',
                }
            ]);
            try {
                result = await this.multicall2Provider.callSameFunctionOnMultipleContracts({
                    addresses,
                    contractInterface: bytes32Interface,
                    functionName: 'symbol',
                    providerConfig,
                });
                isBytes32 = true;
            }
            catch (error) {
                log.fatal({ addresses }, `TokenProvider.getTokenSymbol[bytes32] failed with error ${error}.`);
                throw new Error('[TokenProvider.getTokenSymbol] Impossible to fetch token symbol.');
            }
        }
        return { result, isBytes32 };
    }
    async getTokenDecimals(addresses, providerConfig) {
        return this.multicall2Provider.callSameFunctionOnMultipleContracts({
            addresses,
            contractInterface: IERC20Metadata__factory.createInterface(),
            functionName: 'decimals',
            providerConfig,
        });
    }
    async getTokens(_addresses, providerConfig) {
        const addressToToken = {};
        const symbolToToken = {};
        const addresses = _(_addresses)
            .map((address) => address.toLowerCase())
            .uniq()
            .value();
        if (addresses.length > 0) {
            const [symbolsResult, decimalsResult] = await Promise.all([
                this.getTokenSymbol(addresses, providerConfig),
                this.getTokenDecimals(addresses, providerConfig)
            ]);
            const isBytes32 = symbolsResult.isBytes32;
            const { results: symbols } = symbolsResult.result;
            const { results: decimals } = decimalsResult;
            for (let i = 0; i < addresses.length; i++) {
                const address = addresses[i];
                const symbolResult = symbols[i];
                const decimalResult = decimals[i];
                if (!(symbolResult === null || symbolResult === void 0 ? void 0 : symbolResult.success) || !(decimalResult === null || decimalResult === void 0 ? void 0 : decimalResult.success)) {
                    log.info({
                        symbolResult,
                        decimalResult,
                    }, `Dropping token with address ${address} as symbol or decimal are invalid`);
                    continue;
                }
                const symbol = isBytes32 ? parseBytes32String(symbolResult.result[0]) : symbolResult.result[0];
                const decimal = decimalResult.result[0];
                addressToToken[address.toLowerCase()] = new Token(this.chainId, address, decimal, symbol);
                symbolToToken[symbol.toLowerCase()] =
                    addressToToken[address.toLowerCase()];
            }
            log.info(`Got token symbol and decimals for ${Object.values(addressToToken).length} out of ${addresses.length} tokens on-chain ${providerConfig ? `as of: ${providerConfig === null || providerConfig === void 0 ? void 0 : providerConfig.blockNumber}` : ''}`);
        }
        return {
            getTokenByAddress: (address) => {
                return addressToToken[address.toLowerCase()];
            },
            getTokenBySymbol: (symbol) => {
                return symbolToToken[symbol.toLowerCase()];
            },
            getAllTokens: () => {
                return Object.values(addressToToken);
            },
        };
    }
}
export const DAI_ON = (chainId) => {
    switch (chainId) {
        case ChainId.MAINNET:
            return DAI_MAINNET;
        case ChainId.GOERLI:
            return DAI_GOERLI;
        case ChainId.SEPOLIA:
            return DAI_SEPOLIA;
        case ChainId.OPTIMISM:
            return DAI_OPTIMISM;
        case ChainId.OPTIMISM_GOERLI:
            return DAI_OPTIMISM_GOERLI;
        case ChainId.ARBITRUM_ONE:
            return DAI_ARBITRUM;
        case ChainId.ARBITRUM_GOERLI:
            return DAI_ARBITRUM_GOERLI;
        case ChainId.POLYGON:
            return DAI_POLYGON;
        case ChainId.POLYGON_MUMBAI:
            return DAI_POLYGON_MUMBAI;
        case ChainId.CELO:
            return DAI_CELO;
        case ChainId.CELO_ALFAJORES:
            return DAI_CELO_ALFAJORES;
        case ChainId.MOONBEAM:
            return DAI_MOONBEAM;
        case ChainId.BNB:
            return DAI_BNB;
        case ChainId.AVALANCHE:
            return DAI_AVAX;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
export const USDT_ON = (chainId) => {
    switch (chainId) {
        case ChainId.MAINNET:
            return USDT_MAINNET;
        case ChainId.GOERLI:
            return USDT_GOERLI;
        case ChainId.OPTIMISM:
            return USDT_OPTIMISM;
        case ChainId.OPTIMISM_GOERLI:
            return USDT_OPTIMISM_GOERLI;
        case ChainId.ARBITRUM_ONE:
            return USDT_ARBITRUM;
        case ChainId.BNB:
            return USDT_BNB;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
export const USDC_ON = (chainId) => {
    switch (chainId) {
        case ChainId.MAINNET:
            return USDC_MAINNET;
        case ChainId.GOERLI:
            return USDC_GOERLI;
        case ChainId.SEPOLIA:
            return USDC_SEPOLIA;
        case ChainId.OPTIMISM:
            return USDC_OPTIMISM;
        case ChainId.OPTIMISM_GOERLI:
            return USDC_OPTIMISM_GOERLI;
        case ChainId.ARBITRUM_ONE:
            return USDC_ARBITRUM;
        case ChainId.ARBITRUM_GOERLI:
            return USDC_ARBITRUM_GOERLI;
        case ChainId.POLYGON:
            return USDC_POLYGON;
        case ChainId.POLYGON_MUMBAI:
            return USDC_POLYGON_MUMBAI;
        case ChainId.GNOSIS:
            return USDC_ETHEREUM_GNOSIS;
        case ChainId.MOONBEAM:
            return USDC_MOONBEAM;
        case ChainId.BNB:
            return USDC_BNB;
        case ChainId.AVALANCHE:
            return USDC_AVAX;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
export const WNATIVE_ON = (chainId) => {
    return WRAPPED_NATIVE_CURRENCY[chainId];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJvdmlkZXJzL3Rva2VuLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBK0J2RCxvRUFBb0U7QUFDcEUsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLElBQUksS0FBSyxDQUNuQyxPQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxDQUFDLEVBQ0QsTUFBTSxFQUNOLFFBQVEsQ0FDVCxDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLElBQUksS0FBSyxDQUNuQyxPQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxDQUFDLEVBQ0QsTUFBTSxFQUNOLFlBQVksQ0FDYixDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLElBQUksS0FBSyxDQUNuQyxPQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxDQUFDLEVBQ0QsTUFBTSxFQUNOLGFBQWEsQ0FDZCxDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLElBQUksS0FBSyxDQUNsQyxPQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsS0FBSyxFQUNMLGdCQUFnQixDQUNqQixDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLElBQUksS0FBSyxDQUNsQyxPQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsS0FBSyxFQUNMLFNBQVMsQ0FDVixDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLElBQUksS0FBSyxDQUNsQyxPQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsS0FBSyxFQUNMLFNBQVMsQ0FDVixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLElBQUksS0FBSyxDQUNuQyxPQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsTUFBTSxFQUNOLFlBQVksQ0FDYixDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLElBQUksS0FBSyxDQUNsQyxPQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsS0FBSyxFQUNMLFdBQVcsQ0FDWixDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLElBQUksS0FBSyxDQUNsQyxPQUFPLENBQUMsTUFBTSxFQUNkLDRDQUE0QyxFQUM1QyxDQUFDLEVBQ0QsTUFBTSxFQUNOLFFBQVEsQ0FDVCxDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLElBQUksS0FBSyxDQUNsQyxPQUFPLENBQUMsTUFBTSxFQUNkLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsTUFBTSxFQUNOLFlBQVksQ0FDYixDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLElBQUksS0FBSyxDQUNsQyxPQUFPLENBQUMsTUFBTSxFQUNkLDRDQUE0QyxFQUM1QyxDQUFDLEVBQ0QsTUFBTSxFQUNOLGFBQWEsQ0FDZCxDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLElBQUksS0FBSyxDQUNqQyxPQUFPLENBQUMsTUFBTSxFQUNkLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsS0FBSyxFQUNMLGdCQUFnQixDQUNqQixDQUFDO0FBQ0YsTUFB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