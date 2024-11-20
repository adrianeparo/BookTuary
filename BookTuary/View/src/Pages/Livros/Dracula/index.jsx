import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Sidebar from "../../../components/Sidebar/index";
import Buscar from "../../../components/Buscar";
import { Conteudo } from "./style";
import BookInfo from "../../../components/Livroinfo";

function DraculaLivro() {

  useEffect(() => {
    document.title = "Livro | Dracula"; // Altera o título da aba
  }, []);

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
