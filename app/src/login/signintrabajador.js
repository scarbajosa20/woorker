import React, { Component } from 'react';
import axios from'axios';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie'


const cookies = new Cookies();  


export default class SignInTrabajadores extends Component {

    state = {
        nombre: '',
        email:'',
        passw:'',
        apellidos:'',
       
    }


    _handleChange =async (e)=>{
        await this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
        console.log(this.state)
    }


    _handleSubmit = (e) => {
        
        const url ="http://localhost:3000/api/trabajador/";
        e.preventDefault();
        console.log(this.state);
        axios.post(url, this.state)
        .then(response => {
            console.log(response)
            axios.get(url+"findOne?_where=(email,eq,"+this.state.email+")")
            .then(response => {
                cookies.set('id',response.data[0].id_trabajador, {path :'/'});
                window.location.href ='/home';
            });
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        
    

  return ( 
    <div className="dockerPrincipal">                
        <div className="row">
            <div className="col-md-3">
                <label>Nombre:</label>
            </div>
            <br/>
            <div className="col-md-9">
                <input
                type= "text"
                className="form-control"
                name = "nombre"
                onChange={this._handleChange}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <label>Apellidos:      </label>
            </div>
            <br/>
            <div className="col-md-9">
                <input
                type= "text"
                className="form-control"
                name = "apellidos"
                onChange={this._handleChange}
                />
            </div>    
        </div>
        <div className="row">
            <div className="col-md-3">
                <label>Email:      </label>
            </div>
            <br/>
            <div className="col-md-9">
                <input
                type= "text"
                className="form-control"
                name = "email"
                onChange={this._handleChange}
                />
            </div>    
        </div>
        <div className="row">
            <div className="col-md-3">
                <label>Contraseña:      </label>
            </div>
            <br/>
            <div className="col-md-9">
                <input
                type= "password"
                className="form-control"
                name = "passw"
                onChange={this._handleChange}
                />
            </div>    
        </div>
        <br/>
        <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>¡Registrarse!</button>                
    </div>
                )
                }
                }