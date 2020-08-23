import React, { Component } from 'react'


import Foto from './Foto'



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
                </Row>
            </Container>

        )
    }
}