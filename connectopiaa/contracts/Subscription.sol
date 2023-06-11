// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Post.sol";
import "./PostStruct.sol";
import "./PostStruct.sol";

contract Subscription is Post {
    mapping(uint256 => uint256) public subscriberCount;

    modifier hasEnoughFound(uint256 _postId) {
        require(
            msg.value >= posts[_postId].price,
            "You don't have sufficiant found to subscribe."
        );
        _;
    }

    modifier isOwnerOfPost(uint256 _postId) {
        require(
            posts[_postId].author != msg.sender,
            "You can't pay for your own post."
        );
        _;
    }

    modifier hasAlreadyPaid(uint256 _postId) {
        require(
            !paidPosts[_postId][msg.sender],
            "You have already paid for this post."
        );
        _;
    }

    function payForPost(uint256 _postId) public payable returns (bool) {
        require(posts[_postId].isPaidContent, "PostStruct is not payable.");
        require(
            msg.value >= posts[_postId].price,
            "You don't have sufficiant found to subscribe."
        );
        require(
            posts[_postId].author != msg.sender,
            "You can't pay for your own post."
        );
        require(
            !paidPosts[_postId][msg.sender],
            "You have already paid for this post."
        );

        PostStruct memory post = posts[_postId];
        paidPosts[_postId][msg.sender] = true;
        uint256 currentLength = post.subscribers.length;

        address[] memory newSubscribers = new address[](currentLength + 1);

        for (uint256 i = 0; i < currentLength; i++) {
            newSubscribers[i] = post.subscribers[i];
        }

        newSubscribers[currentLength] = msg.sender;
        post.subscribers = newSubscribers;

        address payable postAuthor = payable(post.author);
        postAuthor.transfer(msg.value);
        subscriberCount[_postId] += 1;
        emit PostPaid(_postId, msg.sender, msg.value);
        return true;
    }
}
