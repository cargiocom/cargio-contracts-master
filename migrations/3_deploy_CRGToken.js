const CRGToken = artifacts.require("./CRGToken.sol");

module.exports = async function (deployer, network, accounts) {
    console.log(accounts)
    await deployer.deploy(CRGToken);
};
