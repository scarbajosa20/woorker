import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './../../Assets/css/Generico.css'

const url = "http://localhost:3000/api/empresa/"


export default class Experiencia extends Component {


    constructor(props) {
        super(props)

        this.state = {
            objeto: [],
            id: this.props.id,
            nombre: '',
            tamaño: '',
            contacto: '',
            sede: '',
            descripcion: ''
        }

    }


    _verInfo = (e) => {
        e.preventDefault();
        axios.get(url + this.state.id)
            .then(response => {
                let objeto = response.data
                this.setState({ objeto: objeto })
                this.setState({ nombre: objeto[0].nombre })
                this.setState({ tamaño: objeto[0].tamaño })
                this.setState({ contacto: objeto[0].contacto })
                this.setState({ sede: objeto[0].sede })
                this.setState({ descripcion: objeto[0].descripcion })

                return

            })
            .catch(error => {
                console.log(error)
            })

    }



    render() {

        return (
            <div>

                {this.state.objeto.length > 0 ?
                    <div className="cajaInfo">

                        <h2>Informacion de la empresa</h2>

                        <h5>Nombre:</h5> <p>{this.state.nombre}</p>
                        <h5>Tamaño:</h5> <p>{this.state.tamaño}</p>
                        <h5>Contacto:</h5> <p>{this.state.contacto}</p>
                        <h5>Sede:</h5> <p>{this.state.sede}</p>
                        <h5>Descripción:</h5> <p>{this.state.descripcion}</p>

                        <Link to={`/updateinfo/${this.state.id}`}>
                            <div className="linkEdit">
                                Editar
                     </div>
                        </Link>

                    </div>
                    : <input type="submit" className="botonPerfil" onClick={this._verInfo} value="Ver Informacion" />}


            </div>


        )
    }
}