# CSCE-5575-HW2-Template <br /> Instructor: Beddhu Murali

# Table of Contents
1. [Introduction](#introduction)
2. [Tasks](#tasks)
3. [Environment Setup](#environment-setup)
4. [Help and Tips](#help-and-tips)
5. [Contribution](#contribution)

---
# Introduction
This assignment will be continuation of the first homework where you will perform an almost similar task, however, with the twist of introducing Web3 and Blockchain.
We will be using:
- Blockchain side
	- Ethereum Smart Contracts
	- Solidity
	- Truffle Suite Ganache
	- Foundry Toolchain
- Front-end side
	- ReactJS
	- TypeScript
	- Ethers.js v6 Library
	- TypeChain Library
	- MetaMask
	- NodeJS
	- pnpm

This homework is designed roughly following this guide: https://iiiyu.com/2022/10/24/zero-to-one-full-stack-dapp-ethereum-development-based-on-foundry-nextjs-typescript-latest-version/
You can read and follow this guide, but the guide uses `NextJS` and `Ethers.js v5`, which has a lot of differences compared to `v6`.

---
# Tasks
Overview:
1) Run a local blockchain using `Ganache`
2) Write a smart contract
3) Build and test if smart contract works using `Foundry`
4) Deploy the smart contract to your local blockchain using `Foundry`
5) Import your test account from `Ganache` to `MetaMask`
6) Create your front-end that interacts with the smart contract functions and `MetaMask` wallet

Detailed:
The `Counter.sol` file which is created by `Foundry` (will be explained) is your smart contract. The language used in writing it is called `Solidity`.
You can read about it here: https://docs.soliditylang.org/en/v0.8.21/introduction-to-smart-contracts.html
The `num` variable and the "lorem ipsum" array, as well as the necessary functions, such as `setNumber`, will be defined in your smart contract.

The users (front-end/browser) who are ***connected*** to the blockchain with the `MetaMask`wallet will be able to get the public values, pay eth to interact with the smart contract functions and see their wallet address and eth balance.

The front-end ***MUST*** have the following features:
- A connect button when pressed will invoke `MetaMask` wallet and connect to the blockchain
- After connection, the address and current balance of the wallet must be displayed
- After connection the current `num` from the smart contract must be displayed (no need to periodically update for the value)
- A button to call `getNum` from the smart contract
- A text field and a button to `setNum`. This will also invoke `MetaMask` and the user must pay the fee to call the function
- After the connection, the "lorem, ipsum" array must be also acquired and displayed according to the `num` value (same as HW1)
	- The cut/slice happens in smart contract. So, you will get and display the sliced array from the contract call.  
- After each payment, the wallet balance and `num` value must be automatically updated

The front-end GUI components and styling can be anything you like. No restrictions there.

Keep in mind that when accessing the variables, e.g. calling `get` functions from the smart contract, the user does not pay anything. The user only pays, when the state of the smart contract is changed. Such as calling the `setNumber` function.

---
# Environment-Setup
***Note: There are a lot of tools to setup with sometimes a rather long installation/compilation time. Not to mention the learning curve.***

We have included a setup script `setup.sh` to make it easier to setup the project and start working on it.
To use the script:

```bash
# In an empty directory.
git clone https://github.com/ArmanHZ/CSCE-5575-Project-1-Template.git
cd CSCE-5575-Project-1-Template
chmod u+x setup.sh
./setup.sh
```

If you have missing tools, install them using `apt` or any other method.

After everything finishes successfully, navigate to `front-end` directory and start `react` by running `pnpm start`.

### Ganache
Download link: https://trufflesuite.com/ganache/
Executable download and run.
The setup options are the same as in the guide: https://iiiyu.com/2022/10/24/zero-to-one-full-stack-dapp-ethereum-development-based-on-foundry-nextjs-typescript-latest-version/#Setting-up-the-local-chain-for-development

---
# Help-and-Tips
### Helper Functions
You can call the helper functions from the `front-end` directory using `pnpm`.
The list is as follows:

```bash
pnpm build				# Builds the contract in chain-end/src
pnpm deploy-contract <private_key>	# Deploys your smart contract to Ganache
pnpm call <contract_id>			# Access read-only variables of the contract
pnpm send <contract_id> <private_key>	# Call contract functions. These are state changing, so you will pay eth.
```

For other functionalities, you can use `foundry` tools from the `chain-end` directory.
***Important: After every change to your smart contract, you must re-deploy it. Re-deployed contracts will have a new address.***

### Documentation
Links:
- Must read: https://iiiyu.com/2022/10/24/zero-to-one-full-stack-dapp-ethereum-development-based-on-foundry-nextjs-typescript-latest-version
- Deploying Smart Contracts using Foundry `forge`: https://book.getfoundry.sh/forge/deploying
- Accessing functions and variables with Foundry `cast`: https://book.getfoundry.sh/cast/
- Ethers library docs: https://docs.ethers.org/v6/getting-started/

### Some Terminology
Taken from https://docs.ethers.org/v6/getting-started/#starting-glossary
- Provider: is a read-only connection to the blockchain, which allows querying the blockchain state, such as account, block or transaction details, querying event logs or evaluating read-only code using call.
  If you are coming from Web3.js, you are used to a Provider offering both read and write access. In Ethers, all write operations are further abstracted into another Object, the Signer.
- Signer: wraps all operations that interact with an account. An account generally has a private key located somewhere, which can be used to sign a variety of types of payloads.
  The private key may be located in memory (using a Wallet) or protected via some IPC layer, such as MetaMask which proxies interaction from a website to a browser plug-in, which keeps the private key out of the reach of the website and only permits interaction after requesting permission from the user and receiving authorization.

### Example code for connecting to MetaMask
The guide uses `Ethers v5` and the latest version is `v6`. Unfortunately, there were some major changes, so you will not be able to use the guide.
Here are some example codes to interact with the wallet and public values, as well as give you some idea on how to use `Ethers v6`.

***Important: Deal with front-end stuff after you are sure that your contract works and has no bugs.***
After you deploy your contract, make sure to create the `TypeScript code from ABI`. To do this:

```bash
# In the front-end/src directory
pnpm typechain --target ethers-v6 --out-dir generated/contract-types '../../chain-end/out/Counter.sol/Counter.json'
```

After creating the ABI bindings, make sure to import that in your `App.tsx` as well:

```tsx
import { Counter__factory } from './generated/contract-types';
```

### Wallet-Connection-Example

```tsx
const handleConnectWallet = async () => {
  // ethers.BrowserProvider is a provider for state changes. It will trigger MetaMask
  const myProvider = new ethers.BrowserProvider(window.ethereum)
  setProvider(myProvider) // You must define the setProvider function just like HW1
  if (provider) { // TypeScript is strict with types and you must check for `undefined` variables
    await provider.send('eth_requestAccounts', [])
    const signer = await provider.getSigner()
    setAddress(await signer.getAddress())
  }
}
```

### Accessing Public Variable Example

```tsx
const getNumber = async () => {
  // ethers.JsonRpcProvider is for non-state changing operations. It will NOT trigger MetaMask. This uses the TypeChain output.
  const provider = new ethers.JsonRpcProvider()
  const counter = Counter__factory.connect('<contract_address_here>', provider)
  const n = await counter.number()
  console.log(ethers.formatUnits(n)) // Or other operations
}
```

You must use `useEffect` and `setState` to dynamically update acquired values.

---
# Contribution
If you see any errors in descriptions or need more details, please open an Issue Ticket.
