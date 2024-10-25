// Import the required Hardhat libraries
const { ethers } = require("hardhat");

async function main() {
    // Get the contract factory for the NFT contract
    const MyNFT = await ethers.getContractFactory("MyNFT");
    
    // Deploy the contract
    const myNFT = await MyNFT.deploy();
    
    // Wait for the contract to be deployed
    await myNFT.deployed();

    // Log the address of the deployed contract
    console.log("MyNFT deployed to:", myNFT.address);
}

// Execute the main function and handle errors
main()
    .then(() => process.exit(0)) // Exit the process if successful
    .catch((error) => {
        console.error(error); // Log any errors
        process.exit(1); // Exit the process with a failure code
    });
