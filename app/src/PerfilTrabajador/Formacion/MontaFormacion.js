import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './../../Assets/css/Generico.css'

const url = "http://localhost:3000/api/formacion/"


export default class MontaFormacion extends Component {

    _delete = (e) => {
        e.preventDefault();
        axios.delete(url+this.props.linea.id_formacion)
    }

    render() {
        


        return (
            <div className="cajaInfo">
                <h5>Nivel:</h5> <p>{this.props.linea.nivel}</p>
                <h5>Estudios:</h5> <p>{this.props.linea.estudios}</p>
                <h5>Centro:</h5> <p>{this.props.linea.centro}</p>
                <h5>Años:</h5> <p>{this.props.linea.años}</p>
                <h5>Detalles:</h5> <p>{this.props.linea.detalles}</p>

                <Link to={`/updateformation/${this.props.linea.id_formacion}`}>
                <div className="linkEdit">
                     Editar
                     </div>
                </Link>

                    <input className="botonDelete" type="button" value="Eliminar" onClick={this._delete} />

            </div>
        )
    }
}