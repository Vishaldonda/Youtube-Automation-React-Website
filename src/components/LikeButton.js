import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function LikeButton({ video }) {
  const [liked, setLiked] = useState(false);
  const [count,setCount] = useState(0);

  const handleClick = () => {
    if (!liked){ // If not already liked
      setCount(count+1)
    }
    else{
      setCount(count-1)
    }
    setLiked(!liked); // Implement any additional logic here, e.g., updating a database
  };

  return (
    <div style={{ textAlign: 'center' }}>
    <button className="like-button" onClick={handleClick} style={{ marginRight: '15px' }}>
      <FontAwesomeIcon 
        icon={faHeart} 
        color={liked ? 'red' : 'gray'} 
        style={{ fontSize: '0.6em' }}
      />
    </button>
    <p>{count}</p>
    </div>
  );
}

export default LikeButton;
