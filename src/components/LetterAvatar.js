import React from 'react';

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
