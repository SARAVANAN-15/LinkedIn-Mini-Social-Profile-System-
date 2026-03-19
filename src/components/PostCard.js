import React from 'react';
import { Card } from './Card';
import { LetterAvatar } from './LetterAvatar';
import { Button } from './Button';

export function PostCard({ author, avatar, timestamp, content, image, likes = 0, comments = 0 }) {
  return (
    <Card className="post-card">
      <div className="post-header">
        <LetterAvatar name={author} className="post-avatar" />
        <div className="post-info">
          <h4>{author}</h4>
          <p className="post-timestamp">{timestamp}</p>
        </div>
      </div>
      <div className="post-content">
        <p>{content}</p>
        {image && <img src={image} alt="post" className="post-image" />}
      </div>
      <div className="post-stats">
        <span>👍 {likes} likes</span>
        <span>💬 {comments} comments</span>
      </div>
      <div className="post-actions">
        <Button text="👍 Like" />
        <Button text="💬 Comment" />
        <Button text="↗️ Share" />
      </div>
    </Card>
  );
}
