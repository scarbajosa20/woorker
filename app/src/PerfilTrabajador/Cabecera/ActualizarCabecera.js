import React, { Component } from 'react'


import ActualizarFoto from './ActualizarFoto'
import ActualizarCurriculum from './ActualizarCurriculum'


import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class Cabecera extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ActualizarFoto />
                    </Col>
                    <Col xs={7}>
                        <ActualizarCurriculum />
                    </Col>
                </Row>
            </Container>

        )
    }
}