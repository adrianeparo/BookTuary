import Buscar from "../../components/Buscar";
import Sidebar from "../../components/Sidebar";
import React, { useEffect } from "react";
import { Conteudo, Seguir } from "./style";
import Rating from "../../components/Rating";
import CommentSection from "../../components/Comentario";
import Pessoas from "../../components/Pessoas";
import Lqtvg from "../../components/Livroqtvg";

function Home() {
  useEffect(() => {
    document.title = "BookTuary |  Home"; // Altera o título da aba
  }, []);

  return (
    <>
      <Conteudo>
        <Sidebar />
        <div className="content-wrapper">
          <Buscar />
          <CommentSection />
        </div>

          <Seguir>
            <Lqtvg />
          </Seguir>
      </Conteudo>
    </>
  );
}

export default Home;
