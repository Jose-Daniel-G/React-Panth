import React from "react";
import profilePic from './images/image.png'; // Ajusta la ruta según tu estructura
import uploaded from './images/uploaded.png'; // Ajusta la ruta según tu estructura
import './css/Post.css'

const Post = () => {
  return (
    <div className="post-container">
      <UserInfo />
      <ImageSection />
      <PostContent />
      <PostActions />
    </div>
  );
};

const UserInfo = ({ onCreate }) => {
  return (
    <div className="user-info">
     <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="user-details">
        <span className="user-name">
          Artist name
          <span className="verified-icon">✔️</span>
        </span>
        <div className="post-time-visibility">
          <span>5 min</span>
          <span>🌍</span>
        </div>
      </div>
    </div>
  );
};

const ImageSection = () => {
  return (
    <div className="image-section">
      <img
        src={uploaded}
        alt="Post"
        className="post-image"
      />
    </div>
  );
};

const PostContent = () => {
  return (
    <div className="post-content">
      <p>
        This was the best performance of the night! The dancers, Choreography, costumes, stage everything! As busy as she is with her tour and then to put this sh... <span className="see-more">see more.</span>
      </p>
    </div>
  );
};

const PostActions = () => {
  return (
    <div className="post-actions">
      <div className="action">
        🤘 20 Likes
      </div>
      <div className="action">
        💬 10k comments
      </div>
      <div className="action">
        🔁 42 shares
      </div>
    </div>
  );
};

export default Post;

