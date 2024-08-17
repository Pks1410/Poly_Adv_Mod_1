const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/AlienNFT.sol/AlienNFT.json");

const tokenAddress = "0xd2a0b9363dac11d992f499d898d899725296317b";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xDFD6D2D99D7B9f644ad7F5049C2d78b14b3B496d";

async function main() {

  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const balance = await token.balanceOf(walletAddress);
  console.log(`You now have: ${balance} NFTs in your wallet`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});