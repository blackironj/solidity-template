require('dotenv').config();
import {ethers, upgrades} from 'hardhat';

const PROXY = process.env.PROXY_ADDRESS || ''

async function main() {
    const PizzaV2 = await ethers.getContractFactory('PizzaV2');
    console.log(PROXY);
    
    await upgrades.upgradeProxy(PROXY, PizzaV2);

    console.log('Pizza upgraded successfully');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
