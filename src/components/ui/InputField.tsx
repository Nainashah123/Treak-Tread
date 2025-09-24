import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  showPasswordToggle?: boolean;
  className?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  showPasswordToggle = false,
  className = '',
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const baseStyles = 'w-full px-4 py-4 text-body-large border border-black bg-white transition-colors duration-200';
  const focusStyles = isFocused ? 'ring-0 outline-none' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text';

  const inputClasses = `
    ${baseStyles}
    ${focusStyles}
    ${disabledStyles}
    ${className}
  `.trim();

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-body-large font-medium text-black">
          {label}
        </label>
      )}
      <div className="relative">
        {/* Hidden input to prevent auto-fill */}
        <input
          type="text"
          style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
          tabIndex={-1}
          autoComplete="off"
        />
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          className={inputClasses}
          autoComplete="new-password"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black hover:opacity-70 transition-opacity"
            disabled={disabled}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
