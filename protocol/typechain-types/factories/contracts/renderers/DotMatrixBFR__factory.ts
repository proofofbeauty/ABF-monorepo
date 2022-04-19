/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  DotMatrixBFR,
  DotMatrixBFRInterface,
} from '../../../contracts/renderers/DotMatrixBFR';

const _abi = [
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
        name: 'out',
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
    name: 'name',
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
    name: 'outSize',
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
        name: 'out',
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
    inputs: [
      {
        internalType: 'bytes',
        name: 'out',
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
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50610c7b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde0314610067578063316df61e14610085578063403e4cdb146100b557806343c5820c146100d357806392348b2214610103578063b0a2f64014610121575b600080fd5b61006f610151565b60405161007c9190610827565b60405180910390f35b61009f600480360381019061009a919061064b565b61018e565b6040516100ac9190610827565b60405180910390f35b6100bd6101c9565b6040516100ca9190610849565b60405180910390f35b6100ed60048036038101906100e8919061064b565b6101d3565b6040516100fa9190610827565b60405180910390f35b61010b6101fb565b6040516101189190610827565b60405180910390f35b61013b6004803603810190610136919061064b565b610212565b6040516101489190610827565b60405180910390f35b60606040518060400160405280600a81526020017f444f54204d415452495800000000000000000000000000000000000000000000815250905090565b60606101a261019d84846101d3565b6102ca565b6040516020016101b291906107d8565b604051602081830303815290604052905092915050565b6000610100905090565b60606040516020016101e4906107b8565b604051602081830303815290604052905092915050565b606060405180602001604052806000815250905090565b606060005b600060f81b848483818110610255577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610299578080610291906109dd565b915050610217565b6102a281610454565b6040516020016102b291906107fa565b60405160208183030381529060405291505092915050565b60606000825114156102ed5760405180602001604052806000815250905061044f565b6000604051806060016040528060408152602001610c06604091399050600060036002855161031c919061088b565b61032691906108e1565b60046103329190610912565b67ffffffffffffffff811115610371577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156103a35781602001600182028036833780820191505090505b509050600182016020820185865187015b8082101561040f576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f81168501518453600184019350506103b4565b505060038651066001811461042b576002811461043e57610446565b603d6001830353603d6002830353610446565b603d60018303535b50505080925050505b919050565b6060600082141561049c576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506105fc565b600082905060005b600082146104ce5780806104b7906109dd565b915050600a826104c791906108e1565b91506104a4565b60008167ffffffffffffffff811115610510577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156105425781602001600182028036833780820191505090505b5090505b600085146105f55760018261055b919061096c565b9150600a8561056a9190610a26565b6030610576919061088b565b60f81b8183815181106105b2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856105ee91906108e1565b9450610546565b8093505050505b919050565b60008083601f84011261061357600080fd5b8235905067ffffffffffffffff81111561062c57600080fd5b60208301915083600182028301111561064457600080fd5b9250929050565b6000806020838503121561065e57600080fd5b600083013567ffffffffffffffff81111561067857600080fd5b61068485828601610601565b92509250509250929050565b600061069b82610864565b6106a5818561086f565b93506106b58185602086016109aa565b6106be81610ab5565b840191505092915050565b60006106d482610864565b6106de8185610880565b93506106ee8185602086016109aa565b80840191505092915050565b6000610707600283610880565b915061071282610ac6565b600282019050919050565b600061072a605c83610880565b915061073582610aef565b605c82019050919050565b600061074d601d83610880565b915061075882610b64565b601d82019050919050565b6000610770602683610880565b915061077b82610b8d565b602682019050919050565b6000610793600683610880565b915061079e82610bdc565b600682019050919050565b6107b2816109a0565b82525050565b60006107c38261071d565b91506107ce82610786565b9150819050919050565b60006107e382610740565b91506107ef82846106c9565b915081905092915050565b600061080582610763565b915061081182846106c9565b915061081c826106fa565b915081905092915050565b600060208201905081810360008301526108418184610690565b905092915050565b600060208201905061085e60008301846107a9565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000610896826109a0565b91506108a1836109a0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156108d6576108d5610a57565b5b828201905092915050565b60006108ec826109a0565b91506108f7836109a0565b92508261090757610906610a86565b5b828204905092915050565b600061091d826109a0565b9150610928836109a0565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561096157610960610a57565b5b828202905092915050565b6000610977826109a0565b9150610982836109a0565b92508282101561099557610994610a57565b5b828203905092915050565b6000819050919050565b60005b838110156109c85780820151818401526020810190506109ad565b838111156109d7576000848401525b50505050565b60006109e8826109a0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610a1b57610a1a610a57565b5b600182019050919050565b6000610a31826109a0565b9150610a3c836109a0565b925082610a4c57610a4b610a86565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f7d2c000000000000000000000000000000000000000000000000000000000000600082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d2233303022206865696768743d223330302260208201527f207374796c653d226261636b67726f756e643a23463146314631223e00000000604082015250565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000600082015250565b7f7b2274726169745f74797065223a202244617461204c656e677468222c20227660008201527f616c7565223a0000000000000000000000000000000000000000000000000000602082015250565b7f3c2f7376673e000000000000000000000000000000000000000000000000000060008201525056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220a5ed70feacea96e3d1bd4fc6db3e818fb6be847349b09cf493336983c0da71b164736f6c63430008040033';

type DotMatrixBFRConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DotMatrixBFRConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DotMatrixBFR__factory extends ContractFactory {
  constructor(...args: DotMatrixBFRConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<DotMatrixBFR> {
    return super.deploy(overrides || {}) as Promise<DotMatrixBFR>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DotMatrixBFR {
    return super.attach(address) as DotMatrixBFR;
  }
  override connect(signer: Signer): DotMatrixBFR__factory {
    return super.connect(signer) as DotMatrixBFR__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DotMatrixBFRInterface {
    return new utils.Interface(_abi) as DotMatrixBFRInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): DotMatrixBFR {
    return new Contract(address, _abi, signerOrProvider) as DotMatrixBFR;
  }
}
