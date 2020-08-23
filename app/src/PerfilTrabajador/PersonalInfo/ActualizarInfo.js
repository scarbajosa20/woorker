import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const url = "http://localhost:3000/api/trabajador/";


export default class ActualizarInfo extends Component {



        state = {
            nombre: '',
            apellidos: '',
            email: '',
            numero_telf: '',
            passw: '',
            poblacion: '',
            descripcion: '',
            sexo: '',
            carnet: '',
            vehiculo: '',
            viajes: '',
        }



    // var userID = '3';

    _handleChangeNombre = (e) => {
        this.setState({ nombre: e.target.value })
    }

    _handleChangeApellidos = (e) => {
        this.setState({ apellidos: e.target.value })
    }

    _handleChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    _handleChangeTelf = (e) => {
        this.setState({ numero_telf: e.target.value })
    }

    _handleChangePassw = (e) => {
        this.setState({ passw: e.target.value })
    }

    _handleChangePob = (e) => {
        this.setState({ poblacion: e.target.value })
    }

    _handleChangeDesc = (e) => {
        this.setState({ descripcion: e.target.value })
    }

    _handleOptionChangeSexo = (e) => {
        this.setState({ sexo: e.target.value })
    }

    _handleOptionChangeCarnet = (e) => {
        this.setState({ carnet: e.target.value })
    }

    _handleOptionChangeVehiculo = (e) => {
        this.setState({ vehiculo: e.target.value })
    }

    _handleOptionChangeDispo = (e) => {
        this.setState({ viajes: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.patch(url+'1', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const { nombre, apellidos, email, numero_telf, passw, descripcion, poblacion } = this.state


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
                    <Form.Group as={Row} controlId="apellidos">
                        <Form.Label column sm="2">
                            <b>Apellidos:</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder={this.state.apellidos} name="apellidos" value={apellidos} onChange={this._handleChangeApellidos} />
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Row} controlId="email">
                        <Form.Label column sm="2">
                            <b>Email:</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder={this.state.email} name="email" value={email} onChange={this._handleChangeEmail} />
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Row} controlId="passw">
                        <Form.Label column sm="2">
                            <b>Contraseña:</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder={this.state.passw} name="passw" value={passw} onChange={this._handleChangePassw} />
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Row} controlId="numero_telf">
                        <Form.Label column sm="2">
                            <b>Teléfono:</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder={this.state.numero_telf} name="numero_telf" value={numero_telf} onChange={this._handleChangeTelf} />
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Row} controlId="poblacion">
                        <Form.Label column sm="2">
                            <b>Población</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder={this.state.poblacion} name="poblacion" value={poblacion} onChange={this._handleChangePob} />
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Row} controlId="descripcion">
                        <Form.Label column sm="2">
                            <b>Descripción:</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" rows="5" placeholder={this.state.descripcion} name="descripcion" value={descripcion} onChange={this._handleChangeDesc} />
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Row>
                        <Col>
                            <b>Sexo</b>
                        </Col>

                        <Col xs={10}>
                            <div className="radio">
                                <label>
                                    <input name="sexo" type="radio" value="Hombre" onChange={this._handleOptionChangeSexo} />
                            Hombre
                        </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input name="sexo" type="radio" value="Mujer" onChange={this._handleOptionChangeSexo} />
                            Mujer
                        </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input name="sexo" type="radio" value="Prefiero no decirlo" onChange={this._handleOptionChangeSexo} />
                            Prefiero no decirlo
                        </label>
                            </div>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <b>Carnet de conducir</b>
                        </Col>

                        <Col xs={10}>
                            <div className="radio">
                                <label>
                                    <input name="carnet" type="radio" value="Si" onChange={this._handleOptionChangeCarnet} />
                            Si
                        </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input name="carnet" type="radio" value="No" onChange={this._handleOptionChangeCarnet} />
                            No
                        </label>
                            </div>

                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <b>Vehículo própio</b>
                        </Col>

                        <Col xs={10}>
                            <div className="radio">
                                <label>
                                    <input name="vehiculo" type="radio" value="Si" onChange={this._handleOptionChangeVehiculo} />
                            Si
                        </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input name="vehiculo" type="radio" value="No" onChange={this._handleOptionChangeVehiculo} />
                            No
                        </label>
                            </div>

                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <b>Disponibilidad para viajar</b>
                        </Col>

                        <Col xs={10}>
                            <div className="radio">
                                <label>
                                    <input name="viajes" type="radio" value="Si" onChange={this._handleOptionChangeDispo} />
                            Si
                        </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input name="viajes" type="radio" value="No" onChange={this._handleOptionChangeDispo} />
                            No
                        </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input name="viajes" type="radio" value="Depende" onChange={this._handleOptionChangeDispo} />
                            Depende
                        </label>
                            </div>

                        </Col>
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