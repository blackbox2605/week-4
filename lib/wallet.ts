import { ethers } from "ethers";
import { PRIVATE_KEY } from "./env";
import { getProvider } from "./provider";

export const getWallet = () => {
  const provider = getProvider();
  return new ethers.Wallet(PRIVATE_KEY, provider);
};
