const { network, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")

const BASE_FEE = "250000000000000000" // every request of VRF costs 0.25 LINK, check the docs
const GAS_PRICE_LINK = 1e9 //1000000000 link per gas

module.exports = async  ({ getNamedAccounts, deployments }) => {
  const {deploy, log} = deployments
  const {deployer} = await getNamedAccounts()


  if (developmentChains.includes(network.name)){
    log("Local network detected! Deploying mocks...")
    //deploying a mock VRFCoordinator...
    await deploy("VRFCoordinatorV2Mock", {
      from: deployer,
      log: true,
      args: [BASE_FEE, GAS_PRICE_LINK],
    })
    log("Mocks deployed")
    log("________________________")
  }
}

module.exports.tags = ["all", "mocks"]