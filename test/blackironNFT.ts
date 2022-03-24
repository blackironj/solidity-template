import {ethers, waffle} from 'hardhat';
import chai from 'chai';

import BlackironNFTArtifact from '../artifacts/contracts/BlackironNFT.sol/BlackironNFT.json';
import {BlackironNFT} from '../typechain-types/BlackironNFT';
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/signers';

const {deployContract} = waffle;
const {expect} = chai;

describe("BlackironNFT contract", function () {
    let BlackiornNFT: BlackironNFT;
    let _name = 'BlackironNFT';
    let _symbol = 'Blackiron';
    
    let account1: SignerWithAddress;
    let accounts: SignerWithAddress[];

    this.beforeEach(async () => {
        [account1, ...accounts] = await ethers.getSigners();

        BlackiornNFT = (await deployContract(account1, BlackironNFTArtifact, [_name, _symbol])) as BlackironNFT;
    });

    describe("Deployment", () => {
        it("Should has the correct name and symbol", async () => {
            expect(await BlackiornNFT.name()).to.equal(_name);
            expect(await BlackiornNFT.symbol()).to.equal(_symbol);
        });

        it("Should mint a token with token ID 1 & 2 to addr1", async () => {
            const address1 = account1.address;

            await BlackiornNFT.mintTo(address1);
            expect(await BlackiornNFT.ownerOf(1)).to.equal(address1);

            await BlackiornNFT.mintTo(address1);
            expect(await BlackiornNFT.ownerOf(2)).to.equal(address1);

            expect(await BlackiornNFT.balanceOf(address1)).to.equal(2);
        });
    });
})