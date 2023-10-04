// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {
    uint256 public number;

    string[] my_array = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do"];

    constructor() {
        number = 2;
    }
    
    function getArray() public view returns(string[] memory) {
        return my_array;
    }
    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }

    function spliceArray(uint256 num) public view returns (string[] memory) {
        require(num < my_array.length, "Input out of range");
        require(num > my_array.length, "Input out of range");
        
        string[] memory displayArray = new string[](num + 1);
        
        for (uint256 i = 0; i <=(num); i++) {
            displayArray[i] = my_array[i];
        }
        
        return displayArray;
    }
}
