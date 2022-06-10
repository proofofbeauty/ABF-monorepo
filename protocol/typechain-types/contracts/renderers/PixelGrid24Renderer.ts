/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type {
  OnEvent,
  TypedEvent,
  TypedEventFilter,
  TypedListener,
} from '../../common';

export interface PixelGrid24RendererInterface extends utils.Interface {
  functions: {
    'additionalMetadataURI()': FunctionFragment;
    'attributes(bytes)': FunctionFragment;
    'outSize()': FunctionFragment;
    'render(bytes)': FunctionFragment;
    'renderAttributeKey()': FunctionFragment;
    'renderRaw(bytes)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'additionalMetadataURI'
      | 'attributes'
      | 'outSize'
      | 'render'
      | 'renderAttributeKey'
      | 'renderRaw'
      | 'supportsInterface',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'additionalMetadataURI',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'attributes',
    values: [BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'outSize', values?: undefined): string;
  encodeFunctionData(functionFragment: 'render', values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'renderAttributeKey',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'renderRaw',
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [BytesLike],
  ): string;

  decodeFunctionResult(
    functionFragment: 'additionalMetadataURI',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'attributes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'outSize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'render', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renderAttributeKey',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'renderRaw', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike,
  ): Result;

  events: {};
}

export interface PixelGrid24Renderer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PixelGrid24RendererInterface;

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
    additionalMetadataURI(overrides?: CallOverrides): Promise<[string]>;

    attributes(out: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    outSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    render(out: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    renderAttributeKey(overrides?: CallOverrides): Promise<[string]>;

    renderRaw(out: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
  };

  additionalMetadataURI(overrides?: CallOverrides): Promise<string>;

  attributes(out: BytesLike, overrides?: CallOverrides): Promise<string>;

  outSize(overrides?: CallOverrides): Promise<BigNumber>;

  render(out: BytesLike, overrides?: CallOverrides): Promise<string>;

  renderAttributeKey(overrides?: CallOverrides): Promise<string>;

  renderRaw(out: BytesLike, overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  callStatic: {
    additionalMetadataURI(overrides?: CallOverrides): Promise<string>;

    attributes(out: BytesLike, overrides?: CallOverrides): Promise<string>;

    outSize(overrides?: CallOverrides): Promise<BigNumber>;

    render(out: BytesLike, overrides?: CallOverrides): Promise<string>;

    renderAttributeKey(overrides?: CallOverrides): Promise<string>;

    renderRaw(out: BytesLike, overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    additionalMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    attributes(out: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    outSize(overrides?: CallOverrides): Promise<BigNumber>;

    render(out: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    renderAttributeKey(overrides?: CallOverrides): Promise<BigNumber>;

    renderRaw(out: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    additionalMetadataURI(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    attributes(
      out: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    outSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    render(
      out: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renderAttributeKey(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renderRaw(
      out: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
