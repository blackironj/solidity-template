import {ethers} from 'hardhat';

async function main() {

  const BlackironNFT = await ethers.getContractFactory('BlackironNFT');
  const blackironNFT = await BlackironNFT.deploy('BlackironNFT','Blackiron');

  await blackironNFT.deployed();

  console.log('BlackironNFT deployed to:', blackironNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
