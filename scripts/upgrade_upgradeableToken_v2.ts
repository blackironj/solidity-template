require('dotenv').config();
import {ethers, upgrades} from 'hardhat';

const PROXY = process.env.PROXY_ADDRESS || ''

async function main() {
    const UpgradeableTokenV2 = await ethers.getContractFactory('UpgradeableTokenV2');
    console.log(PROXY);
    
    await upgrades.upgradeProxy(PROXY, UpgradeableTokenV2);

    console.log('UpgradeableToken upgraded successfully');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
