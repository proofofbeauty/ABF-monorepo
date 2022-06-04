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
  '0x611d3f610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c80631194fb211461005b5780635f6404a01461008b578063b050b190146100a9578063bd5dd9bf146100d9575b600080fd5b61007560048036038101906100709190610d77565b610109565b604051610082919061133c565b60405180910390f35b610093610177565b6040516100a0919061133c565b60405180910390f35b6100c360048036038101906100be9190610e73565b610196565b6040516100d091906113b0565b60405180910390f35b6100f360048036038101906100ee9190610e1f565b61041a565b60405161010091906113b0565b60405180910390f35b60008177ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff60001b8585604051602001610156929190611209565b60405160208183030381529060405280519060200120161790509392505050565b77ffffffffffffffffffffffffffffffffffffffffffffffff60001b81565b60606000866101a48961048b565b6040516020016101b5929190611231565b6040516020818303038152906040529050600073__$2ed50a41fe33e68c713a011c6653b27115$__63f26c4fda866101ee8a8d8b610109565b6040516020016101fe91906111ee565b6040516020818303038152906040526040518363ffffffff1660e01b815260040161022a929190611379565b60006040518083038186803b15801561024257600080fd5b505af4158015610256573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061027f9190610d36565b905060008473ffffffffffffffffffffffffffffffffffffffff1663316df61e836040518263ffffffff1660e01b81526004016102bc9190611357565b60006040518083038186803b1580156102d457600080fd5b505afa1580156102e8573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906103119190610dde565b90506103ec83828773ffffffffffffffffffffffffffffffffffffffff1663b0a2f640866040518263ffffffff1660e01b81526004016103519190611357565b60006040518083038186803b15801561036957600080fd5b505afa15801561037d573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906103a69190610dde565b6103c58973ffffffffffffffffffffffffffffffffffffffff16610638565b6040516020016103d894939291906112a5565b6040516020818303038152906040526106be565b6040516020016103fc919061131a565b60405160208183030381529060405293505050509695505050505050565b60606104648361043f8473ffffffffffffffffffffffffffffffffffffffff16610638565b604051602001610450929190611260565b6040516020818303038152906040526106be565b604051602001610474919061131a565b604051602081830303815290604052905092915050565b606060008214156104d3576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610633565b600082905060005b600082146105055780806104ee9061171f565b915050600a826104fe919061153f565b91506104db565b60008167ffffffffffffffff811115610547577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156105795781602001600182028036833780820191505090505b5090505b6000851461062c5760018261059291906115ca565b9150600a856105a1919061177c565b60306105ad91906114e9565b60f81b8183815181106105e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85610625919061153f565b945061057d565b8093505050505b919050565b60606000821415610680576040518060400160405280600481526020017f307830300000000000000000000000000000000000000000000000000000000081525090506106b9565b600082905060005b600082146106aa57808061069b9061171f565b915050600882901c9150610688565b6106b48482610848565b925050505b919050565b60606000825114156106e157604051806020016040528060008152509050610843565b6000604051806060016040528060408152602001611cca604091399050600060036002855161071091906114e9565b61071a919061153f565b60046107269190611570565b67ffffffffffffffff811115610765577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156107975781602001600182028036833780820191505090505b509050600182016020820185865187015b80821015610803576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f81168501518453600184019350506107a8565b505060038651066001811461081f57600281146108325761083a565b603d6001830353603d600283035361083a565b603d60018303535b50505080925050505b919050565b60606000600283600261085b9190611570565b61086591906114e9565b67ffffffffffffffff8111156108a4577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156108d65781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610934577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106109be577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026109fe9190611570565b610a0891906114e9565b90505b6001811115610af4577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110610a70577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b828281518110610aad577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080610aed906116c4565b9050610a0b565b5060008414610b38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2f906113d2565b60405180910390fd5b8091505092915050565b6000610b55610b5084611417565b6113f2565b905082815260208101848484011115610b6d57600080fd5b610b78848285611682565b509392505050565b6000610b93610b8e84611417565b6113f2565b905082815260208101848484011115610bab57600080fd5b610bb6848285611691565b509392505050565b6000610bd1610bcc84611448565b6113f2565b905082815260208101848484011115610be957600080fd5b610bf4848285611682565b509392505050565b6000610c0f610c0a84611448565b6113f2565b905082815260208101848484011115610c2757600080fd5b610c32848285611691565b509392505050565b600081359050610c4981611c6d565b92915050565b600081359050610c5e81611c84565b92915050565b600082601f830112610c7557600080fd5b8135610c85848260208601610b42565b91505092915050565b600082601f830112610c9f57600080fd5b8151610caf848260208601610b80565b91505092915050565b600081359050610cc781611c9b565b92915050565b600082601f830112610cde57600080fd5b8135610cee848260208601610bbe565b91505092915050565b600082601f830112610d0857600080fd5b8151610d18848260208601610bfc565b91505092915050565b600081359050610d3081611cb2565b92915050565b600060208284031215610d4857600080fd5b600082015167ffffffffffffffff811115610d6257600080fd5b610d6e84828501610c8e565b91505092915050565b600080600060608486031215610d8c57600080fd5b600084013567ffffffffffffffff811115610da657600080fd5b610db286828701610c64565b9350506020610dc386828701610d21565b9250506040610dd486828701610c4f565b9150509250925092565b600060208284031215610df057600080fd5b600082015167ffffffffffffffff811115610e0a57600080fd5b610e1684828501610cf7565b91505092915050565b60008060408385031215610e3257600080fd5b600083013567ffffffffffffffff811115610e4c57600080fd5b610e5885828601610ccd565b9250506020610e6985828601610c3a565b9150509250929050565b60008060008060008060c08789031215610e8c57600080fd5b6000610e9a89828a01610d21565b965050602087013567ffffffffffffffff811115610eb757600080fd5b610ec389828a01610ccd565b955050604087013567ffffffffffffffff811115610ee057600080fd5b610eec89828a01610c64565b9450506060610efd89828a01610c4f565b935050608087013567ffffffffffffffff811115610f1a57600080fd5b610f2689828a01610c64565b92505060a0610f3789828a01610cb8565b9150509295509295509295565b610f4d81611610565b82525050565b610f64610f5f82611610565b611768565b82525050565b6000610f7582611479565b610f7f818561148f565b9350610f8f818560208601611691565b610f988161183a565b840191505092915050565b6000610fae82611479565b610fb881856114a0565b9350610fc8818560208601611691565b610fd18161183a565b840191505092915050565b6000610fe782611479565b610ff181856114b1565b9350611001818560208601611691565b80840191505092915050565b600061101882611484565b61102281856114cd565b9350611032818560208601611691565b61103b8161183a565b840191505092915050565b600061105182611484565b61105b81856114de565b935061106b818560208601611691565b80840191505092915050565b60006110846020836114bc565b915061108f8261184b565b602082019050919050565b60006110a76009836114de565b91506110b282611874565b600982019050919050565b60006110ca6002836114de565b91506110d58261189d565b600282019050919050565b60006110ed6024836114de565b91506110f8826118c6565b602482019050919050565b6000611110608f836114de565b915061111b82611915565b608f82019050919050565b600061113461013e836114de565b915061113f826119d6565b61013e82019050919050565b60006111586043836114de565b915061116382611b57565b604382019050919050565b600061117b601d836114de565b915061118682611bcc565b601d82019050919050565b600061119e6022836114de565b91506111a982611bf5565b602282019050919050565b60006111c16004836114de565b91506111cc82611c44565b600482019050919050565b6111e86111e382611678565b611772565b82525050565b60006111fa8284610f53565b60208201915081905092915050565b60006112158285610fdc565b915061122182846111d7565b6020820191508190509392505050565b600061123d8285611046565b9150611248826110bd565b91506112548284611046565b91508190509392505050565b600061126b8261109a565b91506112778285611046565b915061128282611103565b915061128e8284611046565b915061129982611126565b91508190509392505050565b60006112b08261109a565b91506112bc8287611046565b91506112c78261114b565b91506112d38286611046565b91506112de826110e0565b91506112ea8285611046565b91506112f582611191565b91506113018284611046565b915061130c826111b4565b915081905095945050505050565b60006113258261116e565b91506113318284611046565b915081905092915050565b60006020820190506113516000830184610f44565b92915050565b600060208201905081810360008301526113718184610f6a565b905092915050565b600060408201905081810360008301526113938185610fa3565b905081810360208301526113a78184610fa3565b90509392505050565b600060208201905081810360008301526113ca818461100d565b905092915050565b600060208201905081810360008301526113eb81611077565b9050919050565b60006113fc61140d565b905061140882826116ee565b919050565b6000604051905090565b600067ffffffffffffffff8211156114325761143161180b565b5b61143b8261183a565b9050602081019050919050565b600067ffffffffffffffff8211156114635761146261180b565b5b61146c8261183a565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006114f482611678565b91506114ff83611678565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611534576115336117ad565b5b828201905092915050565b600061154a82611678565b915061155583611678565b925082611565576115646117dc565b5b828204905092915050565b600061157b82611678565b915061158683611678565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156115bf576115be6117ad565b5b828202905092915050565b60006115d582611678565b91506115e083611678565b9250828210156115f3576115f26117ad565b5b828203905092915050565b600061160982611658565b9050919050565b6000819050919050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b6000611651826115fe565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156116af578082015181840152602081019050611694565b838111156116be576000848401525b50505050565b60006116cf82611678565b915060008214156116e3576116e26117ad565b5b600182039050919050565b6116f78261183a565b810181811067ffffffffffffffff821117156117165761171561180b565b5b80604052505050565b600061172a82611678565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561175d5761175c6117ad565b5b600182019050919050565b6000819050919050565b6000819050919050565b600061178782611678565b915061179283611678565b9250826117a2576117a16117dc565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f7b226e616d65223a220000000000000000000000000000000000000000000000600082015250565b7f2023000000000000000000000000000000000000000000000000000000000000600082015250565b7f222c20226173706563745f726174696f223a312c20226174747269627574657360008201527f223a205b00000000000000000000000000000000000000000000000000000000602082015250565b7f222c20226465736372697074696f6e223a20224f6e2d636861696e2067656e6560008201527f72617469766520617274207772697474656e20696e207468652065736f74657260208201527f69632070726f6772616d6d696e67206c616e677561676520427261696e46756360408201527f6b2e222c202265787465726e616c5f6c696e6b223a202268747470733a2f2f6160608201527f62662e6465762f70726f6a6563742f0000000000000000000000000000000000608082015250565b7f222c2022696d616765223a2022646174613a696d6167652f7376672b786d6c3b60008201527f6261736536342c50484e325a79423361575230614430694d6a55324969426f5a60208201527f576c6e61485139496a49314e694967646d6c6c64304a76654430694d4341774960408201527f4449314e6941794e54596949475a7062477739496d3576626d5569494868746260608201527f47357a50534a6f644852774f693876643364334c6e637a4c6d39795a7938794d60808201527f4441774c334e325a79492b436a78795a574e30494864705a48526f505349794e60a08201527f5459694947686c6157646f644430694d6a55324969426d6157787350534a336160c08201527f476c305a53497650676f3859326c795932786c49474e34505349784d6a67754e60e08201527f53496759336b39496a45794f43343149694279505349794d4334314969426d616101008201527f57787350534a696247466a6179497650676f384c334e325a7a344b22207d000061012082015250565b7f222c226465736372697074696f6e223a202247656e657261746976652061727460008201527f207772697474656e20696e20427261696e4675636b2e222c2022696d6167652260208201527f3a20220000000000000000000000000000000000000000000000000000000000604082015250565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000600082015250565b7f7b2274726169745f74797065223a2252656e6465726572222c2276616c75652260008201527f3a22000000000000000000000000000000000000000000000000000000000000602082015250565b7f227d5d7d00000000000000000000000000000000000000000000000000000000600082015250565b611c76816115fe565b8114611c8157600080fd5b50565b611c8d8161161a565b8114611c9857600080fd5b50565b611ca481611646565b8114611caf57600080fd5b50565b611cbb81611678565b8114611cc657600080fd5b5056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220f34218d6ade2165b4836759db9b5900ee3f1f483d3f66669d8a4f5fdd7ed833d64736f6c63430008040033';

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
