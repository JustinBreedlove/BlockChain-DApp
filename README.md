# Blockchain DApp Project
### Technologies Used
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


# Components
Overview:
1) Running a local blockchain using `Ganache`
2) Write a smart contract
3) Build and test if the smart contract works using `Foundry`
4) Deploy the smart contract to the local blockchain using `Foundry`
5) Import your test account from `Ganache` to `MetaMask`
6) Create your front-end that interacts with the smart contract functions and `MetaMask` wallet

Detailed:
The `Counter.sol` file which is created by `Foundry`is the smart contract. The language used is `Solidity`.
You can read about it here: https://docs.soliditylang.org/en/v0.8.21/introduction-to-smart-contracts.html


The users (front-end/browser) who are ***connected*** to the blockchain with the `MetaMask ' wallet will be able to get the public values, pay ETH to interact with the smart contract functions and see their wallet address and ETH balance.

---
# Environment-Setup

I have included a setup script `setup.sh` to make it easier to set up the project and start working on it.
To use the script:

If you have missing tools, install them using `apt`, `brew`, or any other method.

After everything finishes successfully, navigate to `front-end` directory and start `react` by running `pnpm start`.

### Ganache
Download link: https://trufflesuite.com/ganache/
Executable download and run.
The setup options are the same as in the guide: https://iiiyu.com/2022/10/24/zero-to-one-full-stack-dapp-ethereum-development-based-on-foundry-nextjs-typescript-latest-version/#Setting-up-the-local-chain-for-development

---
# Helper Functions
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
- Deploying Smart Contracts using Foundry `forge`: https://book.getfoundry.sh/forge/deploying
- Accessing functions and variables with Foundry `cast`: https://book.getfoundry.sh/cast/
- Ethers library docs: https://docs.ethers.org/v6/getting-started/

### Some Terminology
Taken from https://docs.ethers.org/v6/getting-started/#starting-glossary
- Provider: is a read-only connection to the blockchain, which allows querying the blockchain state, such as account, block, or transaction details, querying event logs, or evaluating read-only code using call.
  If you are coming from Web3.js, you are used to a Provider offering both read and write access. In Ethers, all write operations are further abstracted into another Object, the Signer.
- Signer: wraps all operations that interact with an account. An account generally has a private key located somewhere, which can be used to sign a variety of types of payloads.
  The private key may be located in memory (using a Wallet) or protected via some IPC layer, such as MetaMask which proxies interaction from a website to a browser plug-in, which keeps the private key out of the reach of the website and only permits interaction after requesting permission from the user and receiving authorization.

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
