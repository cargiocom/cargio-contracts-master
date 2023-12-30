const Migrations = artifacts.require("Migrations");4

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
