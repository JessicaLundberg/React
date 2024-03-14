import React, { useState } from 'react';
import "../App.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button className="like-button" onClick={handleClick}>
      {liked ? 'Unlike' : 'Like'}
      {liked ? '👍' : '👍'}
    </button>
  );
};

export default LikeButton;