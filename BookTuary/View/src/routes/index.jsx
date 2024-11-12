import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicial from '../pages/inicial';
import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Perfil from '../Pages/Perfil';

function AppRoutes (){
    return(    
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
    )
}

export default AppRoutes