import React, { useState } from 'react';

function Dropdown() {
  const [dropdowns, setDropdowns] = useState([]);

  const addDropdown = () => {
    const newDropdowns = [...dropdowns];
    newDropdowns.push({ selectedOption: '', inputValue:'' });
    setDropdowns(newDropdowns);
    console.log(newDropdowns);
  };

  const handleDropdownChange = (index, e, field) => {
    const { value } = e.target;
    const newDropdowns = [...dropdowns];
    if(field === 'logo'){
      newDropdowns[index].selectedOption = value;
    }else if(field === 'link'){
      newDropdowns[index].inputValue = value
    }
    setDropdowns(newDropdowns);
  };

  const removeDropdown = (index) => {
    const newDropdowns = [...dropdowns];
    newDropdowns.splice(index, 1);
    setDropdowns(newDropdowns);
  };

  return (
    <div>
      <button onClick={addDropdown}>Add Dropdown</button>
      {dropdowns.map((dropdown, index) => (
        <div key={index}>
          <select
            value={dropdown.selectedOption}
            onChange={(e) => handleDropdownChange(index, e, 'logo')}
          >
            <option value="">Select an option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <button onClick={() => removeDropdown(index)}>Remove</button>
          <p>Selected Option: {dropdown.selectedOption}</p>
          <input type="text"
          value={dropdown.inputValue}
          onChange={(e) => handleDropdownChange(index, e, 'link')}
           className='border' />
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
