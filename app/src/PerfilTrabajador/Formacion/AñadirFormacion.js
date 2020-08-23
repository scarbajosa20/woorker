import React, { Component } from 'react';
import axios from'axios';
import {Link} from 'react-router-dom'

import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


const url ="http://localhost:3000/api/formacion/";

export default class AñadirFormacion extends Component {

    state = {
        trabajador:'1',
        nivel: '',
        estudios: '',
        centro:'',
        años:'',
        detalles:''
    }

    _handleOptionChange = (e) => {
        this.setState({nivel: e.target.value })
    }

    _handleChangeEstudios = (e) => {
        this.setState({estudios: e.target.value })
    }

    _handleChangeCentro = (e) => {
        this.setState({centro: e.target.value })
    }

    _handleChangeAños = (e) => {
        this.setState({años: e.target.value })
    }

    _handleChangeDetalles = (e) => {
        this.setState({detalles: e.target.value })
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

        const {estudios, centro, años, detalles} = this.state         

        return (
            <div>

                <h2>FORMACIÓN ACADÉMICA</h2>

                <Form onSubmit={this._handleSubmit}>

                <Row>
                        <Col>
                        <b>Nivel</b>
                        </Col>

                        <Col xs={10}>
                            <div className="radio">
                                <label>
                                    <input name="nivel" type="radio" value="ESO" onChange={this._handleOptionChange}/>
                            ESO
                        </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input name="nivel" type="radio" value="Bachillerato" onChange={this._handleOptionChange}  />
                            Bachillerato
                        </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input name="nivel" type="radio" value="CFGM" onChange={this._handleOptionChange}  />
                            CFGM
                        </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input name="nivel" type="radio" value="CFGS" onChange={this._handleOptionChange}  />
                            CFGS
                        </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input name="nivel" type="radio" value="Grado Universitario" onChange={this._handleOptionChange}  />
                            Grado Universitario
                        </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input name="nivel" type="radio" value="Master/Postgrado" onChange={this._handleOptionChange}  />
                            Master/Postgrado
                        </label>
                            </div>

                            <div className="radio">
                                <label>
                                    <input name="nivel" type="radio" value="Doctorado" onChange={this._handleOptionChange}  />
                            Doctorado
                        </label>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container>


                                <Form.Group as={Row} controlId="estudios">
                                    <Form.Label column sm="2">
                                        <b>Estudios:</b>
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" value={estudios} placeholder={this.state.estudios} onChange={this._handleChangeEstudios} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="centro">
                                    <Form.Label column sm="2">
                                        <b>Centro:</b>
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" value={centro} placeholder={this.state.centro} onChange={this._handleChangeCentro} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="años">
                                    <Form.Label column sm="2">
                                        <b>Años:</b>
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" value={años} placeholder={this.state.años} onChange={this._handleChangeAños} />
                                    </Col>
                                </Form.Group>
                            </Container>
                        </Col>
                        <Col>
                            <Form.Group as={Row} controlId="detalles">
                                <Form.Label column sm="2">
                                    <b>Detalles:</b>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control as="textarea" rows="5" value={detalles} placeholder={this.state.detalles} onChange={this._handleChangeDetalles} />
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