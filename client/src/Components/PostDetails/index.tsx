import * as React from 'react';
import Box from '@mui/material/Box';
import likeIcon from '../../assets/images/heart.png';
import Typography from '@mui/material/Typography';
import userImage from '../../assets/images/user.png';
import Modal from '@mui/material/Modal';

import { PostData } from '../PostsList/Post';
import { Fade } from '@mui/material';
import { convertLikes } from '../../utils';
import Button from '../Button';

interface PostDetailsProps {
    open: boolean;
    onClose: () => void;
    post: PostData;
    loading: boolean;
    onLike: () => void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '8px',
    p: 3,

};

const PostDetails: React.FC<PostDetailsProps> = (props) => {
    const {
        open,
        onClose,
        post,
        loading,
        onLike
    } = props;

    const { content, likes, author, image, title } = post;
    const formatedOwnerAddr = author.slice(0, 6) + '...' + author.slice(-6);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={onClose}
            closeAfterTransition

        >
            <Fade in={open}>
                <Box sx={style} className="w-[90%] md:w-2/5">
                    <div className='mb-4'>
                        <img src={image} alt="post" className="w-full h-80 object-cover rounded-lg shadow-md" />
                    </div>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='text-blue-950'>
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className='text-gray-800 pb-8'>
                        {content}
                    </Typography>

                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2 mb-4 justify-center' >
                            <img
                                alt="Poster"
                                src={userImage}
                                className='w-8 h-8 rounded-full object-cover'
                            />
                            <span className='text-gray-500'>by <a href="#" className='text-slate-900'>
                                <strong>{formatedOwnerAddr}</strong>
                            </a></span>
                        </div>
                        <button className={`flex items-center mb-3 text-gray-500 hover:text-gray-700 ${loading && 'animate-pulse'} `} onClick={onLike}>
                            <img src={likeIcon} alt="like" className='w-5 h-5 inline-block mr-2' />
                            <strong>{convertLikes(likes)}</strong>
                        </button>
                    </div>
                    <div className='flex justify-end'>
                        <Button onClick={onClose}>
                            Close
                        </Button>
                    </div>
                </Box>
            </Fade>
        </Modal>
    );
};

export default PostDetails;
