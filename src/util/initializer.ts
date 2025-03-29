import { Currency, Token } from '@rtz-dex-tools/sdk-core';
import { AlphaRouterConfig, V3Route, V4Route } from '../routers';
import { BigNumber } from 'ethers';

export interface SmartOrderRouterConfigProps {
    /**
     * Example: The address of the smart order router on a given chain
     */
    routerAddress: string;
    USDC?: Token
    DAI?: Token
    USDT?: Token
    WETH: Token
    CACHING_BASES_TO_CHECK_TRADES_AGAINST: Currency[] | undefined 
    V2_BASES_TO_CHECK_TRADES_AGAINST: Currency[] | undefined
    V3_BASES_TO_CHECK_TRADES_AGAINST: Currency[] | undefined
    CACHE_SEED_TOKENS: { [symbol: string]: Token }
    TENDERLY_NODE_API?: string,
    FEE_DETECTOR_ADDRESS?: string,
    V2_SUBGRAPH_URL_BY_CHAIN?: string
    V3_SUBGRAPH_URL_BY_CHAIN?: string
    V4_SUBGRAPH_URL_BY_CHAIN?: string
    v2Supported?: boolean
    v4Supported?: boolean
    mixedSupported?: boolean
    DEFAULT_ROUTING_CONFIG_BY_CHAIN: AlphaRouterConfig
    baseTokensByChain: Token[],
    BASE_SWAP_COST: BigNumber
    COST_PER_INIT_TICK: BigNumber
    COST_PER_HOP: BigNumber
    SINGLE_HOP_OVERHEAD: BigNumber
    TOKEN_OVERHEAD: Record<V3Route | V4Route, BigNumber>
    NATIVE_WRAP_OVERHEAD: BigNumber
    NATIVE_UNWRAP_OVERHEAD: BigNumber
    usdGasTokensByChain: Token[]
    ID_TO_PROVIDER: string
    NATIVE_CURRENCY_NAME: string
    /**
     * Add more properties below as needed...
     * e.g., feeCollectorAddress?: string;
     * e.g., subgraphUrl?: string;
     * e.g., etc...
     */
}

export type SmartOrderRouterConfigMap = Record<number, SmartOrderRouterConfigProps>;

const GLOBAL_SMART_ORDER_ROUTER_CONFIG_KEY = '__GLOBAL_SMART_ORDER_ROUTER_CONFIG__';

/**
 * Manages global SOR config for multiple chains.
 * Similar structure to ChainAddressConfig but for your SOR-specific data.
 */
export class SmartOrderRouterConfig {
    private configMap: SmartOrderRouterConfigMap = {};

    // Use a private constructor to force usage of the singleton pattern
    private constructor() {}

    private static get instance(): SmartOrderRouterConfig {
        if (!(globalThis as any)[GLOBAL_SMART_ORDER_ROUTER_CONFIG_KEY]) {
            (globalThis as any)[GLOBAL_SMART_ORDER_ROUTER_CONFIG_KEY] = new SmartOrderRouterConfig();
        }
        return (globalThis as any)[GLOBAL_SMART_ORDER_ROUTER_CONFIG_KEY];
    }

    /**
     * Initialize or optionally merge new SOR configurations.
     * If allowMerge = false (default), and configMap was already set, it will throw.
     */
    public static initialize(configMap: SmartOrderRouterConfigMap, allowMerge = false): void {
        if (!allowMerge && Object.keys(this.instance.configMap).length > 0) {
            throw new Error(
                'SmartOrderRouterConfig already initialized. To merge, set allowMerge=true.'
            );
        }

        this.instance.configMap = allowMerge
            ? { ...this.instance.configMap, ...configMap }
            : configMap;
    }

    /**
     * Retrieve the config for a specific chain.
     */
    public static getConfig(chainId: number): SmartOrderRouterConfigProps | undefined {
        return this.instance.configMap[chainId];
    }

    /**
     * Helper to retrieve a specific property by chainId if desired.
     */
    public static getRouterAddress(chainId: number): string | undefined {
        const chainConfig = this.getConfig(chainId);
        return chainConfig?.routerAddress;
    }

    /**
     * Get an array of chainIds that have a SOR config.
     */
    public static getChainIds(): number[] {
        return Object.keys(this.instance.configMap).map(Number);
    }
}
