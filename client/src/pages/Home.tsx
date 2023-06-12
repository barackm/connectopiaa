import React from 'react';
import PostsList from '../Components/PostsList';

interface HomeProps { }

const Home: React.FC<HomeProps> = (props) => {
    const { } = props;
    return (
        <div>
            <PostsList />
        </div>
    );
};

export default Home;
