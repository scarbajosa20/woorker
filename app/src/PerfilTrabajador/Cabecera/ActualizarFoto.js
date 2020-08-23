import React, { Component } from 'react'

import './../../Assets/css/Foto.css'

import { Form } from 'react-bootstrap';

export default class ActualizarFoto extends Component {

    render() {
        return (

            <div>
                <img className="pic" src="https://picsum.photos/150/200" />
                <Form>
                    <Form.Group>
                        <Form.File id="profileImage"/>
                    </Form.Group>
                </Form>
            </div>
        )
    }

}