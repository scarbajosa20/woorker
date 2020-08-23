import React, { Component } from 'react'
import { Navbar, Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'


export default class NavbarComp extends Component {
    render() {
        return (
            
                <Col className="col-12 position-fixed navbar">
                    <h1 className="navbar-home-link">HOME</h1>
                  
                    <h2 className="navbar-profile-link">PROFILE</h2>
                    
                </Col> 
        )
    }
}