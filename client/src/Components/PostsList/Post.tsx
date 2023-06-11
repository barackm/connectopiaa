import React from 'react';
import Button from '../Button';
import postImage from './postImage.jpg';
import userImage from '../../assets/images/user.png';
import premium from '../../assets/images/premium.png';
import likeIcon from '../../assets/images/heart.png';
interface PostProps {
    post: PostData
}

export interface PostData {
    postId: number;
    author: string;
    title: string;
    content: string;
    image: string;
    timestamp: number;
    likes: number;
    isHidden: boolean;
    isPaidContent: boolean;
    price: string;
    subscribers: string[];
}


const Post: React.FC<PostProps> = (props) => {
    const { post } = props;
    const { content, isPaidContent, likes, author, price, image, title } = post;

    const formatedOwnerAddr = author.slice(0, 6) + '...' + author.slice(-6);
    const premiumContentSample = isPaidContent ? content.slice(0, 50) + '...' : content;

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
        <article className="">
            <a href="#">
                <img src={image || postImage} className="mb-5 rounded-lg w-full object-cover object-center h-40" alt="Image 1"
                    loading='lazy'
                />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight ">
                <a href="#" className='text-white'>{title} {isPaidContent && <img src={premium} alt="payable"
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
