var Migrations = artifacts.require("./Migrations.sol")
const deployerAccount = "0xCA6d0A7c597fD54f6FF6Faf5014ff7b3Fd318d20"

module.exports = function (deployer) {
  deployer.deploy(Migrations, { from: deployerAccount })
}
