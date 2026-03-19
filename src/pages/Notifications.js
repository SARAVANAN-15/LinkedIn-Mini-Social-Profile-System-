import React, { useState } from 'react';
import { Card, NotificationItem } from '../components';
import { notifications } from '../data/staticData';
import '../styles/styles.css';

export function Notifications() {
  const [notificationList, setNotificationList] = useState(notifications);
  const [filterType, setFilterType] = useState('all');

  const filteredNotifications = filterType === 'all'
    ? notificationList
    : notificationList.filter((notif) => notif.type === filterType);

  const unreadCount = notificationList.filter((n) => !n.read).length;

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h1>🔔 Notifications</h1>
        {unreadCount > 0 && (
          <span className="unread-badge">{unreadCount} new</span>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="notification-filters-container">
        <button
          className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
          onClick={() => setFilterType('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filterType === 'connection' ? 'active' : ''}`}
          onClick={() => setFilterType('connection')}
        >
          Connections
        </button>
        <button
          className={`filter-btn ${filterType === 'like' ? 'active' : ''}`}
          onClick={() => setFilterType('like')}
        >
          Likes
        </button>
        <button
          className={`filter-btn ${filterType === 'comment' ? 'active' : ''}`}
          onClick={() => setFilterType('comment')}
        >
          Comments
        </button>
        <button
          className={`filter-btn ${filterType === 'mention' ? 'active' : ''}`}
          onClick={() => setFilterType('mention')}
        >
          Mentions
        </button>
      </div>

      {/* Notifications List */}
      <div className="notifications-list">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              message={notification.message}
              avatar={notification.avatar}
              timestamp={notification.timestamp}
              read={notification.read}
            />
          ))
        ) : (
          <Card className="no-notifications">
            <p>No notifications to show</p>
          </Card>
        )}
      </div>

      {/* Mark as Read Button */}
      {unreadCount > 0 && (
        <Card className="mark-read-container">
          <button
            className="mark-all-btn"
            onClick={() =>
              setNotificationList(
                notificationList.map((n) => ({ ...n, read: true }))
              )
            }
          >
            Mark all as read
          </button>
        </Card>
      )}
    </div>
  );
}
