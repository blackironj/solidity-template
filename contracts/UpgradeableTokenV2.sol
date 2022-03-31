// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./UpgradeableToken.sol";

contract UpgradeableTokenV2 is UpgradeableToken {
    ///@dev returns the contract version
    function upgradeableTokenVersion() external pure returns (uint256) {
        return 2;
    }
}
