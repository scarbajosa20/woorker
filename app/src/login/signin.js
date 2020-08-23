import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import SignInEmpresas from './signinempresa';
import SignInTrabajadores from './signintrabajador';

export default class SignIn extends Component { 

    state = {
        nombre: '',
        apellidos: '',
        email:'',
        passw:'',
        poblacion:'',
        selectedOption: '',
        redirect : false
    }
    
    // var userID = '3';
  

    setRedirect = () => {
        this.setState({
            redirect: true
        });
    };

    _handleChange =async (e)=>{
        await this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
        console.log(this.state)
    }

    

   

   




    render() {

        const {nombre, apellidos, email, passw,  poblacion} = this.state     



        
        return (
            <div>
                <div className="dockerOption">
                    <div className="row">
                        <div className="col-md-2">
                            <input 
                            type="radio"
                            id="trabajador"
                            name="selectedOption"
                            value="trabajador"
                            onChange={this._handleChange}
                            />
                        </div>
                        <div className="col-md-2">
                            <label>Trabajador</label>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <input 
                            type="radio"
                            id="empresa"
                            name="selectedOption"
                            value="empresa"
                            onChange={this._handleChange}
                            />
                        </div>
                        <div className="col-md-2">
                            <label>Empresa</label>
                        </div>    
                    </div>

                    

                </div>
                
                {this.state.selectedOption === "empresa"
                ? <SignInEmpresas/>
                : <SignInTrabajadores/>
                }   
           </div>
        )
           

    }
}    
