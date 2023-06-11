// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

struct PostStruct {
    uint256 postId;
    address author;
    string title;
    string content;
    uint256 timestamp;
    uint256 likes;
    bool isHidden;
    bool isPaidContent;
    uint256 price;
    address[] subscribers;
}
