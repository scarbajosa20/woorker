import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import FetchPostW from '../home/FetchPostWork';
import FecthPostE from '../home/FecthPostEmpresa';
import SignIn from '../login/signin';
import NavbarComp from '../home/Navbar';
import CrearAnucio from '../Anunvios/CrearAnuncio';
import VistaPerfil from '../PerfilTrabajador/VistaPerfil'
import VistaPerfilE from '../PerfilEmpresa/VistaPerfilE'
import AñadirExperiencia from '../PerfilTrabajador/Experiencia/AñadirExperiencia'
import ActualizarExperiencia from '../PerfilTrabajador/Experiencia/ActualizarExperiencia'
import AñadirFormacion from '../PerfilTrabajador/Formacion/AñadirFormacion'
import ActualizarFormacion from '../PerfilTrabajador/Formacion/ActualizarFormacion'



function Routes (){
    return (
        <BrowserRouter>
        <NavbarComp/>
            <Switch>               
                <Route exact path='/' component={Login} />
                <Route exact path='/home' component={FetchPostW} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/homeEmpresa' component={FecthPostE}/>
                <Route exact path='/home/CrearAnuncio' component={CrearAnucio}/>
                <Route exact path='/perfil/trabajador' component={VistaPerfil}/>
                <Route exact path='/perfil/empresa' component={VistaPerfilE}/>
                <Route exact path='/updateexp' component={ActualizarExperiencia}/>
                <Route exact path='/addexp' component={AñadirExperiencia}/>
                <Route exact path='/updateformation' component={ActualizarFormacion}/>
                <Route exact path='/addformation' component={AñadirFormacion}/>


                
                
            </Switch>
        </BrowserRouter>

    );


}

export default Routes;