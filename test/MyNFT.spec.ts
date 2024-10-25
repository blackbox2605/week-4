import { expect } from "chai";
import { ethers } from "hardhat";
import { MyNFT } from "../typechain";

describe("MyNFT", function () {
  let nft: MyNFT;

  beforeEach(async function () {
    const NFT = await ethers.getContractFactory("MyNFT");
    nft = await NFT.deploy() as MyNFT;
    await nft.deployed();
  });

  it("should mint a new NFT", async function () {
    const [owner] = await ethers.getSigners();
    await nft.createNFT(owner.address, "https://example.com/token-metadata");
    expect(await nft.tokenCounter()).to.equal(1);
  });
});
