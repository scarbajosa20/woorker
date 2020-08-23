import React, { Component } from 'react';
import { Link } from 'react-router-dom'


import Cabecera from './Cabecera/Cabecera'
import InfoPersonal from './PersonalInfo/InfoPersonal'
import Formacion from './Formacion/Formacion'
import Experiencia from './Experiencia/Experiencia'

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class VistaPerfil extends Component {



    render() {


        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Cabecera />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InfoPersonal id={cookies.get('id')} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Experiencia id={cookies.get('id')} />
                        </Col>
                        <Col>
                            <Link to={'/addexp'} >
                                <div className="linkEdit">
                                    Añadir Experiencia
                     </div>
                            </Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Formacion id={cookies.get('id')} />
                        </Col>

                        <Col>
                            <Link to={'/addformation'} >
                                <div className="linkEdit">
                                    Añadir Formación
                     </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

