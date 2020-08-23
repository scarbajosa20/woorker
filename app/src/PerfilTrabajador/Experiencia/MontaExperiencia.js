import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './../../Assets/css/Generico.css'

const url = "http://localhost:3000/api/experiencia/"


export default class MontaExperiencia extends Component {

    _delete = (e) => {
        e.preventDefault();
        axios.delete(url+this.props.linea.id_experiencia)
    }

    render() {


        return (
            <div className="cajaInfo">
                <h5>Puesto:</h5> <p>{this.props.linea.puesto}</p>
                <h5>Empresa:</h5> <p>{this.props.linea.empresa}</p>
                <h5>Años:</h5> <p>{this.props.linea.años}</p>
                <h5>Funciones:</h5> <p>{this.props.linea.funciones}</p>

                <Link to={`/updateexp/${this.props.linea.id_experiencia}`}>
                <div className="linkEdit">
                     Editar
                     </div>
                </Link>
                <input className="botonDelete" type="button" value="Eliminar" onClick={this._delete} />

            </div>
        )
    }
}