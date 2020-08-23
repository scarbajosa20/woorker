import React, { Component } from 'react';
import axios from'axios';
import {Link} from 'react-router-dom'

import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const url ="http://localhost:3000/api/experiencia/";

export default class AñadirExperiencia extends Component {
    constructor(props) {
        super(props)
    

    this.state = {
        trabajador:'1',
        puesto: '',
        empresa: '',
        años:'',
        funciones:'',
    }
}

    _handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post(url, this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {

        const {puesto, empresa, años, funciones} = this.state 

        return (
            <div>

                <h2>EXPERIENCIA PROFESIONAL</h2>

                <Form onSubmit={this._handleSubmit}>
                    <Row>
                        <Col>
                            <Container>
                                <Form.Group as={Row} controlId="puesto">
                                    <Form.Label column sm="2">
                                        <b>Cargo:</b>
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="puesto" value ={puesto} placeholder={this.state.puesto} onChange={this._handleChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="empresa">
                                    <Form.Label column sm="2">
                                        <b>Empresa:</b>
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="empresa" value ={empresa} placeholder={this.state.empresa} onChange={this._handleChange}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="años">
                                    <Form.Label column sm="2">
                                        <b>Años:</b>
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="años" value ={años} placeholder={this.state.años} onChange={this._handleChange}/>
                                    </Col>
                                </Form.Group>
                            </Container>
                        </Col>

                        <Col>

                            <Form.Group as={Row} controlId="funciones">
                                <Form.Label column sm="2">
                                    <b>Funciones:</b>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control as="textarea" rows="5" name="funciones" value ={funciones} placeholder={this.state.funciones} onChange={this._handleChange}/>
                                </Col>
                            </Form.Group>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input type="submit" value="Añadir"></input>
                        </Col>
                    </Row>
                </Form>

                <Link to ={'/perfil/trabajador'}>
                    Hecho
                </Link>

            </div>

        )
    }
}