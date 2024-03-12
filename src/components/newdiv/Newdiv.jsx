import React from 'react';

const  Newdiv = () => {
  // Function to remove the parent element
  const removeParent = (event) => {
    // Access the parent element using event.target.parentElement
    const parentElement = event.target.parentElement;
    
    // Remove the parent element from the DOM
    parentElement.remove();
  };

  return (
    <div>
      <div>
        <button onClick={removeParent}>Remove Parent</button>
      </div>
    </div>
  );
}

export default Newdiv;
