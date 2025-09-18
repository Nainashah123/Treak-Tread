import React from 'react';

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
  className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
  className = ''
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="w-5 h-5 border border-black rounded-full appearance-none cursor-pointer relative
                   checked:border-black checked:bg-white
                   focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        style={{
          background: checked ? 'white' : 'white',
          boxShadow: checked ? 'inset 0 0 0 4px black' : 'none'
        }}
      />
      <label 
        htmlFor={id} 
        className="text-base font-medium text-black cursor-pointer leading-[1.1]"
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
