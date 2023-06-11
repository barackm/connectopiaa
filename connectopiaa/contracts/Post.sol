// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./PostStruct.sol";

contract Post {
    mapping(uint256 => PostStruct) internal posts;
    mapping(uint256 => mapping(address => bool)) internal paidPosts;
    uint256 nextPostId = 1;

    modifier hasValidContent(string memory _content) {
        require(
            bytes(_content).length > 0,
            "PostStruct content should not be empty."
        );
        _;
    }

    modifier isContentPayable(uint256 _postId) {
        require(posts[_postId].isPaidContent, "PostStruct is not payable.");
        _;
    }

    modifier hasPriceIfPayableContent(bool _isPaidContent, uint256 _price) {
        require(
            !_isPaidContent || _price > 0,
            "PostStruct price should be greater than 0."
        );
        _;
    }

    modifier doesPostExist(uint256 _postId) {
        require(
            _postId < nextPostId,
            "PostStruct with this id does not exist."
        );
        _;
    }

    event PostCreated(
        uint256 postId,
        address indexed author,
        uint256 timestamp
    );
    event PostLiked(uint256 postId, address indexed liker);
    event PostPaid(uint256 postId, address indexed payer, uint256 amount);

    function createPost(
        address _author,
        string memory _title,
        string memory _content,
        bool _isPaidContent,
        uint256 _price,
        string memory _image
    )
        public
        hasValidContent(_content)
        hasPriceIfPayableContent(_isPaidContent, _price)
        returns (uint256)
    {
        uint256 price = _isPaidContent ? _price : 0;
        posts[nextPostId] = PostStruct(
            nextPostId,
            _author,
            _title,
            _content,
            _image,
            block.timestamp,
            0,
            false,
            _isPaidContent,
            price,
            new address[](0)
        );

        nextPostId++;
        emit PostCreated(nextPostId, _author, block.timestamp);

        return nextPostId - 1;
    }

    function hasPaidForPost(
        uint256 _postId,
        address _user
    ) public view returns (bool) {
        return paidPosts[_postId][_user];
    }

    function getPosts() public view returns (PostStruct[] memory) {
        PostStruct[] memory allPosts = new PostStruct[](nextPostId);

        for (uint i = 0; i < nextPostId; i++) {
            PostStruct storage post = posts[i];
            allPosts[i] = post;
        }

        return allPosts;
    }

    function getUserPosts(
        address _user
    ) public view returns (PostStruct[] memory) {
        PostStruct[] memory userPosts = new PostStruct[](nextPostId);
        uint256 userPostCount = 0;

        for (uint i = 0; i < nextPostId; i++) {
            PostStruct storage post = posts[i];
            if (post.author == _user) {
                userPosts[userPostCount] = post;
                userPostCount++;
            }
        }

        return userPosts;
    }

    function getPayablePosts() public view returns (PostStruct[] memory) {
        PostStruct[] memory payablePosts = new PostStruct[](nextPostId);
        uint256 payablePostCount = 0;

        for (uint i = 0; i < nextPostId; i++) {
            PostStruct storage post = posts[i];
            if (post.isPaidContent) {
                payablePosts[payablePostCount] = post;
                payablePostCount++;
            }
        }

        return payablePosts;
    }
}
