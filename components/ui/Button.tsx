import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#09006C] to-[#0C008A] text-white hover:from-[#1200D9] hover:to-[#0C008A] focus:ring-[#1200D9] shadow-md hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-gradient-to-r from-[#1200D9] to-[#0C008A] text-white hover:from-[#FAFAFF] hover:to-[#D5D3D1] hover:text-[#09006C] focus:ring-[#1200D9] shadow-md hover:shadow-xl transform hover:-translate-y-0.5',
    outline: 'border-2 border-[#09006C] text-[#09006C] hover:bg-gradient-to-r hover:from-[#1200D9] hover:to-[#0C008A] hover:border-transparent hover:text-white focus:ring-[#09006C]',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
