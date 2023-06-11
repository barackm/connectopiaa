import React from 'react';
import Button from '../Button';
import postImage from './postImage.jpg';
import userImage from '../../assets/images/user.png';
import premium from '../../assets/images/premium.png';
import likeIcon from '../../assets/images/heart.png';
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

    const convertLikes = (likes: number) => {
        if (likes < 1000) {
            return likes;
        } else if (likes >= 1000 && likes < 1000000) {
            return (likes / 1000).toFixed(1) + 'K';
        } else {
            return (likes / 1000000).toFixed(1) + 'M';
        }
    }

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
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-2 mb-4 justify-center'>
                    <img
                        alt="Poster"
                        src={userImage}
                        className='w-8 h-8 rounded-full object-cover'
                    />
                    <span className='text-gray-500'>by <a href="#" className='text-white'>
                        {formatedOwnerAddr}
                    </a></span>
                </div>
                <button className='flex items-center mb-3 text-gray-500 hover:text-white'>
                    <img src={likeIcon} alt="like" className='w-5 h-5 inline-block mr-2' />
                    <strong>{convertLikes(likes)}</strong>
                </button>
            </div>
            {isPaidContent && <Button
            >
                Subscribe <small className='ml-2 font-bold'>({price} ETH)</small>
            </Button>}
        </article>
    );
};

export default Post;
