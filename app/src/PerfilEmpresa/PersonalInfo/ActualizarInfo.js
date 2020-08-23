import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const url = "http://localhost:3000/api/empresa/";


export default class ActualizarInfo extends Component {



        state = {
            nombre: '',
            tamaño: '',
            contacto: '',
            sede: '',
            descripcion: ''
        }



    // var userID = '3';

    _handleChangeNombre = (e) => {
        this.setState({ nombre: e.target.value })
    }

    _handleChangeTamaño = (e) => {
        this.setState({ tamaño: e.target.value })
    }

    _handleChangeContacto = (e) => {
        this.setState({ contacto: e.target.value })
    }

    _handleChangeSede = (e) => {
        this.setState({ sede: e.target.value })
    }

    _handleChangeDescripcion = (e) => {
        this.setState({ descripcion: e.target.value })
    }


    _handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.patch(url+this.props.match.params.id, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const { nombre, tamaño, sede, contacto, descripcion } = this.state


        return (
            <div>

                <h2>INFORMACIÓN PERSONAL</h2>

                <Form onSubmit={this._handleSubmit}>
                    <Form.Group as={Row} controlId="nombre">
                        <Form.Label column sm="2">
                            <b>Nombre:</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder={this.state.nombre} name="nombre" value={nombre} onChange={this._handleChangeNombre} />
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Row} controlId="tamaño">
                        <Form.Label column sm="2">
                            <b>Tamaño:</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder={this.state.tamaño} name="tamaño" value={tamaño} onChange={this._handleChangeTamaño} />
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Row} controlId="contacto">
                        <Form.Label column sm="2">
                            <b>Contacto:</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder={this.state.contacto} name="contacto" value={contacto} onChange={this._handleChangeContacto} />
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Row} controlId="sede">
                        <Form.Label column sm="2">
                            <b>Sede:</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder={this.state.sede} name="sede" value={sede} onChange={this._handleChangeSede} />
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Row} controlId="descripcion">
                        <Form.Label column sm="2">
                            <b>Descripción:</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" rows="5" placeholder={this.state.descripcion} name="descripcion" value={descripcion} onChange={this._handleChangeDescripcion} />
                        </Col>
                    </Form.Group>

                    <Row>
                        <Col>
                            <input type="submit" value="Actualitzar"></input>
                        </Col>
                    </Row>
                   
                </Form>

                <Link to ={'/perfil/empresa'}>
                    Hecho
                </Link>
            </div>

        )

    }
}