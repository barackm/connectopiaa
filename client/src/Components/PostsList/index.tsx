import React, { useCallback, useEffect } from 'react';
import Button from '../Button';
import refreshIcon from '../../assets/images/refresh.png';
import Post, { PostData } from './Post';
import { useNavigate } from 'react-router-dom';
import { useContractContext } from '../../contexts/ContractContext';
import LoadingScreen from '../LoadingScreen';
import { toast } from 'react-toastify';
import { ethers } from 'ethers';

interface PostsListProps { }

const PostsList: React.FC<PostsListProps> = (props) => {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const { getPosts, address } = useContractContext();

    const navigate = useNavigate();

    const handleGetPosts = async () => {
        try {
            setLoading(true);
            const posts = await getPosts();
            const parsedPosts = posts.map((post: any) => ({
                postId: post.postId.toNumber(),
                author: post.author,
                title: post.title,
                content: post.content,
                image: post.image,
                timestamp: post.timestamp.toNumber(),
                likes: post.likes.toNumber(),
                isHidden: post.isHidden,
                isPaidContent: post.isPaidContent,
                price: ethers.utils.formatEther(post.price),
                subscribers: post.subscribers,
            }));

            setPosts(parsedPosts.filter((post: PostData) => post.title));
        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleGetPosts();
    }, [address]);


    return (
        <section aria-label="Related articles" className="py-8 lg:py-24 bg-gray-800">
            {loading && <LoadingScreen />}
            <div className="px-4 mx-auto max-w-screen-xl">
                <div className='flex gap-6 '>
                    <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">Posts</h2>
                    <div className=''>
                        <Button
                            onClick={() => navigate('/new-post')}
                        >Create Post</Button>
                    </div>
                    <div className='mt-2'>
                        <button>
                            <img src={refreshIcon} alt="refresh" onClick={handleGetPosts} className='w-8 h-8' />
                        </button>
                    </div>
                </div>
                <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        posts.map((post: PostData) => (
                            <Post key={post.postId} post={post} onRefresh={handleGetPosts} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default PostsList;
