import React, { Component } from 'react';

import Pdf from "./../../Assets/pictures/pdf.png"

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';




export default class Curriculum extends Component {

    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <img src={Pdf} alt="Imagen"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}