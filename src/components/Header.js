import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class App extends Component {
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
      <div className="App" style={bottomStyle}>
        <Navbar color="transparent" dark expand="md">
          <NavbarBrand href="/">
            <img
              alt="Home"
              width="40"
              height="40"
              src={require('../data/logo.jpg')}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://github.com/rja907/FEE-Assessment"
                  target="_blank"
                >
                  Link to this project's GitHub repository!
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const bottomStyle = { borderBottom: '2px solid #ccc', marginBottom: '5px' };

export default App;
