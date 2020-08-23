import React, { Component } from 'react';


import Cabecera from './Cabecera/Cabecera'
import InfoPersonal from './PersonalInfo/InfoPersonal'

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Cookies from 'universal-cookie'


const cookies = new Cookies();



export default class VistaPerfilE extends Component {



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
                            <InfoPersonal id={cookies.get('id_empre')} />
                        </Col>
                   </Row>
                </Container>

            </div>
        )
    }
}

