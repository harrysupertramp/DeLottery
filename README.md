1- yarn add --dev hardhat
2- yarn hardhat --> empy config
3- yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv
4- yarn add --dev @nomicfoundation/hardhat-toolbox
5- copy al the "require"" from github of hardhat.config.js file

indexed parameters are also called "topics", event video linked in github lesson9

yarn global add hardhat-shorthand  -> hh compile instead of yarn hardhat compile

SPECIAL testing/debugging methods: evm_increaseTime, evm_mine
