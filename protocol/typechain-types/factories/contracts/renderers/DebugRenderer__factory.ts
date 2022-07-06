/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type { PromiseOrValue } from '../../../common';
import type {
  DebugRenderer,
  DebugRendererInterface,
} from '../../../contracts/renderers/DebugRenderer';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'additionalMetadataURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'props',
        type: 'bytes',
      },
    ],
    name: 'attributes',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'propsSize',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'props',
        type: 'bytes',
      },
    ],
    name: 'render',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renderAttributeKey',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'props',
        type: 'bytes',
      },
    ],
    name: 'renderRaw',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610fac8061010d6000396000f3fe608060405234801561001057600080fd5b506004361061009d5760003560e01c80638da5cb5b116100665780638da5cb5b1461015a57806392348b2214610178578063b0a2f64014610196578063effde6db146101c6578063f2fde38b146101e45761009d565b8062a85d69146100a257806301ffc9a7146100c0578063316df61e146100f057806343c5820c14610120578063715018a614610150575b600080fd5b6100aa610200565b6040516100b79190610b53565b60405180910390f35b6100da60048036038101906100d591906108be565b610228565b6040516100e79190610ad6565b60405180910390f35b61010a600480360381019061010591906108e7565b6102a2565b6040516101179190610af1565b60405180910390f35b61013a600480360381019061013591906108e7565b6102b6565b6040516101479190610af1565b60405180910390f35b61015861035e565b005b610162610372565b60405161016f9190610abb565b60405180910390f35b610180610381565b60405161018d9190610af1565b60405180910390f35b6101b060048036038101906101ab91906108e7565b6103a1565b6040516101bd9190610af1565b60405180910390f35b6101ce6103d6565b6040516101db9190610af1565b60405180910390f35b6101fe60048036038101906101f99190610895565b610413565b005b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60007f32ce7999000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061029b575061029a82610497565b5b9050919050565b60606102ae83836102b6565b905092915050565b6060600060405180602001604052806000815250905060005b848490508110156103535781858583818110610314577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60405160200161032f929190610a66565b6040516020818303038152906040529150808061034b90610d23565b9150506102cf565b819250505092915050565b610366610501565b610370600061057f565b565b600061037c610643565b905090565b6060604051806080016040528060428152602001610f3560429139905090565b60606103af8383905061066c565b6040516020016103bf9190610a8e565b604051602081830303815290604052905092915050565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b61041b610501565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561048b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048290610b13565b60405180910390fd5b6104948161057f565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610509610819565b73ffffffffffffffffffffffffffffffffffffffff16610527610372565b73ffffffffffffffffffffffffffffffffffffffff161461057d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057490610b33565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060008214156106b4576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610814565b600082905060005b600082146106e65780806106cf90610d23565b915050600a826106df9190610beb565b91506106bc565b60008167ffffffffffffffff811115610728577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561075a5781602001600182028036833780820191505090505b5090505b6000851461080d576001826107739190610c1c565b9150600a856107829190610d76565b603061078e9190610b95565b60f81b8183815181106107ca577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856108069190610beb565b945061075e565b8093505050505b919050565b600033905090565b60008135905061083081610f06565b92915050565b60008135905061084581610f1d565b92915050565b60008083601f84011261085d57600080fd5b8235905067ffffffffffffffff81111561087657600080fd5b60208301915083600182028301111561088e57600080fd5b9250929050565b6000602082840312156108a757600080fd5b60006108b584828501610821565b91505092915050565b6000602082840312156108d057600080fd5b60006108de84828501610836565b91505092915050565b600080602083850312156108fa57600080fd5b600083013567ffffffffffffffff81111561091457600080fd5b6109208582860161084b565b92509250509250929050565b61093581610c50565b82525050565b61094481610c62565b82525050565b61095b61095682610c6e565b610d6c565b82525050565b600061096c82610b6e565b6109768185610b79565b9350610986818560208601610cf0565b61098f81610e05565b840191505092915050565b60006109a582610b6e565b6109af8185610b8a565b93506109bf818560208601610cf0565b80840191505092915050565b60006109d8600283610b8a565b91506109e382610e16565b600282019050919050565b60006109fb602683610b79565b9150610a0682610e3f565b604082019050919050565b6000610a1e602083610b79565b9150610a2982610e8e565b602082019050919050565b6000610a41602683610b8a565b9150610a4c82610eb7565b602682019050919050565b610a6081610ce6565b82525050565b6000610a72828561099a565b9150610a7e828461094a565b6001820191508190509392505050565b6000610a9982610a34565b9150610aa5828461099a565b9150610ab0826109cb565b915081905092915050565b6000602082019050610ad0600083018461092c565b92915050565b6000602082019050610aeb600083018461093b565b92915050565b60006020820190508181036000830152610b0b8184610961565b905092915050565b60006020820190508181036000830152610b2c816109ee565b9050919050565b60006020820190508181036000830152610b4c81610a11565b9050919050565b6000602082019050610b686000830184610a57565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000610ba082610ce6565b9150610bab83610ce6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610be057610bdf610da7565b5b828201905092915050565b6000610bf682610ce6565b9150610c0183610ce6565b925082610c1157610c10610dd6565b5b828204905092915050565b6000610c2782610ce6565b9150610c3283610ce6565b925082821015610c4557610c44610da7565b5b828203905092915050565b6000610c5b82610cc6565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610d0e578082015181840152602081019050610cf3565b83811115610d1d576000848401525b50505050565b6000610d2e82610ce6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610d6157610d60610da7565b5b600182019050919050565b6000819050919050565b6000610d8182610ce6565b9150610d8c83610ce6565b925082610d9c57610d9b610dd6565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f7d2c000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f7b2274726169745f74797065223a202244617461204c656e677468222c20227660008201527f616c7565223a0000000000000000000000000000000000000000000000000000602082015250565b610f0f81610c50565b8114610f1a57600080fd5b50565b610f2681610c9a565b8114610f3157600080fd5b5056fe697066733a2f2f6261666b726569687233367178746572727374676c7263666c67323536636764336b6937616b76716e3633336d33746d6f7562677061706a736e75a2646970667358221220a73bbd23dc4a25a3e4098cc1decca0ac4ce511cf76ed0d6c99d2d296b13b5b2964736f6c63430008040033';

type DebugRendererConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DebugRendererConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DebugRenderer__factory extends ContractFactory {
  constructor(...args: DebugRendererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<DebugRenderer> {
    return super.deploy(overrides || {}) as Promise<DebugRenderer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DebugRenderer {
    return super.attach(address) as DebugRenderer;
  }
  override connect(signer: Signer): DebugRenderer__factory {
    return super.connect(signer) as DebugRenderer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DebugRendererInterface {
    return new utils.Interface(_abi) as DebugRendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): DebugRenderer {
    return new Contract(address, _abi, signerOrProvider) as DebugRenderer;
  }
}
