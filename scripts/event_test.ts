import {ethers} from 'hardhat';

async function main() {
    const EventTest = await ethers.getContractFactory('EventTest');
    const eventTest = await EventTest.deploy('test-version');

    await eventTest.deployed();

    console.log('EventTest deployed to: ', eventTest.address);
}

main()
    .then(()=>process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })