import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'red';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  className = '',
}) => {
  const variants = {
    purple: 'bg-[#623CEA] text-white',
    red: 'bg-[#E01715] text-white',
  };

  const classes = `
    inline-flex items-center justify-center
    px-2 py-1 text-sm font-medium rounded
    ${variants[variant]}
    ${className}
  `.trim();

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;
