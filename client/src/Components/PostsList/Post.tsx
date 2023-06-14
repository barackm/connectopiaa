import React from 'react';
import Button from '../Button';
import postImage from './postImage.jpg';
import userImage from '../../assets/images/user.png';
import premium from '../../assets/images/premium.png';
import likeIcon from '../../assets/images/heart.png';
import { useContractContext } from '../../contexts/ContractContext';
import { toast } from 'react-toastify';
import { parseError } from '../../utils/errorHandler';
import PostDetails from '../PostDetails';
import { convertContent, convertLikes } from '../../utils';
interface PostProps {
    post: PostData;
    onRefresh: () => void;
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
    const { post, onRefresh } = props;
    const { likePost, payForPost, hasAlreadyPaid: hasAlreadyPaidAsync, address } = useContractContext();
    const [loading, setLoading] = React.useState(false);
    const [paying, setPaying] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { content, isPaidContent, likes, author, price, image, title } = post;
    const [hasAlreadyPaid, setHasAlreadyPaid] = React.useState(false);
    const formatedOwnerAddr = author.slice(0, 6) + '...' + author.slice(-6);
    const contentSample =  content.slice(0, 50) + '...';



    const handleLike = async () => {
        if (loading) return;
        if (!address) return toast.warning('You need to connect your wallet to like this post');
        setLoading(true);
        try {
            await likePost(post.postId);
            onRefresh();
        } catch (error: any) {
            const errorMessage = parseError(error);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    const handlePayForContent = async () => {
        if (paying) return;
        if(!address) return toast.warning('You need to connect your wallet to pay for this content');
        setPaying(true);
        try {
            await payForPost(post.postId, price);
            onRefresh();
        } catch (error: any) {
            const errorMessage = parseError(error);
            toast.error(errorMessage);
        } finally {
            setPaying(false);
        }
    }

    const checkIfAlreadyPaid = async () => {
        const hasAlreadyPaid = await hasAlreadyPaidAsync(post.postId);
        setHasAlreadyPaid(hasAlreadyPaid);
    }

    React.useEffect(() => {
        checkIfAlreadyPaid();
    }, [post]);


    const isPostOwner = address === author;
    const canViewContent = ((isPostOwner || hasAlreadyPaid) && address) || !isPaidContent;
    
    return (
        <article className="">
            <PostDetails open={open} onClose={handleClose} post={post} loading={loading} onLike={handleLike} />
            <a href="#" onClick={() => {
                if (!canViewContent) return toast.warning('You need to pay to view this content');
                handleOpen();
            }}>
                <img src={image || postImage} className="mb-5 rounded-lg w-full object-cover object-center h-40" alt="Image 1"
                    loading='lazy'
                />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight ">
                <a href="#" className='text-white'>{title} {isPaidContent && <img src={premium} alt="payable"
                    className='inline-block w-5 h-5 ml-2'
                />}</a>
            </h2>
            <p className="mb-4 font-light text-gray-500 dark:text-gray-400">{contentSample}</p>
            <div className='flex justify-between items-center ' >
                <div className='flex items-center gap-2 mb-4 justify-center' >
                    <img
                        alt="Poster"
                        src={userImage}
                        className='w-8 h-8 rounded-full object-cover'
                    />
                    <span className='text-gray-500'>by <a href="#" className='text-white'>
                        {formatedOwnerAddr}
                    </a></span>
                </div>
                <button className={`flex items-center mb-3 text-gray-500 hover:text-white ${loading && 'animate-pulse'} `} onClick={handleLike}>
                    <img src={likeIcon} alt="like" className='w-5 h-5 inline-block mr-2' />
                    <strong>{convertLikes(likes)}</strong>
                </button>
            </div>
            {isPaidContent && !hasAlreadyPaid && !isPostOwner && <Button
                onClick={handlePayForContent}
                loading={paying}
            >
                Subscribe <small className='ml-2 font-bold'>({price} ETH)</small>
            </Button>}
        </article>
    );
};

export default Post;
