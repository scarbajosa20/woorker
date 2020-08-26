import React, { Component } from 'react'
import './style.css';
import { Container, Row, Col, Button } from 'reactstrap';


export default class CreatePostButton extends Component {

    createPost= ()=>{
      
        window.location.href ='/home/CrearAnuncio'
    }


    render() {
        return (
            
            <Button className="btn btn-primary" onClick={() => this.createPost()}>Add post</Button>
            
        )
    }
}
