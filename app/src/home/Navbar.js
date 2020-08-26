import React, { Component } from 'react'
import { Navbar, Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Cookies from 'universal-cookie';



const cookies = new Cookies(); 

 


export default class NavbarComp extends Component {

    signOut=async()=>{
        cookies.remove('id');
        window.location.href="/";
    }

    render() {
        let verifed = !(cookies.get('id') == null)
        console.log(verifed)
        return (
            
                <Col className="col-12 position-fixed navbar">
                { verifed
                    ? <button type="button" className="btn btn-link">HOME</button>
                    : null
                }
                    { verifed 
                    ? <button type="button" className="btn btn-link" onClick={()=> this.signOut()}>CERRAR SESION</button>
                    : null
                }
                    
                    
                </Col> 
        )
    }
}