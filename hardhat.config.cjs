require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle"); // This may not be necessary if using toolbox
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
      {
        version: "0.8.27",
      },
    ],
  },
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_API_KEY || "", // Make sure this is set in your .env
      accounts: process.env.SEPOLIA_PRIVATE_KEY !== undefined ? [process.env.SEPOLIA_PRIVATE_KEY] : [], // Your private key for Sepolia
    }
  },
  paths: {
    tests: "./test", // Path for your test files
  }
};
