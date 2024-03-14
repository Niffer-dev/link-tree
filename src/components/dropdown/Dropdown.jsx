import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="border px-4 py-2 bg-gray-200">
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 shadow-md">
          <ul>
            <li className="px-4 py-2">Option 1</li>
            <li className="px-4 py-2">Option 2</li>
            <li className="px-4 py-2">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
