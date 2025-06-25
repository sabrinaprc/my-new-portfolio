import React from 'react';

export function Button({ children, className = '', variant = 'default', ...props }) {
  let base =
    'px-4 py-2 rounded font-medium transition-all duration-300';
  let variants = {
    default: 'bg-white text-black',
    blue: 'bg-blue-600 hover:bg-blue-800 text-white',
    outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50',
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant] || ''} ${className}`}
    >
      {children}
    </button>
  );
}