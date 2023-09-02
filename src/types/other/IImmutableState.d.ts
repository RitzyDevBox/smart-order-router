/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IImmutableStateInterface extends ethers.utils.Interface {
  functions: {
    "factoryV2()": FunctionFragment;
    "positionManager()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "factoryV2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positionManager",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "factoryV2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionManager",
    data: BytesLike
  ): Result;

  events: {};
}

export class IImmutableState extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IImmutableStateInterface;

  functions: {
    factoryV2(overrides?: CallOverrides): Promise<[string]>;

    positionManager(overrides?: CallOverrides): Promise<[string]>;
  };

  factoryV2(overrides?: CallOverrides): Promise<string>;

  positionManager(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    factoryV2(overrides?: CallOverrides): Promise<string>;

    positionManager(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    factoryV2(overrides?: CallOverrides): Promise<BigNumber>;

    positionManager(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    factoryV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
