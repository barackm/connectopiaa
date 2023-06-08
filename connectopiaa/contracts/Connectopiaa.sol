// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Post.sol";
import "./Subscription.sol";
import "./Like.sol";
import "./PostStruct.sol";

contract Connectopias {
    Post private postInstance;
    Subscription private subscriptionInstance;
    Like private likesInstance;

    constructor() {
        postInstance = new Post();
        subscriptionInstance = new Subscription();
        likesInstance = new Like();
    }

    function createPost(string memory _content, bool _isPaidContent, uint256 _price) public returns (uint256) {
        return postInstance.createPost(_content, _isPaidContent, _price);
    }

    function payForPost(uint256 _postId) public payable {
        subscriptionInstance.payForPost{value: msg.value}(_postId);
    }

    function hasPaidForPost(uint256 _postId, address _user) public view returns (bool) {
        return postInstance.hasPaidForPost(_postId, _user);
    }

    function likePost(uint256 _postId) public returns(bool) {
        likesInstance.likePost(_postId);
        return true;
    }

    function getPosts() public view returns(PostStruct[] memory){
        return postInstance.getPosts();
    }
}
