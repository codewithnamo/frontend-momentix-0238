pragma solidity ^0.5.0;

import "./myERC721.sol";

contract tokenFactory {

    address[] tokenAddress;
 
    function deploy721Contract(
        string calldata name,
        string calldata symbol,
        string calldata baseUrl,
        uint256 calldata timestamp
    ) external returns (myERC721 cardAddress) {

        myERC721 newTickets = new myERC721(name, symbol, baseUrl,timestamp);

        tokenAddress.push(address(newCards));
        return newCards;
    }

}
