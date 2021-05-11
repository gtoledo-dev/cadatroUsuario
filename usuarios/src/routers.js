import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import ListagemUsuarios from './pages/listaUsuarios/lista.usuarios';
import CadastrarUsuarios from './pages/cadastrar/cadastrar.usuarios';
import EditarUsuarios from './pages/editar/editar.usuario';
import InserirFotos from './pages/fotos';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                
                <Route path = "/pages/listaUsuarios" exact component = {ListagemUsuarios} />
                <Route path = "/pages/cadastar" exact component = {CadastrarUsuarios}/>                
                <Route path = "/pages/editar/:idUsuario"  exact component = {EditarUsuarios}/>
                <Route path = "/pages/fotos" exact component = {InserirFotos}/>                          
            </Switch>
        </BrowserRouter>
    );
}