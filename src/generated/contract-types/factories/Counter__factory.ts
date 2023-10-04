/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Counter, CounterInterface } from "../Counter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getArray",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "number",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newNumber",
        type: "uint256",
      },
    ],
    name: "setNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "spliceArray",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60056101c0818152644c6f72656d60d81b6101e052608090815261020082815264697073756d60d81b6102205260a052610240918252643237b637b960d91b6102605260c0919091526003610280818152621cda5d60ea1b6102a05260e05260046102c081815263185b595d60e21b6102e05261010052600b6103009081526a31b7b739b2b1ba32ba3ab960a91b6103205261012052600a6103408181526961646970697363696e6760b01b610360526101405261038091825263195b1a5d60e21b6103a052610160919091526103c0918252621cd95960ea1b6103e05261018091909152610440604052600261040090815261646f60f01b610420526101a05261010c91600191610124565b5034801561011957600080fd5b506002600055610347565b82805482825590600052602060002090810192821561016a579160200282015b8281111561016a578251829061015a9082610288565b5091602001919060010190610144565b5061017692915061017a565b5090565b8082111561017657600061018e8282610197565b5060010161017a565b5080546101a3906101ff565b6000825580601f106101b3575050565b601f0160209004906000526020600020908101906101d191906101d4565b50565b5b8082111561017657600081556001016101d5565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061021357607f821691505b60208210810361023357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561028357600081815260208120601f850160051c810160208610156102605750805b601f850160051c820191505b8181101561027f5782815560010161026c565b5050505b505050565b81516001600160401b038111156102a1576102a16101e9565b6102b5816102af84546101ff565b84610239565b602080601f8311600181146102ea57600084156102d25750858301515b600019600386901b1c1916600185901b17855561027f565b600085815260208120601f198616915b82811015610319578886015182559484019460019091019084016102fa565b50858210156103375787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610511806103566000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633fb5c1cb1461005c5780638381f58a14610071578063d09de08a1461008d578063d504ea1d14610095578063f9abe085146100aa575b600080fd5b61006f61006a366004610382565b600055565b005b61007a60005481565b6040519081526020015b60405180910390f35b61006f6100bd565b61009d6100d3565b604051610084919061039b565b61009d6100b8366004610382565b6101ac565b6000805490806100cc83610443565b9190505550565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156101a35783829060005260206000200180546101169061045c565b80601f01602080910402602001604051908101604052809291908181526020018280546101429061045c565b801561018f5780601f106101645761010080835404028352916020019161018f565b820191906000526020600020905b81548152906001019060200180831161017257829003601f168201915b5050505050815260200190600101906100f7565b50505050905090565b60015460609082106101fa5760405162461bcd60e51b8152602060048201526012602482015271496e707574206f7574206f662072616e676560701b60448201526064015b60405180910390fd5b60015482116102405760405162461bcd60e51b8152602060048201526012602482015271496e707574206f7574206f662072616e676560701b60448201526064016101f1565b600061024d836001610496565b67ffffffffffffffff811115610265576102656104af565b60405190808252806020026020018201604052801561029857816020015b60608152602001906001900390816102835790505b50905060005b83811161037b57600181815481106102b8576102b86104c5565b9060005260206000200180546102cd9061045c565b80601f01602080910402602001604051908101604052809291908181526020018280546102f99061045c565b80156103465780601f1061031b57610100808354040283529160200191610346565b820191906000526020600020905b81548152906001019060200180831161032957829003601f168201915b505050505082828151811061035d5761035d6104c5565b6020026020010181905250808061037390610443565b91505061029e565b5092915050565b60006020828403121561039457600080fd5b5035919050565b6000602080830181845280855180835260408601915060408160051b87010192508387016000805b8381101561041f57888603603f1901855282518051808852835b818110156103f8578281018a01518982018b015289016103dd565b508781018901849052601f01601f19169096018701955093860193918601916001016103c3565b509398975050505050505050565b634e487b7160e01b600052601160045260246000fd5b6000600182016104555761045561042d565b5060010190565b600181811c9082168061047057607f821691505b60208210810361049057634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156104a9576104a961042d565b92915050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fdfea26469706673582212205d7d3c20b254a6385b4118bdbd1af77edb262a404fe4af1dd5dfc25f32056d0464736f6c63430008150033";

type CounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Counter__factory extends ContractFactory {
  constructor(...args: CounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Counter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Counter__factory {
    return super.connect(runner) as Counter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new Interface(_abi) as CounterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Counter {
    return new Contract(address, _abi, runner) as unknown as Counter;
  }
}