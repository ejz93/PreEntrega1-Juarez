import * as React from 'react'
import NavbarItem from './NavbarItem'
import CartView from '../CartWidget/CartWidgetView';
import { Box } from '@mui/material';

const NavBar = (props) => {

  const items = ['Home', 'Products', 'About', 'Contact']

  return (
    <Box sx={{
      // margin: 0,
      justifyContent: 'space-between',
    }} >
    <nav className={props.className || "navbar navbar-expand-lg navbar-light bg-light"}>
      <div className="container-fluid">
        <p className="navbar-brand" >
          {props.navbarLogo}
        </p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {items.map((text, index) => (
              <NavbarItem key={index} text={text} />
            ))}
          </ul>
        </div>
      </div>
    <CartView />
    </nav>
      
      </Box>
  );
};

export default NavBar