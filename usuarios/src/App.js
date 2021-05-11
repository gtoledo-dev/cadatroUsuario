import React from 'react';

import Inicio from './pages/paginainicial/index';

import Routes from './routers';




function App() {
    return (
        <div className = 'App'> 
            <header className = 'App-header'>
                <h1>Lista de Usuários</h1>
            </header>
            <Routes/>
        </div>
    )
}

export default App;