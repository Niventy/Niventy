import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark'; // 'light' means light background (dark logo), 'dark' means dark background (white logo)
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto", theme = 'light' }) => {
  // If theme is 'dark' (dark background), we invert the black logo to make it white.
  const imgStyle = theme === 'dark' ? { filter: 'brightness(0) invert(1)' } : {};

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://cdn.designfast.io/image/2026-02-12/b3e32bf0-d1ff-4baa-9c74-0f6661335c53.png" 
        alt="Niventy Logo" 
        className="h-10 w-auto object-contain"
        style={imgStyle}
      />
    </div>
  );
};