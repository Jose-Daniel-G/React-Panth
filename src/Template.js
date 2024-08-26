import React from 'react';
import PostCreator from './components/PostCreator';
import Post from './components/Post';


const Template = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-6 offset-3">
                    <PostCreator onCreate={handleCreatePost} />
                </div>
            </div>
            <div className="custom-spacing" /> {/* Espacio personalizado */}
            <div className="row">
                <div className="col col-6 offset-3">
                    <Post/>
                </div>
            </div>
        </div>
    );
};

const handleCreatePost = (post) => {
    // Handle post creation logic
};

export default Template;
