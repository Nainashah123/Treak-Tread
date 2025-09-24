import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'flex items-start gap-2 cursor-pointer';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const checkboxStyles = `
    w-5 h-5 border border-black flex items-center justify-center transition-colors duration-200 flex-shrink-0
    ${checked ? 'bg-black' : 'bg-white'}
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
  `.trim();

  const labelStyles = `
    text-body-medium text-black flex-1 leading-tight
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
  `.trim();

  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div className={`${baseStyles} ${disabledStyles} ${className}`}>
      <div
        className={checkboxStyles}
        onClick={handleClick}
      >
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      <span
        className={labelStyles}
        onClick={handleClick}
      >
        {label}
      </span>
    </div>
  );
};

export default Checkbox;