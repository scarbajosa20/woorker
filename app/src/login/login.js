import React, { Component } from 'react';
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 
import Cookies from 'universal-cookie'



const baseUrl = "http://localhost:3000/api";
const cookies = new Cookies();  


export default class Login extends Component{
    constructor(props){
        super(props)
    this.state={
        form:{
            empresa: false,
            try: false,
            email: '',
            passw:'',
            id_trabajador : 0
        }
     }
        this.iniciarSesion = this.iniciarSesion.bind(this)
    }
   
   
 


    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        });
        console.log(this.state.form)
    }


    handleChangeEmpre= () =>{
         this.setState({
            form:{
                ...this.state.form,
                empresa : !this.state.form.empresa
            }
        })
        console.log(this.state)
    }

    iniciarSesion=async()=>{

        if(!this.state.form.empresa){
            console.log(this.state.form.email)
        var URL = baseUrl + "/trabajador/findOne?_where=(email,eq,"+this.state.form.email+")~and(passw,eq,"+this.state.form.passw+")"
        console.log(URL)
        await axios.get(URL)
        .then(response=>{
            console.log(response.data.length)
            if(response.data.length === 1){
                var respuesta = response.data[0];
                cookies.set('id',respuesta.id_trabajador,{path:'/'})
                window.location.href ="/home"
            }else{               
                this.setState({
                    form:{
                        ...this.state.form,
                        try : true,
                    }
                });
                
            }
            
            
            })
            
        .catch(error=>{
            console.log(error);
            
        })
        }else{
            var URL = baseUrl + "/empresa/findOne?_where=(email,eq,"+this.state.form.email+")~and(passw,eq,"+this.state.form.passw+")"
        console.log(URL)
        await axios.get(URL)
        .then(response=>{
            console.log(response.data.length)
            if(response.data.length === 1){
                var respuesta = response.data[0];
                cookies.set('id_empre',respuesta.id_empresa,{path:'/'})
                window.location.href ="/homeEmpresa"
            }else{               
                this.setState({
                    form:{
                        ...this.state.form,
                        try : true,
                    }
                });
                
            }
            
            
            })
            
        }
      console.log(this.state.form.try);
      
    }

    registrarse(){
        window.location.href="/signin"
    }




    render() {
        return (
            <div className= 'containerPrincipal'>
                <div className='containerSecundario'>
                    <label>Usuario:     </label>
                    <br/>
                    <input
                    type= "text"
                    className= 'form-control' 
                    name = 'email'
                    onChange={this.handleChange}
                    />
                    <br/>
                    <label>Contraseña: </label>
                    <br/>
                    <input
                    type="password"
                    className='form-control'
                    name = 'passw'
                    onChange={this.handleChange}
                    />
                   {this.state.form.try
                   ? <small> Usuario y/o contraseña incorrectos </small>
                   : null
                   
                   }
                   <label>¿Eres empresa?</label>
                   <input
                   type="checkbox"
                   className='form-control'
                   name="empresa"
                   onChange={this.handleChangeEmpre}
                   />
                    <br/>
                    <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Inciar sesion</button>
                    <br/>
                   <button className="btn btn-secondary" onClick={()=> this.registrarse()}>registrarse</button>
                </div>
            </div>
        )
    }     
}