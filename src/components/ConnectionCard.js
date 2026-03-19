import React from 'react';
import { Card } from './Card';
import { LetterAvatar } from './LetterAvatar';
import { Button } from './Button';

export function ConnectionCard({ name, role, avatar, mutualConnections = 0 }) {
  return (
    <Card className="connection-card">
      <div className="connection-cover"></div>
      <LetterAvatar name={name} className="connection-avatar" />
      <div className="connection-info">
        <h4>{name}</h4>
        <p>{role}</p>
        <p className="mutual">
          {mutualConnections} mutual connections
        </p>
      </div>
      <div className="connection-actions">
        <Button text="Connect" variant="primary" size="small" />
        <Button text="Message" variant="secondary" size="small" />
      </div>
    </Card>
  );
}
