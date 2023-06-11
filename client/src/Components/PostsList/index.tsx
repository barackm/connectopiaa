import React from 'react';
import Button from '../Button';
import Post from './Post';

interface PostsListProps { }

const PostsList: React.FC<PostsListProps> = (props) => {
    const { } = props;

    // change the content
    const posts = [
        {
            postId: 1,
            content: 'Over the past year, Volosoft has undergone many changes! After months of preparation.',
            likes: 0,
            isPaidContent: true,
            price: 0.01,
            owner: "0x123456789abcdef",
        },
        {
            postId: 2,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likes: 10,
            isPaidContent: false,
            price: 0,
            owner: "0xabcdef123456789",
        },
        {
            postId: 3,
            content: 'Vivamus commodo augue in odio venenatis rutrum.',
            likes: 5,
            isPaidContent: true,
            price: 0.99,
            owner: "0x456789abcdef123",
        },
        {
            postId: 4,
            content: 'Phasellus fringilla scelerisque lorem, vitae varius ante aliquam nec.',
            likes: 3,
            isPaidContent: false,
            price: 0,
            owner: "0xcdef123456789abc",
        },
        {
            postId: 5,
            content: 'Etiam posuere tellus nec urna dignissim, eu fermentum velit interdum.',
            likes: 2,
            isPaidContent: true,
            price: 1.5,
            owner: "0x789abc456def012",
        },
        {
            postId: 6,
            content: 'Donec aliquam ex id est tincidunt, sed consequat leo hendrerit.',
            likes: 8,
            isPaidContent: false,
            price: 0,
            owner: "0xdef012789abc456",
        },
        {
            postId: 7,
            content: 'Suspendisse non felis eu nibh vestibulum dignissim vitae in ex.',
            likes: 1,
            isPaidContent: false,
            price: 0,
            owner: "0x456def012789abc",
        },
        {
            postId: 8,
            content: 'Praesent ullamcorper est eget orci ultricies cursus.',
            likes: 12,
            isPaidContent: true,
            price: 2.99,
            owner: "0x789abc456def012",
        },
    ];

    return (
        <>
            <section aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
                <div className="px-4 mx-auto max-w-screen-xl">
                    <div className='flex gap-6'>
                        <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">Posts</h2>
                        <div>
                            <Button>Create</Button>
                        </div>
                    </div>
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            posts.map((post) => (
                                <Post key={post.postId} post={post} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default PostsList;
