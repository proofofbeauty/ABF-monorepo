/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type {
  BrainFuckURIConstructor,
  BrainFuckURIConstructorInterface,
} from '../../contracts/BrainFuckURIConstructor';

const _abi = [
  {
    inputs: [],
    name: 'SEED_CONSTANTS_TYPE_MASK',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'nft',
        type: 'address',
      },
    ],
    name: 'contractURI',
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
        name: 'seed',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes8',
        name: 'constants',
        type: 'bytes8',
      },
    ],
    name: 'tokenSeed',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'seed',
        type: 'bytes',
      },
      {
        internalType: 'bytes8',
        name: 'constants',
        type: 'bytes8',
      },
      {
        internalType: 'bytes',
        name: 'code',
        type: 'bytes',
      },
      {
        internalType: 'contract IRenderer',
        name: 'renderer',
        type: 'IRenderer',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x611e01610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c80631194fb211461005b5780635f6404a01461008b578063b050b190146100a9578063bd5dd9bf146100d9575b600080fd5b61007560048036038101906100709190610dfb565b610109565b60405161008291906113fb565b60405180910390f35b610093610177565b6040516100a091906113fb565b60405180910390f35b6100c360048036038101906100be9190610ef7565b610196565b6040516100d0919061146f565b60405180910390f35b6100f360048036038101906100ee9190610ea3565b61049e565b604051610100919061146f565b60405180910390f35b60008177ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff60001b85856040516020016101569291906112b0565b60405160208183030381529060405280519060200120161790509392505050565b77ffffffffffffffffffffffffffffffffffffffffffffffff60001b81565b60606000866101a48961050f565b6040516020016101b59291906112d8565b6040516020818303038152906040529050600073__$2ed50a41fe33e68c713a011c6653b27115$__63f26c4fda866101ee8a8d8b610109565b6040516020016101fe9190611295565b6040516020818303038152906040526040518363ffffffff1660e01b815260040161022a929190611438565b60006040518083038186803b15801561024257600080fd5b505af4158015610256573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061027f9190610dba565b905060008473ffffffffffffffffffffffffffffffffffffffff1663316df61e836040518263ffffffff1660e01b81526004016102bc9190611416565b60006040518083038186803b1580156102d457600080fd5b505afa1580156102e8573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906103119190610e62565b9050610470838673ffffffffffffffffffffffffffffffffffffffff1663effde6db6040518163ffffffff1660e01b815260040160006040518083038186803b15801561035d57600080fd5b505afa158015610371573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061039a9190610e62565b838873ffffffffffffffffffffffffffffffffffffffff1663b0a2f640876040518263ffffffff1660e01b81526004016103d49190611416565b60006040518083038186803b1580156103ec57600080fd5b505afa158015610400573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906104299190610e62565b6104488a73ffffffffffffffffffffffffffffffffffffffff166106bc565b60405160200161045c95949392919061134c565b604051602081830303815290604052610742565b60405160200161048091906113d9565b60405160208183030381529060405293505050509695505050505050565b60606104e8836104c38473ffffffffffffffffffffffffffffffffffffffff166106bc565b6040516020016104d4929190611307565b604051602081830303815290604052610742565b6040516020016104f891906113d9565b604051602081830303815290604052905092915050565b60606000821415610557576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506106b7565b600082905060005b60008214610589578080610572906117de565b915050600a8261058291906115fe565b915061055f565b60008167ffffffffffffffff8111156105cb577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156105fd5781602001600182028036833780820191505090505b5090505b600085146106b0576001826106169190611689565b9150600a85610625919061183b565b603061063191906115a8565b60f81b81838151811061066d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856106a991906115fe565b9450610601565b8093505050505b919050565b60606000821415610704576040518060400160405280600481526020017f3078303000000000000000000000000000000000000000000000000000000000815250905061073d565b600082905060005b6000821461072e57808061071f906117de565b915050600882901c915061070c565b61073884826108cc565b925050505b919050565b6060600082511415610765576040518060200160405280600081525090506108c7565b6000604051806060016040528060408152602001611d8c604091399050600060036002855161079491906115a8565b61079e91906115fe565b60046107aa919061162f565b67ffffffffffffffff8111156107e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561081b5781602001600182028036833780820191505090505b509050600182016020820185865187015b80821015610887576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f811685015184536001840193505061082c565b50506003865106600181146108a357600281146108b6576108be565b603d6001830353603d60028303536108be565b603d60018303535b50505080925050505b919050565b6060600060028360026108df919061162f565b6108e991906115a8565b67ffffffffffffffff811115610928577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561095a5781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106109b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610a42577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002610a82919061162f565b610a8c91906115a8565b90505b6001811115610b78577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110610af4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b828281518110610b31577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080610b7190611783565b9050610a8f565b5060008414610bbc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb390611491565b60405180910390fd5b8091505092915050565b6000610bd9610bd4846114d6565b6114b1565b905082815260208101848484011115610bf157600080fd5b610bfc848285611741565b509392505050565b6000610c17610c12846114d6565b6114b1565b905082815260208101848484011115610c2f57600080fd5b610c3a848285611750565b509392505050565b6000610c55610c5084611507565b6114b1565b905082815260208101848484011115610c6d57600080fd5b610c78848285611741565b509392505050565b6000610c93610c8e84611507565b6114b1565b905082815260208101848484011115610cab57600080fd5b610cb6848285611750565b509392505050565b600081359050610ccd81611d2f565b92915050565b600081359050610ce281611d46565b92915050565b600082601f830112610cf957600080fd5b8135610d09848260208601610bc6565b91505092915050565b600082601f830112610d2357600080fd5b8151610d33848260208601610c04565b91505092915050565b600081359050610d4b81611d5d565b92915050565b600082601f830112610d6257600080fd5b8135610d72848260208601610c42565b91505092915050565b600082601f830112610d8c57600080fd5b8151610d9c848260208601610c80565b91505092915050565b600081359050610db481611d74565b92915050565b600060208284031215610dcc57600080fd5b600082015167ffffffffffffffff811115610de657600080fd5b610df284828501610d12565b91505092915050565b600080600060608486031215610e1057600080fd5b600084013567ffffffffffffffff811115610e2a57600080fd5b610e3686828701610ce8565b9350506020610e4786828701610da5565b9250506040610e5886828701610cd3565b9150509250925092565b600060208284031215610e7457600080fd5b600082015167ffffffffffffffff811115610e8e57600080fd5b610e9a84828501610d7b565b91505092915050565b60008060408385031215610eb657600080fd5b600083013567ffffffffffffffff811115610ed057600080fd5b610edc85828601610d51565b9250506020610eed85828601610cbe565b9150509250929050565b60008060008060008060c08789031215610f1057600080fd5b6000610f1e89828a01610da5565b965050602087013567ffffffffffffffff811115610f3b57600080fd5b610f4789828a01610d51565b955050604087013567ffffffffffffffff811115610f6457600080fd5b610f7089828a01610ce8565b9450506060610f8189828a01610cd3565b935050608087013567ffffffffffffffff811115610f9e57600080fd5b610faa89828a01610ce8565b92505060a0610fbb89828a01610d3c565b9150509295509295509295565b610fd1816116cf565b82525050565b610fe8610fe3826116cf565b611827565b82525050565b6000610ff982611538565b611003818561154e565b9350611013818560208601611750565b61101c816118f9565b840191505092915050565b600061103282611538565b61103c818561155f565b935061104c818560208601611750565b611055816118f9565b840191505092915050565b600061106b82611538565b6110758185611570565b9350611085818560208601611750565b80840191505092915050565b600061109c82611543565b6110a6818561158c565b93506110b6818560208601611750565b6110bf816118f9565b840191505092915050565b60006110d582611543565b6110df818561159d565b93506110ef818560208601611750565b80840191505092915050565b600061110860208361157b565b91506111138261190a565b602082019050919050565b600061112b60098361159d565b915061113682611933565b600982019050919050565b600061114e60028361159d565b91506111598261195c565b600282019050919050565b600061117160248361159d565b915061117c82611985565b602482019050919050565b600061119460048361159d565b915061119f826119d4565b600482019050919050565b60006111b7608f8361159d565b91506111c2826119fd565b608f82019050919050565b60006111db61013e8361159d565b91506111e682611abe565b61013e82019050919050565b60006111ff603a8361159d565b915061120a82611c3f565b603a82019050919050565b6000611222601d8361159d565b915061122d82611c8e565b601d82019050919050565b600061124560228361159d565b915061125082611cb7565b602282019050919050565b600061126860048361159d565b915061127382611d06565b600482019050919050565b61128f61128a82611737565b611831565b82525050565b60006112a18284610fd7565b60208201915081905092915050565b60006112bc8285611060565b91506112c8828461127e565b6020820191508190509392505050565b60006112e482856110ca565b91506112ef82611141565b91506112fb82846110ca565b91508190509392505050565b60006113128261111e565b915061131e82856110ca565b9150611329826111aa565b915061133582846110ca565b9150611340826111cd565b91508190509392505050565b60006113578261111e565b915061136382886110ca565b915061136e826111f2565b915061137a82876110ca565b915061138582611187565b915061139182866110ca565b915061139c82611164565b91506113a882856110ca565b91506113b382611238565b91506113bf82846110ca565b91506113ca8261125b565b91508190509695505050505050565b60006113e482611215565b91506113f082846110ca565b915081905092915050565b60006020820190506114106000830184610fc8565b92915050565b600060208201905081810360008301526114308184610fee565b905092915050565b600060408201905081810360008301526114528185611027565b905081810360208301526114668184611027565b90509392505050565b600060208201905081810360008301526114898184611091565b905092915050565b600060208201905081810360008301526114aa816110fb565b9050919050565b60006114bb6114cc565b90506114c782826117ad565b919050565b6000604051905090565b600067ffffffffffffffff8211156114f1576114f06118ca565b5b6114fa826118f9565b9050602081019050919050565b600067ffffffffffffffff821115611522576115216118ca565b5b61152b826118f9565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006115b382611737565b91506115be83611737565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156115f3576115f261186c565b5b828201905092915050565b600061160982611737565b915061161483611737565b9250826116245761162361189b565b5b828204905092915050565b600061163a82611737565b915061164583611737565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561167e5761167d61186c565b5b828202905092915050565b600061169482611737565b915061169f83611737565b9250828210156116b2576116b161186c565b5b828203905092915050565b60006116c882611717565b9050919050565b6000819050919050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b6000611710826116bd565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561176e578082015181840152602081019050611753565b8381111561177d576000848401525b50505050565b600061178e82611737565b915060008214156117a2576117a161186c565b5b600182039050919050565b6117b6826118f9565b810181811067ffffffffffffffff821117156117d5576117d46118ca565b5b80604052505050565b60006117e982611737565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561181c5761181b61186c565b5b600182019050919050565b6000819050919050565b6000819050919050565b600061184682611737565b915061185183611737565b9250826118615761186061189b565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f7b226e616d65223a220000000000000000000000000000000000000000000000600082015250565b7f2023000000000000000000000000000000000000000000000000000000000000600082015250565b7f222c20226173706563745f726174696f223a312c20226174747269627574657360008201527f223a205b00000000000000000000000000000000000000000000000000000000602082015250565b7f223a202200000000000000000000000000000000000000000000000000000000600082015250565b7f222c20226465736372697074696f6e223a20224f6e2d636861696e2067656e6560008201527f72617469766520617274207772697474656e20696e207468652065736f74657260208201527f69632070726f6772616d6d696e67206c616e677561676520427261696e46756360408201527f6b2e222c202265787465726e616c5f6c696e6b223a202268747470733a2f2f6160608201527f62662e6465762f70726f6a6563742f0000000000000000000000000000000000608082015250565b7f222c2022696d616765223a2022646174613a696d6167652f7376672b786d6c3b60008201527f6261736536342c50484e325a79423361575230614430694d6a55324969426f5a60208201527f576c6e61485139496a49314e694967646d6c6c64304a76654430694d4341774960408201527f4449314e6941794e54596949475a7062477739496d3576626d5569494868746260608201527f47357a50534a6f644852774f693876643364334c6e637a4c6d39795a7938794d60808201527f4441774c334e325a79492b436a78795a574e30494864705a48526f505349794e60a08201527f5459694947686c6157646f644430694d6a55324969426d6157787350534a336160c08201527f476c305a53497650676f3859326c795932786c49474e34505349784d6a67754e60e08201527f53496759336b39496a45794f43343149694279505349794d4334314969426d616101008201527f57787350534a696247466a6179497650676f384c334e325a7a344b22207d000061012082015250565b7f222c226465736372697074696f6e223a202247656e657261746976652061727460008201527f207772697474656e20696e20427261696e4675636b2e222c2022000000000000602082015250565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000600082015250565b7f7b2274726169745f74797065223a2252656e6465726572222c2276616c75652260008201527f3a22000000000000000000000000000000000000000000000000000000000000602082015250565b7f227d5d7d00000000000000000000000000000000000000000000000000000000600082015250565b611d38816116bd565b8114611d4357600080fd5b50565b611d4f816116d9565b8114611d5a57600080fd5b50565b611d6681611705565b8114611d7157600080fd5b50565b611d7d81611737565b8114611d8857600080fd5b5056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220ed742c17dc9e45df98c6e031ee2d515deb264e775a51461056c6a5cc848821d164736f6c63430008040033';

type BrainFuckURIConstructorConstructorParams =
  | [
      linkLibraryAddresses: BrainFuckURIConstructorLibraryAddresses,
      signer?: Signer,
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BrainFuckURIConstructorConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === 'string' ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    '_isInterface' in xs[0]
  );
};

export class BrainFuckURIConstructor__factory extends ContractFactory {
  constructor(...args: BrainFuckURIConstructorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        BrainFuckURIConstructor__factory.linkBytecode(linkLibraryAddresses),
        signer,
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: BrainFuckURIConstructorLibraryAddresses,
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$2ed50a41fe33e68c713a011c6653b27115\\$__', 'g'),
      linkLibraryAddresses['contracts/BrainFuckVM.sol:BrainFuckVM']
        .replace(/^0x/, '')
        .toLowerCase(),
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<BrainFuckURIConstructor> {
    return super.deploy(overrides || {}) as Promise<BrainFuckURIConstructor>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BrainFuckURIConstructor {
    return super.attach(address) as BrainFuckURIConstructor;
  }
  override connect(signer: Signer): BrainFuckURIConstructor__factory {
    return super.connect(signer) as BrainFuckURIConstructor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BrainFuckURIConstructorInterface {
    return new utils.Interface(_abi) as BrainFuckURIConstructorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): BrainFuckURIConstructor {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as BrainFuckURIConstructor;
  }
}

export interface BrainFuckURIConstructorLibraryAddresses {
  ['contracts/BrainFuckVM.sol:BrainFuckVM']: string;
}
