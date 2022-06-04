/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type {
  ERC721,
  ERC721Interface,
} from '../../../../../@openzeppelin/contracts/token/ERC721/ERC721';

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
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
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
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
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
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
    inputs: [],
    name: 'name',
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
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
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
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
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
    inputs: [],
    name: 'symbol',
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
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
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
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b506040516200274d3803806200274d833981810160405281019062000037919062000193565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b50505062000376565b8280546200007f906200029b565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b60006200013862000132846200022f565b62000206565b9050828152602081018484840111156200015157600080fd5b6200015e84828562000265565b509392505050565b600082601f8301126200017857600080fd5b81516200018a84826020860162000121565b91505092915050565b60008060408385031215620001a757600080fd5b600083015167ffffffffffffffff811115620001c257600080fd5b620001d08582860162000166565b925050602083015167ffffffffffffffff811115620001ee57600080fd5b620001fc8582860162000166565b9150509250929050565b60006200021262000225565b9050620002208282620002d1565b919050565b6000604051905090565b600067ffffffffffffffff8211156200024d576200024c62000336565b5b620002588262000365565b9050602081019050919050565b60005b838110156200028557808201518184015260208101905062000268565b8381111562000295576000848401525b50505050565b60006002820490506001821680620002b457607f821691505b60208210811415620002cb57620002ca62000307565b5b50919050565b620002dc8262000365565b810181811067ffffffffffffffff82111715620002fe57620002fd62000336565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6123c780620003866000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e991906116a1565b6102bc565b6040516100fb9190611a1b565b60405180910390f35b61010c61039e565b6040516101199190611a36565b60405180910390f35b61013c600480360381019061013791906116f3565b610430565b60405161014991906119b4565b60405180910390f35b61016c60048036038101906101679190611665565b6104b5565b005b6101886004803603810190610183919061155f565b6105cd565b005b6101a4600480360381019061019f919061155f565b61062d565b005b6101c060048036038101906101bb91906116f3565b61064d565b6040516101cd91906119b4565b60405180910390f35b6101f060048036038101906101eb91906114fa565b6106ff565b6040516101fd9190611bd8565b60405180910390f35b61020e6107b7565b60405161021b9190611a36565b60405180910390f35b61023e60048036038101906102399190611629565b610849565b005b61025a600480360381019061025591906115ae565b61085f565b005b610276600480360381019061027191906116f3565b6108c1565b6040516102839190611a36565b60405180910390f35b6102a660048036038101906102a19190611523565b610968565b6040516102b39190611a1b565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103975750610396826109fc565b5b9050919050565b6060600080546103ad90611dfd565b80601f01602080910402602001604051908101604052809291908181526020018280546103d990611dfd565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b82610a66565b61047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190611b58565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104c08261064d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890611b98565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610550610ad2565b73ffffffffffffffffffffffffffffffffffffffff16148061057f575061057e81610579610ad2565b610968565b5b6105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b590611af8565b60405180910390fd5b6105c88383610ada565b505050565b6105de6105d8610ad2565b82610b93565b61061d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061490611bb8565b60405180910390fd5b610628838383610c71565b505050565b6106488383836040518060200160405280600081525061085f565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed90611b38565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610770576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076790611b18565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107c690611dfd565b80601f01602080910402602001604051908101604052809291908181526020018280546107f290611dfd565b801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b5050505050905090565b61085b610854610ad2565b8383610ed8565b5050565b61087061086a610ad2565b83610b93565b6108af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a690611bb8565b60405180910390fd5b6108bb84848484611045565b50505050565b60606108cc82610a66565b61090b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090290611b78565b60405180910390fd5b60006109156110a1565b905060008151116109355760405180602001604052806000815250610960565b8061093f846110b8565b604051602001610950929190611990565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610b4d8361064d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610b9e82610a66565b610bdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd490611ad8565b60405180910390fd5b6000610be88361064d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c5757508373ffffffffffffffffffffffffffffffffffffffff16610c3f84610430565b73ffffffffffffffffffffffffffffffffffffffff16145b80610c685750610c678185610968565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610c918261064d565b73ffffffffffffffffffffffffffffffffffffffff1614610ce7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cde90611a78565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4e90611a98565b60405180910390fd5b610d62838383611265565b610d6d600082610ada565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dbd9190611d13565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e149190611c8c565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610ed383838361126a565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3e90611ab8565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110389190611a1b565b60405180910390a3505050565b611050848484610c71565b61105c8484848461126f565b61109b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109290611a58565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611100576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611260565b600082905060005b6000821461113257808061111b90611e60565b915050600a8261112b9190611ce2565b9150611108565b60008167ffffffffffffffff811115611174577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156111a65781602001600182028036833780820191505090505b5090505b60008514611259576001826111bf9190611d13565b9150600a856111ce9190611ea9565b60306111da9190611c8c565b60f81b818381518110611216577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856112529190611ce2565b94506111aa565b8093505050505b919050565b505050565b505050565b60006112908473ffffffffffffffffffffffffffffffffffffffff16611406565b156113f9578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026112b9610ad2565b8786866040518563ffffffff1660e01b81526004016112db94939291906119cf565b602060405180830381600087803b1580156112f557600080fd5b505af192505050801561132657506040513d601f19601f8201168201806040525081019061132391906116ca565b60015b6113a9573d8060008114611356576040519150601f19603f3d011682016040523d82523d6000602084013e61135b565b606091505b506000815114156113a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139890611a58565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506113fe565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600061143c61143784611c18565b611bf3565b90508281526020810184848401111561145457600080fd5b61145f848285611dbb565b509392505050565b60008135905061147681612335565b92915050565b60008135905061148b8161234c565b92915050565b6000813590506114a081612363565b92915050565b6000815190506114b581612363565b92915050565b600082601f8301126114cc57600080fd5b81356114dc848260208601611429565b91505092915050565b6000813590506114f48161237a565b92915050565b60006020828403121561150c57600080fd5b600061151a84828501611467565b91505092915050565b6000806040838503121561153657600080fd5b600061154485828601611467565b925050602061155585828601611467565b9150509250929050565b60008060006060848603121561157457600080fd5b600061158286828701611467565b935050602061159386828701611467565b92505060406115a4868287016114e5565b9150509250925092565b600080600080608085870312156115c457600080fd5b60006115d287828801611467565b94505060206115e387828801611467565b93505060406115f4878288016114e5565b925050606085013567ffffffffffffffff81111561161157600080fd5b61161d878288016114bb565b91505092959194509250565b6000806040838503121561163c57600080fd5b600061164a85828601611467565b925050602061165b8582860161147c565b9150509250929050565b6000806040838503121561167857600080fd5b600061168685828601611467565b9250506020611697858286016114e5565b9150509250929050565b6000602082840312156116b357600080fd5b60006116c184828501611491565b91505092915050565b6000602082840312156116dc57600080fd5b60006116ea848285016114a6565b91505092915050565b60006020828403121561170557600080fd5b6000611713848285016114e5565b91505092915050565b61172581611d47565b82525050565b61173481611d59565b82525050565b600061174582611c49565b61174f8185611c5f565b935061175f818560208601611dca565b61176881611f96565b840191505092915050565b600061177e82611c54565b6117888185611c70565b9350611798818560208601611dca565b6117a181611f96565b840191505092915050565b60006117b782611c54565b6117c18185611c81565b93506117d1818560208601611dca565b80840191505092915050565b60006117ea603283611c70565b91506117f582611fa7565b604082019050919050565b600061180d602583611c70565b915061181882611ff6565b604082019050919050565b6000611830602483611c70565b915061183b82612045565b604082019050919050565b6000611853601983611c70565b915061185e82612094565b602082019050919050565b6000611876602c83611c70565b9150611881826120bd565b604082019050919050565b6000611899603883611c70565b91506118a48261210c565b604082019050919050565b60006118bc602a83611c70565b91506118c78261215b565b604082019050919050565b60006118df602983611c70565b91506118ea826121aa565b604082019050919050565b6000611902602c83611c70565b915061190d826121f9565b604082019050919050565b6000611925602f83611c70565b915061193082612248565b604082019050919050565b6000611948602183611c70565b915061195382612297565b604082019050919050565b600061196b603183611c70565b9150611976826122e6565b604082019050919050565b61198a81611db1565b82525050565b600061199c82856117ac565b91506119a882846117ac565b91508190509392505050565b60006020820190506119c9600083018461171c565b92915050565b60006080820190506119e4600083018761171c565b6119f1602083018661171c565b6119fe6040830185611981565b8181036060830152611a10818461173a565b905095945050505050565b6000602082019050611a30600083018461172b565b92915050565b60006020820190508181036000830152611a508184611773565b905092915050565b60006020820190508181036000830152611a71816117dd565b9050919050565b60006020820190508181036000830152611a9181611800565b9050919050565b60006020820190508181036000830152611ab181611823565b9050919050565b60006020820190508181036000830152611ad181611846565b9050919050565b60006020820190508181036000830152611af181611869565b9050919050565b60006020820190508181036000830152611b118161188c565b9050919050565b60006020820190508181036000830152611b31816118af565b9050919050565b60006020820190508181036000830152611b51816118d2565b9050919050565b60006020820190508181036000830152611b71816118f5565b9050919050565b60006020820190508181036000830152611b9181611918565b9050919050565b60006020820190508181036000830152611bb18161193b565b9050919050565b60006020820190508181036000830152611bd18161195e565b9050919050565b6000602082019050611bed6000830184611981565b92915050565b6000611bfd611c0e565b9050611c098282611e2f565b919050565b6000604051905090565b600067ffffffffffffffff821115611c3357611c32611f67565b5b611c3c82611f96565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611c9782611db1565b9150611ca283611db1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611cd757611cd6611eda565b5b828201905092915050565b6000611ced82611db1565b9150611cf883611db1565b925082611d0857611d07611f09565b5b828204905092915050565b6000611d1e82611db1565b9150611d2983611db1565b925082821015611d3c57611d3b611eda565b5b828203905092915050565b6000611d5282611d91565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611de8578082015181840152602081019050611dcd565b83811115611df7576000848401525b50505050565b60006002820490506001821680611e1557607f821691505b60208210811415611e2957611e28611f38565b5b50919050565b611e3882611f96565b810181811067ffffffffffffffff82111715611e5757611e56611f67565b5b80604052505050565b6000611e6b82611db1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611e9e57611e9d611eda565b5b600182019050919050565b6000611eb482611db1565b9150611ebf83611db1565b925082611ecf57611ece611f09565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b61233e81611d47565b811461234957600080fd5b50565b61235581611d59565b811461236057600080fd5b50565b61236c81611d65565b811461237757600080fd5b50565b61238381611db1565b811461238e57600080fd5b5056fea2646970667358221220dbcc8916a2da235877c8c7156399cb86556642ad81e7022d2d4e1763996d2a5064736f6c63430008040033';

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
