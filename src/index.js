import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Navbar from 'react-bootstrap/Navbar';
import { NavigationBar } from './Navbar';
import './Navbar.css';
import logo from "./logo.svg";
// import { Form, For;mControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Nav, Navbar, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { MyNav } from './mynav';


ReactDOM.render(
  <React.StrictMode>
    {/* <div className='bar'>
      <Navbar className='bar' bg="dark" variant="dark">
        <Navbar.Brand className='brand' href="#home">
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          <p className='btn'>Website Babyy</p>
        </Navbar.Brand>
        <Form className="form-center">
          <FormControl type="text" placeholder="Look for stuff" className="search-bar" />
        </Form>
      </Navbar>
    </div> */}
    {/* <NavigationBar /> */}
    {/* <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown className='dropdown' title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className='btn' variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar> */}
    <MyNav />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
