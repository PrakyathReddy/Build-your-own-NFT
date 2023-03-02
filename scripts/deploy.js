// import ethers from hardhat package
const { ethers } = require("hardhat");

async function main() {
  // A contractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  // so nft contract is a factory for instances of our NFTee contract
  const nftContract = await ethers.getContractFactory("NFTee");

  // here we deploy the contract
  const deployedNFTContract = await nftContract.deploy();

  //wait for the contract to deploy
  await deployedNFTContract.deployed();

  //print the address of the deployed contract
  console.log("NFT Contract Address:", deployedNFTContract.address);
}
//call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
