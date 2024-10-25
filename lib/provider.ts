import { ethers } from "ethers";
import { INFURA_PROJECT_ID } from "./env";

export const getProvider = () => {
  return new ethers.providers.InfuraProvider("sepolia", INFURA_PROJECT_ID);
};
