import React, {useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from '../../styles/main/Test.css'

function NavDropdownExample() {
  const [displayOn , setdisplayOn] = useState(true);


  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  const selectRegion = (e) => {
    console.log(e.target.value)
  }

  return ( 
    <div>
      <select onChange={selectRegion}>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
      <ul>
        <li id='region_1'>1</li>
        <li id='region_2' className={`disPlayOff ${style.disPlayOff}`}>2</li>
      </ul>

    </div>
    // <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
    //   <Nav.Item>
    //     <Nav.Link eventKey="1" href="#/home">
    //       NavLink 1 content
    //     </Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="2" title="Item">
    //       NavLink 2 content
    //     </Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="3" disabled>
    //       NavLink 3 content
    //     </Nav.Link>
    //   </Nav.Item>
    //   <NavDropdown title="Dropdown" id="nav-dropdown">
    //     <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
    //     <NavDropdown.Divider />
    //     <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
    //   </NavDropdown>
    // </Nav>
  );
}

export default NavDropdownExample;