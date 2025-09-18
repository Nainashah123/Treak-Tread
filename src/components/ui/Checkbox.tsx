import React from 'react';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  className = ''
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 border border-black appearance-none cursor-pointer relative
                   checked:border-black checked:bg-white
                   focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        style={{
          background: checked ? 'white' : 'white',
          backgroundImage: checked 
            ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L6 10.293l7.146-7.147a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e")`
            : 'none',
          backgroundSize: '12px 12px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
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

export default Checkbox;
