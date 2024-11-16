import React, { useState } from "react";
import { Conteudo, Titulo, Itens, Name, Nick, Bb, Botao, ItensContainer, Bb2 } from "./style";
import { Check } from "phosphor-react";
import Usuariophoto from "../../assets/leo.svg";
import Usuariophoto2 from "../../assets/ana.svg";


function Pessoas() {
  // Estado para controlar o status de "Seguir" ou "Seguindo"
  const [isFollowing, setIsFollowing] = useState({
    leo: false,
    ana: false,
  });

  // Função para alternar o estado ao clicar no botão
  const handleFollowClick = (name) => {
    setIsFollowing((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <Conteudo>
      <Titulo>Pessoas que talvez você conheça</Titulo>
      <ItensContainer>
        {/* Card para Leo */}
        <Itens>
          <div>
            <img src={Usuariophoto} alt="User Leo" />
          </div>
          <div>
            <Name>Leo</Name>
            <Nick>@leo3o</Nick>
          </div>
          <Bb>
            <Botao onClick={() => handleFollowClick("leo")}>
              {isFollowing.leo ? (
                <>
                  <Check size={16} /> Seguindo
                </>
              ) : (
                "Seguir"
              )}
            </Botao>
          </Bb>
        </Itens>

        {/* Card para Ana */}
        <Itens>
          <div>
            <img src={Usuariophoto2} alt="User Ana" />
          </div>
          <div>
            <Name>Ana</Name>
            <Nick>@anana</Nick>
          </div>
          <Bb2>
            <Botao onClick={() => handleFollowClick("ana")}>
              {isFollowing.ana ? (
                <>
                  <Check size={16} /> Seguindo
                </>
              ) : (
                "Seguir"
              )}
            </Botao>
          </Bb2>
        </Itens>

        <Itens>
          <div>
            <img src={Usuariophoto} alt="User Leo" />
          </div>
          <div>
            <Name>Leo</Name>
            <Nick>@leo3o</Nick>
          </div>
          <Bb>
            <Botao onClick={() => handleFollowClick("leo")}>
              {isFollowing.leo ? (
                <>
                  <Check size={16} /> Seguindo
                </>
              ) : (
                "Seguir"
              )}
            </Botao>
          </Bb>
        </Itens>

        {/* Card para Ana */}
        <Itens>
          <div>
            <img src={Usuariophoto2} alt="User Ana" />
          </div>
          <div>
            <Name>Ana</Name>
            <Nick>@anana</Nick>
          </div>
          <Bb2>
            <Botao onClick={() => handleFollowClick("ana")}>
              {isFollowing.ana ? (
                <>
                  <Check size={16} /> Seguindo
                </>
              ) : (
                "Seguir"
              )}
            </Botao>
          </Bb2>
        </Itens>
      </ItensContainer>
    </Conteudo>
  );
}

export default Pessoas;
