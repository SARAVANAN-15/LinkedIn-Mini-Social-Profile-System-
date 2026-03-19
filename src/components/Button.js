import React from 'react';

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
