import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  withIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  withIcon = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

  const variants = {
    primary: "bg-accent-500 text-white border border-accent-400 shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:bg-accent-600",
    secondary: "bg-cream-100 text-slate-900 hover:bg-cream-200 border border-cream-300 shadow-sm hover:shadow-md",
    outline: "bg-transparent border border-slate-200 text-slate-700 hover:bg-cream-50 hover:text-slate-900 hover:border-slate-300",
    ghost: "text-slate-600 hover:text-accent-600 hover:bg-accent-50/50",
    glow: "bg-white text-slate-900 hover:bg-cream-50 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] border border-white/50"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>
  );
};
