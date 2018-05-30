import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import {  
  Navbar,
  Nav,
} from "react-bootstrap";

// import css
import "./NavBar.scss";

class NavBar extends Component {
  state = {};

  render() {
    return (      
      <Fragment>         
        <Navbar fixedTop className="top_navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <div className="top_logo_name">
                  My Gallery
                </div>
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <Navbar.Text>
              <NavLink to="/task_one" className="nav_bar">
                Task One
              </NavLink> 
            </Navbar.Text>
            <Navbar.Text>
              <NavLink to="/task_two" className="nav_bar">
                Task Two
              </NavLink> 
            </Navbar.Text>
          </Nav>          
        </Navbar>
      </Fragment>    
    );
  }
};

export default NavBar;
