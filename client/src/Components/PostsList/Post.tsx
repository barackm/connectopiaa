import React from 'react';
import Button from '../Button';
import postImage from './postImage.jpg';
import userImage from '../../assets/images/user.png';
import premium from '../../assets/images/premium.png';

interface PostProps {
    post: Post
}

interface Post {
    postId: number;
    content: string;
    likes: number;
    isPaidContent: boolean;
    price: number;
    owner: string;
}

const Post: React.FC<PostProps> = (props) => {
    const { post } = props;
    const { content, isPaidContent, likes, owner, postId, price } = post;

    const formatedOwnerAddr = owner.slice(0, 6) + '...' + owner.slice(-6);
    const premiumContentSample = content.slice(0, 50) + '...';

    return (
        <article className="max-w-xs">
            <a href="#">
                <img src={postImage} className="mb-5 rounded-lg" alt="Image 1"
                    loading='lazy'
                />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight ">
                <a href="#" className='text-white'>Post Title {isPaidContent && <img src={premium} alt="payable"
                    className='inline-block w-5 h-5 ml-2'
                />}</a>
            </h2>
            <p className="mb-4 font-light text-gray-500 dark:text-gray-400">{premiumContentSample}</p>
            <div className='flex items-center gap-2 mb-4'>
                <img
                    alt="Poster"
                    src={userImage}
                    className='w-8 h-8 rounded-full object-cover'
                />
                <span className='text-gray-500'>by <a href="#" className='text-white'>
                    {formatedOwnerAddr}
                </a></span>
            </div>
            {isPaidContent && <Button
            >
                Subscribe <small className='ml-2 font-bold'>({price} ETH)</small>
            </Button>}
        </article>
    );
};

export default Post;
