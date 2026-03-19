import React from 'react';
import { Link } from 'react-router-dom';
import { currentUser } from './data/staticData';
import './styles/styles.css';

/* LETTER AVATAR COMPONENT*/
export function LetterAvatar({ name, className = '' }) {
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a66c2',
        color: 'white',
        fontWeight: 'bold',
        fontSize: className.includes('profile-avatar') ? '4em' : className.includes('connection-avatar') ? '2em' : '1.2em'
      }}
    >
      {initial}
    </div>
  );
}

/* BUTTON COMPONENT*/
export function Button({ text, onClick, variant = 'primary', size = 'medium' }) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

/* CARD COMPONENT*/
export function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>;
}

/* NAVBAR COMPONENT*/
export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <h2>in</h2>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="navbar-center">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              <span>🏠</span>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/connections" className="nav-link">
              <span>👥</span>
              <span>My Network</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications" className="nav-link">
              <span>🔔</span>
              <span>Notifications</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="nav-link">
              <span>💼</span>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <LetterAvatar name={currentUser.name || 'User'} className="profile-img" />
      </div>
    </nav>
  );
}

/* POST CARD COMPONENT*/
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

/* NOTIFICATION ITEM COMPONENT*/
export function NotificationItem({ type, message, avatar, timestamp, read = false }) {
  // Extract a sensible fallback for the first letter
  const nameMatch = message ? message.split(' ')[0] : 'N';
  return (
    <Card className={`notification-item ${read ? 'read' : 'unread'}`}>
      <LetterAvatar name={nameMatch} className="notification-avatar" />
      <div className="notification-content">
        <p>{message}</p>
        <span className="notification-time">{timestamp}</span>
      </div>
      <span className={`notification-type ${type}`}>{type}</span>
    </Card>
  );
}

/* CONNECTION CARD COMPONENT*/
export function ConnectionCard({ name, role, avatar, mutualConnections = 0 }) {
  return (
    <Card className="connection-card">
      <LetterAvatar name={name} className="connection-avatar" />
      <h4>{name}</h4>
      <p>{role}</p>
      <p className="mutual">
        {mutualConnections} mutual connections
      </p>
      <div className="connection-actions">
        <Button text="Connect" variant="primary" size="small" />
        <Button text="Message" variant="secondary" size="small" />
      </div>
    </Card>
  );
}
