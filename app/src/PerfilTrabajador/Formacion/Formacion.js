import React, { Component } from 'react'
import axios from 'axios'

import './../../Assets/css/Generico.css'

import MontaFormacion from './MontaFormacion';

const url = "http://localhost:3000/api/formacion"


export default class Formacion extends Component {


    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            lista: []
        }

    }


    _verVentanas = (e) => {
        e.preventDefault();
        axios.get(url)
            .then(response => {
                let lista = response.data;
                this.setState({ lista: lista.filter(lista => lista.trabajador == this.state.id) })

                return

            })
            .catch(error => {
                console.log(error)
            })

    }



    render() {

        return (
            <div>
                
                {this.state.lista.length > 0 ?
                    <div>
                        <h2>Formación Académica</h2>
                        {this.state.lista.map(ventana => (
                            <div key={ventana.id_formacion}>
                                <MontaFormacion linea={ventana} />
                            </div>
                        ))}
                        
                    </div>
                    : <input type="submit" className="botonPerfil" onClick={this._verVentanas} value="Ver Formacion" />}
            </div>


        )
    }
}