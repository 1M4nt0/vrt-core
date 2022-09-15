// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "./VehicleRegistrationToken.sol";

contract VehicleMarketplace {
    using Counters for Counters.Counter;

    Counters.Counter private _saleTicketIds;
    Counters.Counter private _listedItemsCount;

    VehicleRegistrationToken vrt;

    mapping(uint256 => bool) _isTokenOnSale;
    mapping(uint256 => SaleTicket) _idToSaleTicket;
    mapping(uint256 => uint256) _tokenIdToSaleTicketId;

    constructor(address VRTAddress) {
        vrt = VehicleRegistrationToken(VRTAddress);
    }

    enum SaleTicketStatus {
        PENDING,
        COMPLETED,
        CANCELLED
    }

    struct SaleTicket {
        address seller;
        IERC721 tokenContract;
        uint256 tokenId;
        uint256 price;
        SaleTicketStatus status;
    }

    event OnSale(
        uint256 indexed ticketId,
        address seller,
        address tokenContract,
        uint256 tokenId,
        uint256 price
    );

    event Sold(
        uint256 indexed ticketId,
        address buyer,
        address tokenContract,
        uint256 tokenId,
        uint256 price
    );

    event Cancel(uint256 indexed ticketId, address seller, uint256 tokenId);

    function listedItemsCount() public view returns (uint256) {
        return _listedItemsCount.current();
    }

    function isTokenOnSale(uint256 tokenId) public view returns (bool) {
        return _isTokenOnSale[tokenId];
    }

    function placeNftOnSale(uint256 tokenId, uint256 price) public payable {
        require(
            vrt.ownerOf(tokenId) == msg.sender,
            "You are not owner of this nft"
        );
        require(!_isTokenOnSale[tokenId], "Item is already on sale");
        _saleTicketIds.increment();
        uint256 _ticketId = _saleTicketIds.current();
        _listedItemsCount.increment();
        _isTokenOnSale[tokenId] = true;
        _tokenIdToSaleTicketId[tokenId] = _ticketId;
        _idToSaleTicket[_ticketId] = SaleTicket(
            msg.sender,
            vrt,
            tokenId,
            price,
            SaleTicketStatus.PENDING
        );

        emit OnSale(_ticketId, msg.sender, address(vrt), tokenId, price);
    }

    function getTokenSaleTicket(uint256 tokenId)
        public
        view
        returns (SaleTicket memory)
    {
        require(_isTokenOnSale[tokenId], "The token is not on sale");
        uint256 _ticketId = _tokenIdToSaleTicketId[tokenId];
        return _idToSaleTicket[_ticketId];
    }

    function buyNft(uint256 tokenId) public payable {
        require(_isTokenOnSale[tokenId], "The vehicle is not on sale");
        uint256 _ticketId = _tokenIdToSaleTicketId[tokenId];
        SaleTicket storage saleTicket = _idToSaleTicket[_ticketId];
        uint256 price = saleTicket.price;
        address owner = vrt.ownerOf(tokenId);

        require(msg.sender != owner, "You already own this NFT");
        require(msg.value == price, "Please submit the asking price");

        vrt.transferFrom(owner, msg.sender, tokenId);
        _isTokenOnSale[tokenId] = false;
        _listedItemsCount.decrement();
        saleTicket.status = SaleTicketStatus.COMPLETED;
        delete _tokenIdToSaleTicketId[tokenId];

        payable(owner).transfer(msg.value);

        emit Sold(_ticketId, msg.sender, address(vrt), tokenId, price);
    }

    function cancelSale(uint256 tokenId) public {
        require(
            vrt.ownerOf(tokenId) == msg.sender,
            "You are not owner of this nft"
        );
        require(_isTokenOnSale[tokenId], "Item is not on sale");
        uint256 _ticketId = _tokenIdToSaleTicketId[tokenId];
        SaleTicket storage saleTicket = _idToSaleTicket[_ticketId];
        _isTokenOnSale[tokenId] = false;
        saleTicket.status = SaleTicketStatus.CANCELLED;
        delete _tokenIdToSaleTicketId[tokenId];
        emit Cancel(_ticketId, msg.sender, tokenId);
    }
}
