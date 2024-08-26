import React, { useState } from 'react';
import Template from './Template';
import Post from './components/css/styles.css';
import './components/css/EmojiPicker.css';

const App = () => {
    const [posts, setPosts] = useState([]);

    const handleCreatePost = ({ content, media, mediaType, tag }) => {
        const newPost = {
            content,
            media,
            mediaType,
            tag,
        };
        setPosts([newPost, ...posts]);
    };

    return (
        <div className="app color-browndark">
            <Template handleCreatePost={handleCreatePost} />
            <div className="posts">
                {posts.map((post, index) => (
                    <Post key={index} content={post} />
                ))}
            </div>
        </div>
    );
};

export default App;
