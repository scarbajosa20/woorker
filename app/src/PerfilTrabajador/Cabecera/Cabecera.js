import React, { Component } from 'react'


import Foto from './Foto'
import Curriculum from './Curriculum'


import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class Cabecera extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Foto />
                    </Col>
                    <Col xs={7}>
                        <Curriculum />
                    </Col>
                </Row>
            </Container>

        )
    }
}