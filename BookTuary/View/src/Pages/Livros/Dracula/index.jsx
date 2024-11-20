import { Link } from "react-router-dom";
import React from "react";
import Sidebar from "../../../components/Sidebar/index";
import Buscar from "../../../components/Buscar";
import { Conteudo } from "./style";
import BookInfo from "../../../components/Livroinfo";

function DraculaLivro() {
  return (
    <Conteudo>
      <Sidebar />
      <div>
        <Buscar />
        <BookInfo />
      </div>
    </Conteudo>
  );
}

export default DraculaLivro;
