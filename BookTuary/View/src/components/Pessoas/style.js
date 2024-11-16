import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Conteudo = styled.div`
  font-family: "Inter", sans-serif;
`;

export const Name = styled.p`
  color: #fff;
  margin-top: 16px;
  padding: 0px;
`;

export const Nick = styled.p`
  color: #75757a;
  font-size: 16px;
  padding: 0px;
`;

export const Titulo = styled.h1`
  font-size: 27px;
  font-weight: 500;
  color: #9c9c9d;
  border-bottom: 1px solid #353535;
  width: 500px;
  padding-bottom: 15px;
  padding-top: 20px;
`;

export const Itens = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  padding: 20px 0px 0px 20px;
`;

export const Botao = styled.button`
  border-radius: 16px;
  color: #484588;
  border: 1px solid #484588;
  background: transparent;
  width: 110px;
  font-size: 15px;
  font-weight: 560;
  height: 40px;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    color: #000;
    background: linear-gradient(90deg, #404588 0%, #9ba4ff 84.67%);
  }
`;

export const Bb = styled.div`
display: flex;
padding: 13px 0px 0px 150px;

`;

export const Bb2 = styled.div`
display: flex;
padding: 13px 0px 0px 144px;

`;

export const ItensContainer = styled.div`
  max-height: 190px; /* Altura fixa para o contêiner */
  width: 500px;
  overflow-y: auto; /* Scroll vertical */
  padding-right: 10px; /* Opcional: adiciona espaço à direita */
  cursor: pointer;

    /* Estilização do scroll */
    &::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
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