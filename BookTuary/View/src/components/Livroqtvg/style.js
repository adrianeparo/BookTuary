import styled from "styled-components";

export const Conteudo = styled.div`
  font-family: "Inter", sans-serif;
`;

export const Titulo = styled.h1`
  font-size: 27px;
  font-weight: 500;
  color: #9c9c9d;
  border-bottom: 1px solid #353535;
  width: 500px;
  padding-bottom: 15px;
`;

export const Parecidos = styled.p`
  color: whitesmoke;
  padding: 20px 0px 0px 0px;

  i {
    color: #9c9c9d;
  }
`;

export const Parecidos2 = styled.p`
  color: whitesmoke;
  padding: 5px 0px 0px 0px;

  i {
    color: #9c9c9d;
  }
`;

export const Itens = styled.div`
  display: flex;
  padding: 15px 25px 20px 50px;
  border-bottom: 1px solid #353535;
  width: 500px;

  img {
    width: 100px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const Itens2 = styled.div`
  display: flex;
  padding: 5px 25px 20px 50px;
  border-bottom: 1px solid #353535;
  width: 500px;

  img {
    width: 100px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const Itens3 = styled.div`
  display: flex;
  padding: 15px 25px 25px 50px;

  img {
    width: 100px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const Parags = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TituloLivro = styled.p`
  color: whitesmoke;
  font-size: 16px;
  width: 330px;
  padding: 10px 15px 15px 15px;
`;

export const Autor = styled.p`
  color: whitesmoke;
  font-size: 16px;
  width: 330px;
  padding: 10px 15px 0px 15px;
`;

export const Paginas = styled.p`
  color: #9c9c9d;
  font-size: 14px;
  width: 330px;
  padding: 0px 0px 0px 15px;
`;

export const Genero = styled.div`
  flex-direction: row;
`;

export const Romance = styled.button`
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 10px;
  border-color: transparent;
  font-size: 12px;
  color: whitesmoke;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: #440909;
  width: 100px;
  height: 22px;
`;

export const Alta = styled.button`
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 10px;
  border-color: transparent;
  font-size: 12px;
  color: whitesmoke;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: #528840;
  width: 100px;
  height: 22px;
`;

export const Heroica = styled.button`
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 10px;
  border-color: transparent;
  font-size: 12px;
  color: whitesmoke;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: #884040;
  width: 120px;
  height: 22px;
`;

export const Ficcao = styled.button`
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 10px;
  border-color: transparent;
  font-size: 12px;
  color: whitesmoke;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: #4B314E;
  width: 80px;
  height: 22px;
`;

export const Conto = styled.button`
  margin-top: 25px;
  margin-left: 10px;
  border-radius: 10px;
  border-color: transparent;
  font-size: 12px;
  color: whitesmoke;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: #4B4D61;
  width: 80px;
  height: 22px;
`;

export const Icones = styled.div`
  display: flex;
  margin-left: 430px;
  margin-top: -45px;
  margin-bottom: 30px;
  gap: 5px;
`;

export const Icone1 = styled.div`
  img {
    margin-top: 1px;
    width: 26px;
    cursor: pointer;

    &:hover {
      background: #9ba4ff;
      border-radius: 90px;
    }
  }
`;
export const Icone2 = styled.div`
  img {
    margin-top: 3px;
    width: 15px;
    cursor: pointer;
  }
`;

export const ItensContainer = styled.div`
  max-height: 560px; /* Altura fixa para o contêiner */
  width: 500px;
  overflow-y: auto; /* Scroll vertical */
  padding-right: 10px; /* Opcional: adiciona espaço à direita */
  cursor: pointer;

  /* Estilização do scroll */
  &::-webkit-scrollbar {
    width: 0px; /* Largura da barra de rolagem */
    color: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Fundo da barra de rolagem transparente */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
  }
`;
