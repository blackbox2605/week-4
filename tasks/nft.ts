import { task } from "hardhat/config";
import { ethers } from "hardhat";

// Task to deploy the NFT contract
task("deploy-contract", "Deploys the NFT contract")
  .setAction(async (_, hre) => {
    const NFT = await hre.ethers.getContractFactory("MyNFT");
    const nft = await NFT.deploy();
    await nft.deployed();
    console.log("NFT Contract deployed to:", nft.address);
  });

// Task to mint an NFT
task("mint-nft", "Mints an NFT")
  .addParam("to", "The recipient address")
  .addParam("tokenUri", "The token URI")
  .setAction(async (taskArgs, hre) => {
    const [deployer] = await hre.ethers.getSigners();
    const nft = await hre.ethers.getContract("MyNFT", deployer.address);

    const tx = await nft.createNFT(taskArgs.to, taskArgs.tokenUri);
    await tx.wait();  // Wait for the transaction to be mined

    console.log(`NFT minted to ${taskArgs.to} with URI: ${taskArgs.tokenUri}`);
  });
