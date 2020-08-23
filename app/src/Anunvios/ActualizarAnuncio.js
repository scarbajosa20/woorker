import React, { Component } from 'react';
import axios from'axios';
import {Link} from 'react-router-dom'

import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Cookies from 'universal-cookie';


const cookies = new Cookies();  

const url ="http://localhost:3000/api/anuncio/";

export default class ActualizarAnuncio extends Component {

    state = {
        titulo: '',
        fecha_publicacion: '',
        salario:'',
        contrato:'',
        formacion:'',
        descripcion:'',
        trabajador: cookies.get('id'),
    }

    _handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
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

        const {titulo, fecha_publicacion, salario, contrato, formacion, descripcion} = this.state 

        return (
            <div>

                <h2>EXPERIENCIA PROFESIONAL</h2>

                <Form onSubmit={this._handleSubmit}>
                    <Row>
                        <Col>
                            <Container>
                                <Form.Group as={Row} controlId="titulo">
                                    <Form.Label column sm="2">
                                        <b>Titulo:</b>
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="titulo" value ={titulo} placeholder={this.state.titulo} onChange={this._handleChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="fecha_publicacion">
                                    <Form.Label column sm="2">
                                        <b>Fecha_publicacion:</b>
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="fecha_publicacion" value ={fecha_publicacion} placeholder={this.state.fecha_publicacion} onChange={this._handleChange}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="salario">
                                    <Form.Label column sm="2">
                                        <b>Salario:</b>
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="salario" value ={salario} placeholder={this.state.salario} onChange={this._handleChange}/>
                                    </Col>
                                </Form.Group>
                            </Container>
                        </Col>

                        <Col>

                            <Form.Group as={Row} controlId="contrato">
                                <Form.Label column sm="2">
                                    <b>Contrato:</b>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" name="contrato" value ={contrato} placeholder={this.state.contrato} onChange={this._handleChange}/>
                                </Col>
                            </Form.Group>

                        </Col>

                        <Col>

                            <Form.Group as={Row} controlId="formacion">
                                <Form.Label column sm="2">
                                    <b>Formacion:</b>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control  type="text" name="formacion" value ={formacion} placeholder={this.state.formacion} onChange={this._handleChange}/>
                                </Col>
                            </Form.Group>

                        </Col>

                        <Col>

                            <Form.Group as={Row} controlId="descripcion">
                                <Form.Label column sm="2">
                                    <b>Descripcion:</b>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control as="textarea" rows="5" name="descripcion" value ={descripcion} placeholder={this.state.descripcion} onChange={this._handleChange}/>
                                </Col>
                            </Form.Group>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input type="submit" value="Actualitzar"></input>
                        </Col>
                    </Row>
                </Form>

                <Link to ={'/'}>
                    Hecho
                </Link> 

            </div>

        )
    }
}