import React from "react";
import Usuariophoto from "../../assets/user01.svg";
import Usuariophoto2 from "../../assets/user02.svg";
import { Titulo, Conteudo, Itens, Botao, Name, Nick } from "./style";

function Pessoas() {
  return (
    <Conteudo>
      <Titulo>Pessoas que talvez você conheça</Titulo>
      <Itens>
        <div>
          <img src={Usuariophoto2} alt="User" />
        </div>
        <div>
          <Name>Leo</Name>
          <Nick>@leo3o</Nick>
        </div>
        <div>
          <Botao>Seguir</Botao>
        </div>
      </Itens>
    </Conteudo>
  );
}

export default Pessoas;
