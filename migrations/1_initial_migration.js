const Migrations = artifacts.require("Migrations");44

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
