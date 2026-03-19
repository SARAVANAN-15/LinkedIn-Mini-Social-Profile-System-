import React from 'react';
import { PostCard, Card, LetterAvatar } from '../components';
import { posts, currentUser } from '../data/staticData';
import '../styles/styles.css';

export function Feed() {

  return (
    <div className="feed-container">
      <div className="feed-main">
        {/* Create Post Card */}
        <Card className="create-post">
          <div className="create-post-header">
            <LetterAvatar
              name={currentUser.name || 'User'}
              className="create-post-avatar"
            />
            <input
              type="text"
              placeholder="Start a post, try writing an image or video"
              className="create-post-input"
            />
          </div>
          <div className="create-post-footer">
            <button>📸 Photo</button>
            <button>🎥 Video</button>
            <button>📄 Document</button>
            <button>📅 Schedule</button>
          </div>
        </Card>

        {/* Posts Feed */}
        <div className="posts-list">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              author={post.author}
              avatar={post.avatar}
              timestamp={post.timestamp}
              content={post.content}
              image={post.image}
              likes={post.likes}
              comments={post.comments}
            />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="feed-sidebar">
        <Card className="sidebar-widget">
          <h3>📰 News</h3>
          <div className="news-item">
            <span className="news-tag">Technology</span>
            <h4>React 18 Released</h4>
          </div>
          <div className="news-item">
            <span className="news-tag">Development</span>
            <h4>Web Dev Trends 2024</h4>
          </div>
          <div className="news-item">
            <span className="news-tag">Career</span>
            <h4>Tips for Technical Interviews</h4>
          </div>
        </Card>

        <Card className="sidebar-widget">
          <h3>👥 Suggested For You</h3>
          <div className="suggested-item">
            <p><strong>Emma Wilson</strong></p>
            <p>Product Designer</p>
            <button>+ Follow</button>
          </div>
          <div className="suggested-item">
            <p><strong>Chris Brown</strong></p>
            <p>Technical Writer</p>
            <button>+ Follow</button>
          </div>
        </Card>
      </div>
    </div>
  );
}
