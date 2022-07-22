/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PixelGrid8Renderer,
  PixelGrid8RendererInterface,
} from "../../../contracts/renderers/PixelGrid8Renderer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "additionalMetadataURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "props",
        type: "bytes",
      },
    ],
    name: "attributes",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "propsSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "props",
        type: "bytes",
      },
    ],
    name: "render",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renderAttributeKey",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "props",
        type: "bytes",
      },
    ],
    name: "renderRaw",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260405180606001604052806021815260200162002ba460219139600190805190602001906200003592919062001061565b506040518060400160405280600481526020017f22202f3e00000000000000000000000000000000000000000000000000000000815250600290805190602001906200008392919062001061565b506040518061080001604052806040518060400160405280600b81526020017f793d22302220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d223722000000000000000000000000000000000000000000815250815250600390604062000f60929190620010f2565b5034801562000f6e57600080fd5b5062000f8f62000f8362000f9560201b60201c565b62000f9d60201b60201c565b6200123e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200106f90620011d9565b90600052602060002090601f016020900481019282620010935760008555620010df565b82601f10620010ae57805160ff1916838001178555620010df565b82800160010185558215620010df579182015b82811115620010de578251825591602001919060010190620010c1565b5b509050620010ee91906200114c565b5090565b826040810192821562001139579160200282015b82811115620011385782518290805190602001906200112792919062001061565b509160200191906001019062001106565b5b5090506200114891906200116b565b5090565b5b80821115620011675760008160009055506001016200114d565b5090565b5b808211156200118f576000818162001185919062001193565b506001016200116c565b5090565b508054620011a190620011d9565b6000825580601f10620011b55750620011d6565b601f016020900490600052602060002090810190620011d591906200114c565b5b50565b60006002820490506001821680620011f257607f821691505b602082108114156200120957620012086200120f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b611956806200124e6000396000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c8063715018a611610071578063715018a6146101795780638da5cb5b1461018357806392348b22146101a1578063b0a2f640146101bf578063effde6db146101ef578063f2fde38b1461020d576100a8565b8062a85d69146100ad57806301ffc9a7146100cb57806306fdde03146100fb578063316df61e1461011957806343c5820c14610149575b600080fd5b6100b5610229565b6040516100c29190611235565b60405180910390f35b6100e560048036038101906100e09190610d4d565b610232565b6040516100f2919061115f565b60405180910390f35b6101036102ac565b60405161011091906111d3565b60405180910390f35b610133600480360381019061012e9190610d76565b6102e9565b60405161014091906111d3565b60405180910390f35b610163600480360381019061015e9190610d76565b610324565b60405161017091906111b1565b60405180910390f35b610181610578565b005b61018b61058c565b6040516101989190611144565b60405180910390f35b6101a961059b565b6040516101b691906111d3565b60405180910390f35b6101d960048036038101906101d49190610d76565b6105bb565b6040516101e691906111d3565b60405180910390f35b6101f7610673565b60405161020491906111d3565b60405180910390f35b61022760048036038101906102229190610d24565b6106b0565b005b600060c0905090565b60007f3433a79a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806102a557506102a482610734565b5b9050919050565b60606040518060400160405280600c81526020017f506978656c204772696420380000000000000000000000000000000000000000815250905090565b60606102fd6102f88484610324565b61079e565b60405160200161030d9190611122565b604051602081830303815290604052905092915050565b6060600060405180602001604052806000815250905060005b604081101561054e5781600160038360408110610383577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0173__$8d2f2c422d7739f572e222809bbf6b68c3$__635f47386a89896003886103ad9190611385565b8181106103e3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8a8a600160038a6103fe9190611385565b61040891906112fe565b81811061043e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8b8b600260038b6104599190611385565b61046391906112fe565b818110610499577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6040518463ffffffff1660e01b81526004016104c19392919061117a565b60006040518083038186803b1580156104d957600080fd5b505af41580156104ed573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906105169190610dbb565b600260405160200161052c959493929190611072565b60405160208183030381529060405291508061054790611549565b905061033d565b508060405160200161056091906110c8565b60405160208183030381529060405291505092915050565b610580610928565b61058a60006109a6565b565b6000610596610a6a565b905090565b606060405180608001604052806042815260200161189f60429139905090565b606060005b600060f81b8484838181106105fe577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461064257808061063a90611549565b9150506105c0565b61064b81610a93565b60405160200161065b91906110f5565b60405160208183030381529060405291505092915050565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b6106b8610928565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610728576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071f906111f5565b60405180910390fd5b610731816109a6565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60606000825114156107c157604051806020016040528060008152509050610923565b60006040518060600160405280604081526020016118e160409139905060006003600285516107f091906112fe565b6107fa9190611354565b60046108069190611385565b67ffffffffffffffff811115610845577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156108775781602001600182028036833780820191505090505b509050600182016020820185865187015b808210156108e3576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f8116850151845360018401935050610888565b50506003865106600181146108ff57600281146109125761091a565b603d6001830353603d600283035361091a565b603d60018303535b50505080925050505b919050565b610930610c40565b73ffffffffffffffffffffffffffffffffffffffff1661094e61058c565b73ffffffffffffffffffffffffffffffffffffffff16146109a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099b90611215565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606000821415610adb576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610c3b565b600082905060005b60008214610b0d578080610af690611549565b915050600a82610b069190611354565b9150610ae3565b60008167ffffffffffffffff811115610b4f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610b815781602001600182028036833780820191505090505b5090505b60008514610c3457600182610b9a91906113df565b9150600a85610ba99190611592565b6030610bb591906112fe565b60f81b818381518110610bf1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85610c2d9190611354565b9450610b85565b8093505050505b919050565b600033905090565b6000610c5b610c5684611275565b611250565b905082815260208101848484011115610c7357600080fd5b610c7e8482856114b3565b509392505050565b600081359050610c9581611870565b92915050565b600081359050610caa81611887565b92915050565b60008083601f840112610cc257600080fd5b8235905067ffffffffffffffff811115610cdb57600080fd5b602083019150836001820283011115610cf357600080fd5b9250929050565b600082601f830112610d0b57600080fd5b8151610d1b848260208601610c48565b91505092915050565b600060208284031215610d3657600080fd5b6000610d4484828501610c86565b91505092915050565b600060208284031215610d5f57600080fd5b6000610d6d84828501610c9b565b91505092915050565b60008060208385031215610d8957600080fd5b600083013567ffffffffffffffff811115610da357600080fd5b610daf85828601610cb0565b92509250509250929050565b600060208284031215610dcd57600080fd5b600082015167ffffffffffffffff811115610de757600080fd5b610df384828501610cfa565b91505092915050565b610e0581611413565b82525050565b610e1481611425565b82525050565b610e2381611431565b82525050565b6000610e34826112bb565b610e3e81856112d1565b9350610e4e8185602086016114b3565b610e578161167f565b840191505092915050565b6000610e6d826112c6565b610e7781856112e2565b9350610e878185602086016114b3565b610e908161167f565b840191505092915050565b6000610ea6826112c6565b610eb081856112f3565b9350610ec08185602086016114b3565b80840191505092915050565b60008154610ed9816114e6565b610ee381866112f3565b94506001821660008114610efe5760018114610f0f57610f42565b60ff19831686528186019350610f42565b610f18856112a6565b60005b83811015610f3a57815481890152600182019150602081019050610f1b565b838801955050505b50505092915050565b6000610f586026836112e2565b9150610f6382611690565b604082019050919050565b6000610f7b6007836112f3565b9150610f86826116df565b600782019050919050565b6000610f9e6058836112f3565b9150610fa982611708565b605882019050919050565b6000610fc16001836112f3565b9150610fcc8261177d565b600182019050919050565b6000610fe46020836112e2565b9150610fef826117a6565b602082019050919050565b60006110076026836112f3565b9150611012826117cf565b602682019050919050565b600061102a6006836112f3565b91506110358261181e565b600682019050919050565b600061104d601a836112f3565b915061105882611847565b601a82019050919050565b61106c816114a9565b82525050565b600061107e8288610e9b565b915061108a8287610ecc565b91506110968286610ecc565b91506110a182610f6e565b91506110ad8285610e9b565b91506110b98284610ecc565b91508190509695505050505050565b60006110d382610f91565b91506110df8284610e9b565b91506110ea8261101d565b915081905092915050565b600061110082610ffa565b915061110c8284610e9b565b915061111782610fb4565b915081905092915050565b600061112d82611040565b91506111398284610e9b565b915081905092915050565b60006020820190506111596000830184610dfc565b92915050565b60006020820190506111746000830184610e0b565b92915050565b600060608201905061118f6000830186610e1a565b61119c6020830185610e1a565b6111a96040830184610e1a565b949350505050565b600060208201905081810360008301526111cb8184610e29565b905092915050565b600060208201905081810360008301526111ed8184610e62565b905092915050565b6000602082019050818103600083015261120e81610f4b565b9050919050565b6000602082019050818103600083015261122e81610fd7565b9050919050565b600060208201905061124a6000830184611063565b92915050565b600061125a61126b565b90506112668282611518565b919050565b6000604051905090565b600067ffffffffffffffff8211156112905761128f611650565b5b6112998261167f565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611309826114a9565b9150611314836114a9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611349576113486115c3565b5b828201905092915050565b600061135f826114a9565b915061136a836114a9565b92508261137a576113796115f2565b5b828204905092915050565b6000611390826114a9565b915061139b836114a9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156113d4576113d36115c3565b5b828202905092915050565b60006113ea826114a9565b91506113f5836114a9565b925082821015611408576114076115c3565b5b828203905092915050565b600061141e82611489565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156114d15780820151818401526020810190506114b6565b838111156114e0576000848401525b50505050565b600060028204905060018216806114fe57607f821691505b6020821081141561151257611511611621565b5b50919050565b6115218261167f565b810181811067ffffffffffffffff821117156115405761153f611650565b5b80604052505050565b6000611554826114a9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611587576115866115c3565b5b600182019050919050565b600061159d826114a9565b91506115a8836114a9565b9250826115b8576115b76115f2565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f2066696c6c3d2200000000000000000000000000000000000000000000000000600082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d223822206865696768743d2238222073747960208201527f6c653d226261636b67726f756e643a23463146314631223e0000000000000000604082015250565b7f7d00000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f7b2274726169745f74797065223a202244617461204c656e677468222c20227660008201527f616c7565223a0000000000000000000000000000000000000000000000000000602082015250565b7f3c2f7376673e0000000000000000000000000000000000000000000000000000600082015250565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b61187981611413565b811461188457600080fd5b50565b6118908161145d565b811461189b57600080fd5b5056fe697066733a2f2f6261666b72656962696e736768756d6165356d6979653774777a736a7a7835336834366c726967676c75686d64767174767a72356871707a6d6c754142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220d170eb9428267c0c14b3bd1bde5feff0cbc3bb9e3eab3641c962fb9bd8a4047164736f6c634300080400333c726563742077696474683d22312e303522206865696768743d22312e30352220";

type PixelGrid8RendererConstructorParams =
  | [linkLibraryAddresses: PixelGrid8RendererLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PixelGrid8RendererConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class PixelGrid8Renderer__factory extends ContractFactory {
  constructor(...args: PixelGrid8RendererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        PixelGrid8Renderer__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: PixelGrid8RendererLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$8d2f2c422d7739f572e222809bbf6b68c3\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/SvgUtils.sol:SvgUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PixelGrid8Renderer> {
    return super.deploy(overrides || {}) as Promise<PixelGrid8Renderer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PixelGrid8Renderer {
    return super.attach(address) as PixelGrid8Renderer;
  }
  override connect(signer: Signer): PixelGrid8Renderer__factory {
    return super.connect(signer) as PixelGrid8Renderer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PixelGrid8RendererInterface {
    return new utils.Interface(_abi) as PixelGrid8RendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PixelGrid8Renderer {
    return new Contract(address, _abi, signerOrProvider) as PixelGrid8Renderer;
  }
}

export interface PixelGrid8RendererLibraryAddresses {
  ["contracts/libraries/SvgUtils.sol:SvgUtils"]: string;
}
