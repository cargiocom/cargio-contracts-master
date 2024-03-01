4444444444444444const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const mnemonicTestnet = fs.readFileSync(".secret-testnet").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     
      port: 8545,            
      network_id: "*",       
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonicTestnet, `https://data-seed-prebsc-1-s1.binance.org:8545`, 0, 10),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  mocha: {
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  compilers: {
    solc: {
      version: "0.5.16",   
      settings: {          
        optimizer: {
          enabled: true,
          runs: 999999
        },
        outputSelection: {
          "*": {
            "": [
              "ast"
            ],
            "*": [
              "evm.bytecode.object",
              "evm.deployedBytecode.object",
              "abi",
              "evm.bytecode.sourceMap",
              "evm.deployedBytecode.sourceMap",
              "metadata"
            ]
          },
        }
      }
    },
  }
}
