import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './../../Assets/css/Generico.css'

const url = "http://localhost:3000/api/trabajador/"


export default class Experiencia extends Component {


    constructor(props) {
        super(props)

        this.state = {
            objeto: [],
            id: this.props.id,
            nombre: '',
            apellidos: '',
            email: '',
            numero_telf: '',
            poblacion: '',
            descripcion: '',
            sexo: '',
            carnet: '',
            vehiculo: '',
            viajes: ''
        }

    }


    _verInfo = (e) => {
        e.preventDefault();
        axios.get(url + this.state.id)
            .then(response => {
                let objeto = response.data
                this.setState({ objeto: objeto })
                this.setState({ nombre: objeto[0].nombre })
                this.setState({ apellidos: objeto[0].apellidos })
                this.setState({ email: objeto[0].email })
                this.setState({ numero_telf: objeto[0].numero_telf })
                this.setState({ sexo: objeto[0].sexo })
                this.setState({ vehiculo: objeto[0].vehiculo })
                this.setState({ carnet: objeto[0].carnet })
                this.setState({ viajes: objeto[0].viajes })
                this.setState({ poblacion: objeto[0].poblacion })
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

                        <h2>Informacion Personal</h2>

                        <h5>Nombre:</h5> <p>{this.state.nombre}</p>
                        <h5>Apellidos:</h5> <p>{this.state.apellidos}</p>
                        <h5>Numero de teléfono:</h5> <p>{this.state.numero_telf}</p>
                        <h5>Correo electrónico:</h5> <p>{this.state.email}</p>
                        <h5>Población:</h5> <p>{this.state.poblacion}</p>
                        <h5>Descripción:</h5> <p>{this.state.descripcion}</p>
                        <h5>Sexo:</h5> <p>{this.state.sexo}</p>
                        <h5>Carnet de conducir:</h5> <p>{this.state.carnet}</p>
                        <h5>Vehículo própio:</h5> <p>{this.state.vehiculo}</p>
                        <h5>Disponibilidad para viajar:</h5> <p>{this.state.viajes}</p>

                        <Link to={'/updateinfo/'}>
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