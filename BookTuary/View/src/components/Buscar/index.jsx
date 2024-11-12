import React from "react";
import Input from "./Search";
import { MagnifyingGlass } from "phosphor-react";
import { Conteudo, Logo} from "./style";

function Buscar() {
  return (
    <>
      <Conteudo>
        <Logo>bookTuary</Logo>
        <Input />
      </Conteudo>
    </>
  );
}

export default Buscar;
