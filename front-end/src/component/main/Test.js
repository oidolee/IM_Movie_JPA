import React, { useState } from 'react';

function NavDropdownExample() {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <button onClick={() => handleSelect(1)}>Button 1</button>
      <button onClick={() => handleSelect(2)}>Button 2</button>

      <div>
        {selectedValue === 1 && <div>Content for Button 1</div>}
        {selectedValue === 2 && <div>Content for Button 2</div>}
      </div>
    </div>
  );
}

export default NavDropdownExample;