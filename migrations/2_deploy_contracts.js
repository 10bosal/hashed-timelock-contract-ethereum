const HashedTimelock = artifacts.require('./HashedTimelock.sol')
const HashedTimelockERC20 = artifacts.require('./HashedTimelockERC20.sol')
const HashedTimelockERC721 = artifacts.require('./HashedTimelockERC721.sol')
const deployerAccount = "0xCA6d0A7c597fD54f6FF6Faf5014ff7b3Fd318d20"

module.exports = function (deployer) {
  deployer.deploy(HashedTimelock, { from: deployerAccount })
  deployer.deploy(HashedTimelockERC20, { from: deployerAccount })
  deployer.deploy(HashedTimelockERC721, { from: deployerAccount })
}
