// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Post.sol";

contract Like is Post {
     function likePost(uint256 _postId) public doesPostExist(_postId) returns(bool) { 
        posts[_postId].likes = posts[_postId].likes +1;
        emit PostLiked(_postId, msg.sender);
        return true;
    }
}