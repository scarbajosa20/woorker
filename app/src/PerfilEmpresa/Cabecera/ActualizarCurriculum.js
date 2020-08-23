import React, { Component } from 'react';

import Pdf from "./../../Assets/pictures/pdf.png"

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';



export default class ActualizarCurriculum extends Component {

    render() {

        return (
            <Container>
                <Row>
                    <h1>JavaScript FullStack Developer</h1>
                </Row>
                <Row>
                    <Col>
                        <h4>Subir CV</h4>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.File id="profileImage" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}