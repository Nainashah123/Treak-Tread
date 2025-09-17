import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'large',
  showArrow = false,
  className = '',
  onClick,
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center gap-2 font-medium transition-colors duration-200 border';
  
  const variants = {
    primary: 'bg-white border-black text-black hover:bg-gray-100',
    secondary: 'bg-black border-gray-200 text-white hover:bg-gray-800',
  };

  const sizes = {
    small: 'px-6 py-4 text-body-large',
    large: 'px-8 py-6 text-body-xl',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim();

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {showArrow && <ArrowUpRight className="h-6 w-6" />}
    </button>
  );
};

export default Button;
