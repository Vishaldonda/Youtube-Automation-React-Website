import React from 'react';
import LikeButton from './LikeButton';

function Thumbnail({ video }) {
    return (
      <div className="video-thumbnail">
        <img src={video.thumbnailUrl} alt={video.title} />
      </div>
    );
  }
  
function Video({ video, isMobile }) {
    return (
      <div className="video-container" style={{
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        textAlign: isMobile ? 'left' : 'center',
      }}>
        <Thumbnail video={video} />
        <div className="video-details">
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </a>
        </div>
        <LikeButton video={video} />
      </div>
    );
  }
  
  export default Video;
  