import React from 'react';
import { Route, Switch } from 'react-router';
import CadastroCategoria from '../Pages/Cadastro/Categoria';
import CadastroVideo from '../Pages/Cadastro/Video';
import Home from '../Pages/Home';

const Routes = () => (
    <>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/cadastro/video' component={CadastroVideo}/>
                <Route exact path='/cadastro/categoria' component={CadastroCategoria}/>
            </Switch>
    </>
)

export default Routes;