import { ethers } from "ethers";
import MyNFT from "../artifacts/contracts/MyNFT.sol/MyNFT.json";

export const getContract = (address: string, provider: ethers.providers.Provider) => {
  return new ethers.Contract(address, MyNFT.abi, provider);
};
