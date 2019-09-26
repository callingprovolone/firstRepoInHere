import React from 'react';
import { Nav, Navbar, NavLink, NavItem } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar className="colorBrown" dark expand="md">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/AcercaDe">Acerca de Nosotros</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contactar">Contactar</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/home">Home</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}