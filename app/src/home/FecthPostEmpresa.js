import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';

import axios from 'axios';
import './style.css';
import MontaAnuncioE from './MontaAnuncioE';

const url = "http://localhost:3000/api/anuncio"

export default class FecthPostE extends Component {


    constructor(props) {
        super(props)

        this.state = {
            lista:[]
        }

    }


   async _verVentanas() {
       
      await  axios.get(url)
            .then(response => {
                let lista = response.data;
                this.setState({lista:lista})       
                console.log(this.state.lista)
                  
                 
            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {
        console.log(this.state)
        this._verVentanas();
        return (
            <div>
               
                <div>
                    <h2>Anuncios</h2>
                    
                    {
this.state.lista.map
(ventana => (
                    <div key={ventana.id_anuncio}>
                        <MontaAnuncioE linea={ventana} />
                    </div>
                ))}
                
                </div> 
            </div>


        )
    }
}