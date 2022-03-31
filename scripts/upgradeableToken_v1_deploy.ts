import {ethers, upgrades} from 'hardhat';

async function main() {
  const UpgradeableToken = await ethers.getContractFactory('UpgradeableToken');
  const instance = await upgrades.deployProxy(UpgradeableToken, [], {
    initializer: 'initialize',
  })

  await instance.deployed();

  console.log('UpgradeableToken deployed to:', instance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
