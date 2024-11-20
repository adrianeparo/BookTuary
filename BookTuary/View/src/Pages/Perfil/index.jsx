import React, { useEffect } from "react";
import { Conteudo, Imagem, CapaP } from "./style";
import Sidebar from "../../components/Sidebar";
import Buscar from "../../components/Buscar";
import Dados from "../../assets/dados.svg";
import Capa from "../../assets/Group 11.svg"

function Perfil() {
  useEffect(() => {
    document.title = "Perfil"; // Altera o título da aba
  }, []);

  return (

    <Conteudo>
      <Sidebar />
      <div>
        <div className="header_perfil"> 
        <Buscar />
        <Imagem>
            <img src={Dados} />
        </Imagem>    
        </div>
        <CapaP>
            <img src={Capa} />
        </CapaP>
      </div>
    </Conteudo> 

    


  );
}

export default Perfil;
