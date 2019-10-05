import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

let Logo = require("./Logo.png");


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="colorDarkBlue" dark expand="md">
          <NavbarBrand href="/home"><img className="img-responsive"src={Logo}></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Home">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Visas">Vivir y trabajar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Negocios">Oportunidad</NavLink>
              </NavItem>
              <NavLink href="/NegociosUsa">Tu negocio a USA</NavLink>
              <NavItem>
                <NavLink href="/Inversion">Inversion</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

