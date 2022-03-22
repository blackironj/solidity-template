import {ethers, waffle} from 'hardhat';
import chai from 'chai';

import BITokenArtifact from '../artifacts/contracts/BIToken.sol/BIToken.json';
import {BIToken} from '../typechain-types/BIToken';
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/signers';

const {deployContract} = waffle;
const {expect} = chai;

describe("BIToken contract", () => {
    let totalSupply = '10000000000000000000000';
  
    let owner: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addrs: SignerWithAddress[];

    let biToken: BIToken;

    beforeEach(async () => {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        biToken = (await deployContract(owner, BITokenArtifact, [totalSupply])) as BIToken;
    });

    describe('Deployment', () => {
        it('Should assign the total supply of tokens to the owner', async () => {
            const ownerBalance = await biToken.balanceOf(owner.address);
            expect(await biToken.totalSupply()).to.equal(ownerBalance);
        });
    });

    describe('Transactions', () => {
        it('Should transfer tokens between accounts', async () => {
            const ownerBalance = await biToken.balanceOf(owner.address);

            //Transfer 50 tokens from owner to addr1
            await biToken.transfer(addr1.address, 50);
            const addr1Balance = await biToken.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(50);

            //Transfer 20 tokens from addr1 to adrr2
            await biToken.connect(addr1).transfer(addr2.address, 20);
            const addr2Balance = await biToken.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(20);
        });
    });

    it('Should fail if sender does not have enough tokens', async () => {
        const initialOwnerBalance = await biToken.balanceOf(owner.address);

        //Try to send 1 token from addr1(0 tokens) to owner
        await expect(biToken.connect(addr1).transfer(owner.address, 1)
        ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

        //Owner balance shouldn't have changed
        expect(await biToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });
});