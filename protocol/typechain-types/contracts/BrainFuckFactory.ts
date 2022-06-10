/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  EventFragment,
  FunctionFragment,
  Result,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type {
  OnEvent,
  TypedEvent,
  TypedEventFilter,
  TypedListener,
} from '../common';

export declare namespace BrainFuckFactory {
  export type CreateBrainFuckNFTConfigStruct = {
    name: string;
    symbol: string;
    additionalMetadataURI: string;
    seed: BytesLike;
    constants: BytesLike;
    code: BytesLike;
    renderer: string;
    mintingSupply: BigNumberish;
    price: BigNumberish;
    royaltyFraction: BigNumberish;
    isActive: boolean;
  };

  export type CreateBrainFuckNFTConfigStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
  ] & {
    name: string;
    symbol: string;
    additionalMetadataURI: string;
    seed: string;
    constants: string;
    code: string;
    renderer: string;
    mintingSupply: BigNumber;
    price: BigNumber;
    royaltyFraction: BigNumber;
    isActive: boolean;
  };
}

export interface BrainFuckFactoryInterface extends utils.Interface {
  functions: {
    'VERSION()': FunctionFragment;
    'addressToProjectId(address)': FunctionFragment;
    'createNFT((string,string,string,bytes,bytes8,bytes,address,uint256,uint256,uint96,bool))': FunctionFragment;
    'projectIdIndex()': FunctionFragment;
    'projectIdToAddress(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'VERSION'
      | 'addressToProjectId'
      | 'createNFT'
      | 'projectIdIndex'
      | 'projectIdToAddress',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'VERSION', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'addressToProjectId',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'createNFT',
    values: [BrainFuckFactory.CreateBrainFuckNFTConfigStruct],
  ): string;
  encodeFunctionData(
    functionFragment: 'projectIdIndex',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'projectIdToAddress',
    values: [BigNumberish],
  ): string;

  decodeFunctionResult(functionFragment: 'VERSION', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'addressToProjectId',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'createNFT', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'projectIdIndex',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'projectIdToAddress',
    data: BytesLike,
  ): Result;

  events: {
    'CreatedBrainFuckNFT(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CreatedBrainFuckNFT'): EventFragment;
}

export interface CreatedBrainFuckNFTEventObject {
  nft: string;
  creator: string;
}
export type CreatedBrainFuckNFTEvent = TypedEvent<
  [string, string],
  CreatedBrainFuckNFTEventObject
>;

export type CreatedBrainFuckNFTEventFilter =
  TypedEventFilter<CreatedBrainFuckNFTEvent>;

export interface BrainFuckFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BrainFuckFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    VERSION(overrides?: CallOverrides): Promise<[BigNumber]>;

    addressToProjectId(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    createNFT(
      config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    projectIdIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    projectIdToAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>;
  };

  VERSION(overrides?: CallOverrides): Promise<BigNumber>;

  addressToProjectId(
    arg0: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  createNFT(
    config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  projectIdIndex(overrides?: CallOverrides): Promise<BigNumber>;

  projectIdToAddress(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>;

  callStatic: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    addressToProjectId(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    createNFT(
      config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
      overrides?: CallOverrides,
    ): Promise<void>;

    projectIdIndex(overrides?: CallOverrides): Promise<BigNumber>;

    projectIdToAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;
  };

  filters: {
    'CreatedBrainFuckNFT(address,address)'(
      nft?: null,
      creator?: null,
    ): CreatedBrainFuckNFTEventFilter;
    CreatedBrainFuckNFT(
      nft?: null,
      creator?: null,
    ): CreatedBrainFuckNFTEventFilter;
  };

  estimateGas: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    addressToProjectId(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    createNFT(
      config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    projectIdIndex(overrides?: CallOverrides): Promise<BigNumber>;

    projectIdToAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addressToProjectId(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    createNFT(
      config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    projectIdIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projectIdToAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
