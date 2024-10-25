import { expect } from "chai";
import { ethers, run } from "hardhat";

describe("Hardhat tasks", function () {
  it("should deploy and mint NFT", async function () {
    await run("deploy-contract");
    const [owner] = await ethers.getSigners();
    await run("mint-nft", { to: owner.address, tokenUri: "https://example.com/token-metadata" });
  });
});
