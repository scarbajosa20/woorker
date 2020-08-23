import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import './style.css';
import './MontaAnuncio.css';

const url = "http://localhost:3000/api/anuncio/"


export default class MontaAnuncioE extends Component {

   

    render() {


        return (
            <Container>
            <Row>
                <Col className="col-6 cajaInfo">
                    <Col className="col-6 trabajadorName">
                        <h5>Trabajador:</h5> <p>{this.props.linea.trabajador}</p>
                    </Col>

                    <Col className="col-6 trabajadorTitulo">
                        <h5>Titulo:</h5> <p className="">{this.props.linea.titulo}</p>
                    </Col>

                    <Col className="col-12 postDate">
                        <h5>Fecha:</h5> <p className>{this.props.linea.fecha_publicacion}</p>
                    </Col>
                    <Col className="col-12 postDescription">
                        <h5>Descripcion:</h5> <p className="col-12 textDecrip">{this.props.linea.descripcion}</p>
                    </Col>

                    </Col>

            </Row>
        </Container>

    )
}
}