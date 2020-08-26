import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';

import axios from 'axios';
import './style.css';
import MontaAnuncio from './MontaAnuncio';
import Cookies from 'universal-cookie';
import CreatePostButton from './CreatePost';

const cookies = new Cookies(); 

const url = "http://localhost:3000/api/anuncio"

export default class FecthPostE extends Component {


    constructor(props) {
        super(props)

        this.state = {
            lista: [],
            id: cookies.get('id'),
            verifed : !(cookies.get('id') == null)
        }
    }


    _verVentanas =async () => {
        window.onload = (event) => {
            fetch(url+"/findOne?_where=(trabajador,eq,"+this.state.id+")")
                .then(response => response.json()) 
                    .then(results=>{
                    let lista =  results;
                    console.log(lista)
                    this.setState({
                        lista: lista.filter(lista => lista.trabajador == this.state.id
                        )

                    })
                    
                })

            .catch(error => {
                console.log(error)
            })

        }
      
    }

   

    render() {
        this._verVentanas()
        return (
            
                <div >
                    <CreatePostButton/>            
                    <h2>Anuncios</h2>
                    <div className="dockerAds"    >
                                            
                        {this.state.lista.map(ad => (
                            <Col md={3} className="ads" key= {ad.id_anuncio}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <strong> Titulo: </strong> <p>{ad.titulo}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <strong> Años de experiencia: </strong> <p>{ad.experiencia}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <small> Fecha de publicacion: </small> <small>{ad.fecha_publicacion}</small>
                                        </div>
                                    </div>
                            </Col> 
                        ))}                                    
                        
                    </div>
                </div>
                
        )
    }
}




























// import React, { Component } from 'react'
// import { Container, Row, Col, Button } from 'reactstrap';
// import Cookies from 'universal-cookie';
// import axios from 'axios';
// import './style.css';
// import  CreatePostButton from './CreatePost'



// const cookies = new Cookies();

// export default class FetchPostW extends Component {



//     constructor(props) {
//         super(props);
//         this.state = {
//             anuncio: [],
//             titulo: '',
//             trabajador: '',
//             fecha: '',
//             contrato: '',
//             formacion: '',
//             descripcion: '',
//             salario: '',
//             formacionTabla: '',
//             trabajadorTabla: '',
//             trabajadorApellido: '',
//             contratoTabla: '',
//         };
//     }


//     async componentDidMount() {
//         const API_URL = "http://localhost:3000/api/anuncio/findOne?_where=(trabajador,eq,"+cookies.get('id')+")";
//         await axios.get(API_URL)
//             .then(response => {
//                 if(response.data.length!=0){
//                 const data = response.data[response.data.length-1];
//                 console.log(data)
//                         this.setState({ 
//                         titulo: data.titulo,
//                          fecha: data.fecha_publicacion, 
//                          contrato: data.contrato, 
//                          formacion: data.formacion, 
//                          descripcion: data.descripcion, 
//                          salario: data.salario,
//                          })
//                          this.mountTRabajdor();
//                         }       
//                     });


//                 // this.mountGrado();
//                 // this.mountContrato();

//             }


//     // async mountGrado() {
//     //     const API_URL = "http://localhost:3000/api/formacion/";
//     //     await axios.get(API_URL + this.state.formacion)
//     //         .then(response => {
//     //             const data = response.data;
//     //             console.log(data)
//     //             this.setState({ formacionTabla: data[0].nivel })
//     //         })
//     // }

//     // async mountContrato() {
//     //     const API_URL = "http://localhost:3000/api/contrato/";
//     //     await axios.get(API_URL + this.state.contrato)
//     //         .then(response => {
//     //             const data = response.data;
//     //             console.log(data)
//     //             this.setState({ contratoTabla: data[0].tipo })
//     //         })
//     // }

//     async mountTRabajdor() {
//         const API_URL = "http://localhost:3000/api/trabajador/findOne?_where=(id_trabajador,eq,"+cookies.get('id')+")";
//         await axios.get(API_URL)
//             .then(response => {
//                 const data = response.data[response.data.length-1];
//                 console.log(data)
//                 this.setState({
//                             trabajadorTabla: data.nombre,
//                             trabajadorApellido: data.apellidos                
//                 })
//             })
//     }





//     render() {
//         this.state.trabajador = this.props.trabajador;
//         console.log(this.state.formacionTabla)

//         //console.log(data.titulo)
//         return (





//             <Container>
//                 <Row>
//                 <CreatePostButton/>
//                     <Col className="col-8 post">

//                         <Col className="col-10 post-header">
//                             <h5 className="post-title">{this.state.titulo}</h5>
//                             <h5 className="post-worker">{this.state.trabajadorTabla} {this.state.trabajadorApellido}</h5>
//                             <Col className="post-tag">
//                                 <h6 className="tag">Javascript</h6>
//                                 <h6 className="tag">React</h6>
//                             </Col>

//                         </Col>

//                         <Col className="col-7 descript">
//                             <h5 className="post-descript">{this.state.descripcion}</h5>
//                         </Col>

//                         <Col className="col-6 post-inters">
//                             <h6 className="post-contrato">Contrato: {this.state.contrato}</h6>
//                             <h6 className="post-formacion">Formación: {this.state.formacion} </h6>
//                             <h6 className="post-salario">Salario: {this.state.salario} </h6>
//                         </Col>

//                         <Col className="col-6 post-date">
//                             <h5 className="post-fecha">{this.state.fecha}</h5>
//                         </Col>
//                     </Col>
//                 </Row>
//             </Container>
//         )
//     }
// }