import {ethers} from 'hardhat';

async function main() {

  const BIToken = await ethers.getContractFactory('BIToken');
  const biToken = await BIToken.deploy('10000000000000000000000'); // 10000 * 1e18

  await biToken.deployed();

  console.log('BIToken deployed to:', biToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
