import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import { Nav, Navbar, Form, FormControl, NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import './mynav.css';

function handleClick () {
    console.log('Help meeee');
    // return (
    //     <NavDropdown className='dropdown' title="Dropdown" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //     </NavDropdown>
    // );
}

export function MyNav () {
    let thing = <p></p>;
    return(
        <>
        <div className='my-nav'>
            <Dropdown>
                <Dropdown.Toggle className='img-drop' bsPrefix='' raised='false' id="img-dropdown">
                    <img
                        alt=""
                        draggable='false'
                        src={logo}
                        width="50"
                        height="50"
                        onClick={() => handleClick()}
                        className="d-inline-block align-top logo"
                    />
                </Dropdown.Toggle>

                <Dropdown.Menu className='menu'>
                    <Dropdown.Item className='menu-option' href="#/action-1" >Action</Dropdown.Item>
                    <Dropdown.Item className='menu-option' href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item className='menu-option' href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p className='web-title d-sm-none d-lg-block'>This is a Website</p>
            {/* <p className='web-title-small d-sm-block d-lg-none'>This is a Website</p> */}
            <Form inline className='search-set'>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button className='btn' variant="outline-success" >Search</Button>
            </Form>
        </div>
        <div className='text-row'>
            <p className='page-text'>
                Hello this is some website text that I have written to test for proper text wrapping on the page
            </p>
            <p className='page-text'>
                Hello this is some website text that I have written to test for proper text wrapping on the page
            </p>
            <p className='page-text'>
                Hello this is some website text that I have written to test for proper text wrapping on the page
            </p>
        </div>
        </>
    );
}