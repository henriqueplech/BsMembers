// components/ui/bs-logo.tsx

import React from 'react';

export const BsLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#10B981" /> 
          <stop offset="1" stopColor="#34D399" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
      <path
        d="M9 13.5H21M9 18.5H21M15.5 8.5V23.5C15.5 23.5 23 21 23 16C23 11 15.5 8.5 15.5 8.5Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};