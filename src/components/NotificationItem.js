import React from 'react';
import { Card } from './Card';
import { LetterAvatar } from './LetterAvatar';

export function NotificationItem({ type, message, avatar, timestamp, read = false }) {
  const nameMatch = message ? message.split(' ')[0] : 'N';
  
  const typeIcon = {
    connection: '👋',
    like: '❤️',
    comment: '💬',
    mention: '📢'
  }[type] || '🔔';

  return (
    <Card className={`notification-item ${read ? 'read' : 'unread'}`}>
      <div className="notification-icon-wrapper">
        <LetterAvatar name={nameMatch} className="notification-avatar" />
        <div className="notification-type-badge">{typeIcon}</div>
      </div>
      <div className="notification-content">
        <p>{message}</p>
        <span className="notification-time">{timestamp}</span>
      </div>
    </Card>
  );
}
