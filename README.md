# Project Title: NFT Bridge From Sepolia to Amoy using FX Portal
In this Project, we are Batch Minting 5 Nfts (ERC721A Contract) on the Sepolia Network and then we bridge those NFTs to Amoy network using FX Portal.

# Description
This Project is for demontrating the Bridge Functionality, we are using Sepolia and Amoy Network.
The Contract AlienNFT.sol inherits the ERC721A interface which is ideal for batch minting multiple NFTs at once:
```slash
function batchMintNFT(string[] memory nftURLs, string[] memory prompts) public onlyOwner {
        require(nftURLs.length == prompts.length, "Mismatched arrays length");
        uint256 startTokenId = counter;
        uint256 numberOfTokens = nftURLs.length;

        _safeMint(owner(), numberOfTokens);

        for (uint256 i = 0; i < numberOfTokens; i++) {
            _tokenURIs[startTokenId + i] = nftURLs[i];
            _prompts[startTokenId + i] = prompts[i];
        }

        counter += numberOfTokens;
    }
```
## Installing
* User can fork this repository and the clone it to there local system.
  User is required to install Node.js prior before executing the program.
Install all dependancies by using:
```shell
npm install
```
Setup your .env file with RPC URL's and your wallet Private Key.
Executing program
You first need to compile the contract:
```shell
npx hardhat compile
````
Now deploy the contract on sepolia network using the following command:
```shell
npx hardhat run scripts/deploy.js --network sepolia
```
Now BatchMint all the NFT's on sepolia network using the following command:
```shell
npx hardhat run scripts/batchMint.js --network sepolia
```
Again we now need to deposit the NFT's for the Bridge from Sepolia to Amoy using this command:
```shell
npx hardhat run scripts/approveDeposit.js --network sepolia
```
Wait for 20-30 mins for bridge process, after that copy the contract address on the amoy network after it recieves all the NFTs.

Finally deploy getBalance.js to amoy network to get the total no. of nft it recieved from that contract:

```
npx hardhat run scripts/getBalance.js --network amoy
```
## Help
Note: you need to have some faucet on both the network
* Sepolia Faucet: https://cloud.google.com/application/web3/faucet/ethereum/sepolia
* Amoy Faucet: https://faucet.polygon.technology/ (Joining Polygon Discord is required)
npx hardhat help
* To understand about avalance go the the docs section by visiting: https://docs.avax.network/

## Authors
* Name: Prakhar Sahu
* MetacrafterID: Prakhar1410 (1410sahu.prakhar@gmail.com)
* Loom Video Link: https://www.loom.com/share/67ba10f326b74b17a502b00877b87c17?sid=acbdcd87-3d5f-44ff-92e4-cfb865642810
