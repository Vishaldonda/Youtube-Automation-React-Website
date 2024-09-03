import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function LikeButton({ video }) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    // Implement any additional logic here, e.g., updating a database
  };

  return (
    <button className="like-button" onClick={handleClick}>
      <FontAwesomeIcon 
        icon={faHeart} 
        color={liked ? 'red' : 'gray'} 
        style={{ fontSize: '0.6em' }}
      />
    </button>
  );
}

export default LikeButton;
