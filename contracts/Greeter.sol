//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string greet;

    function setGreet(string memory _greet) public {
        greet = _greet;
    }

    function getGreet() public view returns(string memory) {
        return greet;
    }
}
