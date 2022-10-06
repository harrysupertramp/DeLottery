const { network, ethers } = require("hardhat")

// it's for the mock deployment 
const networkConfig = {
  5: {
    name: "goerli",
    vrfcoordinatorV2: "0x3602A48bC78fce2a49e34A5c061e4B6573A03325",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane:"0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    subscriptionId: "2916",
    callbackGasLimit: "500000",
    interval: "30",
  },
  31337: {
    name: "hardhat",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    callbackGasLimit: "500000",
    interval: "30",
  }
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
  networkConfig,
  developmentChains,
}