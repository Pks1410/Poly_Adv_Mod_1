const tokenContractJSON = require("../artifacts/contracts/AlienNFT.sol/AlienNFT.json");
require('dotenv').config();

const tokenAddress = "0x89cCC32aaCc15530EA4336b7E85417aAe5a6Cc59"; // deployed address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xDFD6D2D99D7B9f644ad7F5049C2d78b14b3B496d";

async function main() {
  const nft = await ethers.getContractAt("AlienNFT", tokenAddress);
  const tokenURIs = [
    "ipfs://QmdrTLoHoS9Qiw5vBPvdMKwBUseAMXAbyp9KAKMWGYWXBE",
    "ipfs://QmWyW2z7zoiafG26TkZkB9tEzaEe5uABLeZGnGALsbp1b3",
    "ipfs://QmVCWtEfPSNBuYkjHp27pM1TjxSJmJvrwbLAKSZRVwbKSe",
    "ipfs://Qmf7zt6SBiEpGT7yd4q6ertCqboEN75tDqgNnM5YxXe1MC",
    "ipfs://QmemvicwSjbGEsREuEiqg2B7MLXdeG3Z8vhmoTRV1nb3Rh"
  ];

  const prompts = [
    "Alien 1: Generate an image for an alien named Heatblast",
    "Alien 2: Generate an image for an alien named Diamondhead",
    "Alien 3: Generate an image for an alien named Fourarms",
    "Alien 4: Generate an image for an alien named XLR8",
    "Alien 5: Generate an image for an alien named Cannonbolt"
  ];

  await nft.batchMintNFT(tokenURIs, prompts);
  console.log(`Minted ${tokenURIs.length} NFTs to ${walletAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
