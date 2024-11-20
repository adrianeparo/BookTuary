import React from "react";
import Input from "./Search";
import { MagnifyingGlass } from "phosphor-react";
import { Conteudo, Logo} from "./style";
import { Link } from 'react-router-dom';

function Buscar() {
  return (
    <>
      <Conteudo>
        <Logo to="/home">bookTuary</Logo>
        <Input />
      </Conteudo>
    </>
  );
}

export default Buscar;
