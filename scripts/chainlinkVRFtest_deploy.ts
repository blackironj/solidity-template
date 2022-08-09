import {ethers} from 'hardhat';

async function main() {

    const ChainlinkVRFtest = await ethers.getContractFactory('ChainlinkVRFtest');
    const chainlinkVRFtest = await ChainlinkVRFtest.deploy(1348, '0x7a1bac17ccc5b313516c5e16fb24f7659aa5ebed');

    await chainlinkVRFtest.deployed();

    console.log('ChainlinkVRFtest deployed to: ', chainlinkVRFtest.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })