import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Dropdown = ({ darkMode, ids, getCoinDetails }) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return(
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret size="lg" color="warning" className={ darkMode ? "dark-mode" : "" }>
      Button Dropdown
    </DropdownToggle>
      <DropdownMenu className={ darkMode ? "dark-mode" : "" }>
        {ids.map((id, index) => (
          <DropdownItem
            onClick={() => getCoinDetails(id)} 
            key={index} 
            className={ darkMode ? "dark-mode" : "" }
            style={{ fontSize: "1.2rem", padding: "6px" }}
          >
            {id}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default Dropdown;