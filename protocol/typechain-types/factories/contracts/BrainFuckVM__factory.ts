/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  BrainFuckVM,
  BrainFuckVMInterface,
} from '../../contracts/BrainFuckVM';

const _abi = [
  {
    inputs: [],
    name: 'LOOPING_STACK_SIZE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TAPE_SIZE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'code',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'input',
        type: 'bytes',
      },
    ],
    name: 'runBrainFuckCode',
    outputs: [
      {
        internalType: 'bytes',
        name: 'out',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];

const _bytecode =
  '0x610cf0610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c8063e0006a6114610050578063f26c4fda1461006e578063ffec62f91461009e575b600080fd5b6100586100bc565b6040516100659190610aa6565b60405180910390f35b61008860048036038101906100839190610957565b6100c2565b6040516100959190610a84565b60405180910390f35b6100a6610907565b6040516100b39190610aa6565b60405180910390f35b61080881565b6060604051806020016040528060008152509050600061010067ffffffffffffffff81111561011a577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561014c5781602001600182028036833780820191505090505b509050600080600080600061080867ffffffffffffffff811115610199577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156101c75781602001602082028036833780820191505090505b5090506000805b8c8c90508110156108f75760008d8d83818110610214577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b905085156102b857605b60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561026357848061025f90610c27565b9550505b605d60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156102b35760008514156102a357600095506102b2565b84806102ae90610bfd565b9550505b5b6108e5565b602b60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156103a5576001898881518110610321577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c6103399190610ae8565b60f81b898881518110610375577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b602d60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561049257600189888151811061040e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c6104269190610b53565b60f81b898881518110610462577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b602c60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561058f578b8b905088106104d457600060f81b610518565b8b8b8981811061050d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b5b898881518110610551577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350878061058b90610c27565b9850505b602e60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561062557898988815181106105f7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b604051602001610613929190610a5c565b60405160208183030381529060405299505b603e60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561066257868061065e90610c27565b9750505b603c60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561069f57868061069b90610bfd565b9750505b605b60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561079d57600060f81b89888151811061070b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610747576001955061079c565b81848481518110610781577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050828061079890610c27565b9350505b5b605d60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156108e457600060f81b898881518110610809577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461088f57836001846108499190610b1f565b81518110610880577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015191506108e3565b600084848061089d90610bfd565b9550815181106108d6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250505b5b5b50806108f090610c27565b90506101ce565b5050505050505050949350505050565b61010081565b60008083601f84011261091f57600080fd5b8235905067ffffffffffffffff81111561093857600080fd5b60208301915083600182028301111561095057600080fd5b9250929050565b6000806000806040858703121561096d57600080fd5b600085013567ffffffffffffffff81111561098757600080fd5b6109938782880161090d565b9450945050602085013567ffffffffffffffff8111156109b257600080fd5b6109be8782880161090d565b925092505092959194509250565b6109dd6109d882610b87565b610c70565b82525050565b60006109ee82610ac1565b6109f88185610acc565b9350610a08818560208601610bca565b610a1181610ca9565b840191505092915050565b6000610a2782610ac1565b610a318185610add565b9350610a41818560208601610bca565b80840191505092915050565b610a5681610bb3565b82525050565b6000610a688285610a1c565b9150610a7482846109cc565b6001820191508190509392505050565b60006020820190508181036000830152610a9e81846109e3565b905092915050565b6000602082019050610abb6000830184610a4d565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000610af382610bbd565b9150610afe83610bbd565b92508260ff03821115610b1457610b13610c7a565b5b828201905092915050565b6000610b2a82610bb3565b9150610b3583610bb3565b925082821015610b4857610b47610c7a565b5b828203905092915050565b6000610b5e82610bbd565b9150610b6983610bbd565b925082821015610b7c57610b7b610c7a565b5b828203905092915050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015610be8578082015181840152602081019050610bcd565b83811115610bf7576000848401525b50505050565b6000610c0882610bb3565b91506000821415610c1c57610c1b610c7a565b5b600182039050919050565b6000610c3282610bb3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c6557610c64610c7a565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f830116905091905056fea2646970667358221220eb2d01542ef3cbd4ae4da14b363bb01d1d692d7765024cc93b66ec3f67b6d82864736f6c63430008040033';

type BrainFuckVMConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BrainFuckVMConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BrainFuckVM__factory extends ContractFactory {
  constructor(...args: BrainFuckVMConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<BrainFuckVM> {
    return super.deploy(overrides || {}) as Promise<BrainFuckVM>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BrainFuckVM {
    return super.attach(address) as BrainFuckVM;
  }
  override connect(signer: Signer): BrainFuckVM__factory {
    return super.connect(signer) as BrainFuckVM__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BrainFuckVMInterface {
    return new utils.Interface(_abi) as BrainFuckVMInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): BrainFuckVM {
    return new Contract(address, _abi, signerOrProvider) as BrainFuckVM;
  }
}
