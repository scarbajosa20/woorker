import React, { Component } from 'react';

//Components
import ActualizarCabecera from './Cabecera/ActualizarCabecera';
import ActualizarInfo from './PersonalInfo/ActualizarInfo';
import ActualizarExperiencia from './Experiencia/ActualizarExperiencia';
import ActualizarFormacion from './Formacion/ActualizarFormacion';
import VistaPerfil from './VistaPerfil'

import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


export default class ActualizarTodo extends Component {

    render() {

        return (

            <Container>
                <Row>
                    <Col>
                        <ActualizarCabecera />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ActualizarInfo />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ActualizarExperiencia />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ActualizarFormacion />
                    </Col>
                </Row>
            </Container>

        )
    }
}
