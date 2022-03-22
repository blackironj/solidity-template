# Basic Solidity template using hardhat

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

## Prerequisite
- node v16
- Burnable Wallet address & private key for testing
  > :warning: I would recommand that do not use a real wallet for testing!
- Alchemy API key
  - https://www.alchemy.com/
- Etherscan API key
  - https://etherscan.io/
- Install yarn & Set yarn berry
```sh
npm install -g yarn
yarn set version berry
yarn install
```

## Quick start
- compile contract
```sh
yarn compile
```
- How to deploy sample contract to sample
  - create `.env` file and write down env value
    ```
    ROPSTEN_URL=https://eth-ropsten.alchemyapi.io/v2/YOUR_API_KEY
    PRIVATE_KEY=YOUR_BURNABLE_WALLET_PRIVATE_KEY
    ETHERSCAN_API_KEY=YOUR_ETHERSCAN_API_KEY
    ```
  - Deploy your contract
    ```sh
    yarn deploy:ropsten
    ```
  - Verify contract address
    ```sh
    yarn verify:ropsten <YOUR_CONTRACT_ADDRESS>
    ```
