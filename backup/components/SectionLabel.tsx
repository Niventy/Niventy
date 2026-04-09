import React from 'react';

interface SectionLabelProps {
  text: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ text, className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-niventy-300 backdrop-blur-sm ${className}`}>
      <span className="w-2 h-2 rounded-full bg-niventy-400 animate-pulse"></span>
      {text}
    </div>
  );
};