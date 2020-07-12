import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Navbar from 'react-bootstrap/Navbar';
import { NavigationBar } from './Navbar';
import './Navbar.css';
import logo from "./logo.svg";
import { Form, FormControl } from 'react-bootstrap';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Navbar bg="dark" variant="dark">
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
          <FormControl type="text" placeholder="Search" className="" />
        </Form>
      </Navbar>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
