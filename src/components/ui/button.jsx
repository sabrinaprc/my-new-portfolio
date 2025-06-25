import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-white text-black rounded ${className}`}
    >
      {children}
    </button>
  );
}