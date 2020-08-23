import React, { Component } from 'react'

import './../../Assets/css/Foto.css'


export default class Foto extends Component {

    render() {
        return (

            <div>
                <img className="pic" src="https://picsum.photos/150/200" alt="foto de perfil" />
            </div>
        )
    }

}