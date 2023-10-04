import { useEffect, useState, useRef } from 'react';
import './App.css';
import { BrowserProvider, ethers } from "ethers";
import { text } from 'stream/consumers';
// Import the types generated by the TypeChain library when working with the final version of your contract.
import { Counter__factory } from './generated/contract-types';

declare let window: any

function App() {

  const [num, setNum] = useState<Number>();
  const [address,setAddress] = useState<string>();
  const [provider, setProvider] = useState<BrowserProvider>();
  const [balance, setBalance] = useState<string>();
  const contractAddress = '0xbD7acE2f0030459F49Cf65A554a002C36Db210f8'

  const handleConnectWallet = async () => {
    // ethers.BrowserProvider is a provider for state changes. It will trigger MetaMask
    const myProvider = new ethers.BrowserProvider(window.ethereum)
    setProvider(myProvider) // You must define the setProvider function just like HW1
    if (provider) { // TypeScript is strict with types and you must check for `undefined` variables
      await provider.send('eth_requestAccounts', [])
      const signer = await provider.getSigner()
      const balance = await provider.getBalance(contractAddress)
      setAddress(await signer.getAddress())
      setBalance(ethers.formatUnits(balance))

    }
  }



  const getNumber = async () => {
    // ethers.JsonRpcProvider is for non-state changing operations. It will NOT trigger MetaMask. This uses the TypeChain output.
    const provider = new ethers.JsonRpcProvider()
    const counter = Counter__factory.connect(contractAddress, provider)
    const n = await counter.number()
    console.log(ethers.formatUnits(n)) // Or other operations
    setNum(Number(num))
  }

  // Front-end
  const handleGetArray = async () => {
    const provider = new ethers.JsonRpcProvider()
    const counter = Counter__factory.connect(contractAddress, provider)
    const arr = await counter.getArray()
    console.log(arr) // Entire array
    console.log(arr[0]) // First element of array
  }

  const handleIncrement = async () => {
    console.log('increment')
    if (provider) {
      const signer = await provider.getSigner()
      const counter = Counter__factory.connect(contractAddress, signer)
      await counter.increment()
    }
  }

  /*const handleSpliceArray = async () => {
    if (provider) {
      const signer = await provider.getSigner()
      const counter = Counter__factory.connect(contractAddress, signer)
      const newArray = await counter.spliceArray()
      console.log(newArray)
    }
  }*/

  return (
    <>
    <div className="App">
      <h1>Web3 Dapp</h1>
      <br/>
        {address ? (
            <>
              <div>Address: {address}</div>
              <div>Wallet Amount: {balance}</div>
            </>
          ) : (
            <h3><button onClick={handleConnectWallet}>Connect Wallet</button></h3>
          )}
      </div>
      <br />
      <div className='App'>
            <button onClick={getNumber}>Get Latest Number</button>
            <h3>Number: {Number(num)}</h3>

            <br />
            <button onClick={handleIncrement}>Increment Number</button>

            <br />
            <button onClick={handleGetArray}>Get Array</button>
      </div>
     </> 

  );
}

export default App;