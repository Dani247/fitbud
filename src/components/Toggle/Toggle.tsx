// components/ToggleSwitch.jsx or ToggleSwitch.tsx if using TypeScript
import React, { useState } from 'react';

interface ToggleSwitchProps {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange, checked }) => {

  const toggle = () => {
    const newChecked = !checked;
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        checked={checked}
        onChange={toggle}
      />
      <label
        htmlFor="toggle"
        className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${checked ? 'bg-green-400' : ''}`}
      ></label>
    </div>
  );
};

export default ToggleSwitch;
