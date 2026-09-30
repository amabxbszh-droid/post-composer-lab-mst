import React, { useState } from 'react';

const PostComposer = () => {
  const [platform, setPlatform] = useState('Twitter');
  const [postText, setPostText] = useState('');

  const maxChars = platform === 'Twitter' ? 280 : 3000;
  const currentLength = postText.length;
  const isLimitExceeded = currentLength > maxChars;

  return (
    <div className="composer-container">
      <h2>Create a Post</h2>

      <div className="form-group">
        <label htmlFor="platform">Select Platform:</label>
        <select 
          id="platform" 
          value={platform} 
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="Twitter">Twitter</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>
      </div>

      <div className="form-group">
        <textarea
          placeholder="What do you want to talk about?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          rows={6}
          className={isLimitExceeded ? 'error-border' : ''}
        />
      </div>

      <div className="footer">
        <span className={isLimitExceeded ? 'error-text' : ''}>
          {currentLength} / {maxChars} characters
        </span>
        
        {isLimitExceeded && (
          <span className="error-text">Limit exceeded!</span>
        )}
      </div>

      <button disabled={isLimitExceeded || currentLength === 0}>
        Post
      </button>
    </div>
  );
};

export default PostComposer;