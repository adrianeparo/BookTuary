import styled from "styled-components";
import { Link } from "react-router-dom";

export const Conteudo = styled.div`
  background: linear-gradient(270deg, #131213 0%, #27294d 100%);
  display: flex;
  flex-direction: row;
`;

export const ContainerInferior = styled.div`
  display: flex;
  flex-direction: column; /* Empilha LivroQ sobre Seguir */
  align-items: flex-start; /* Alinha os itens ao início */
  padding: 20px; /* Espaçamento geral */
  gap: 10px; /* Espaçamento entre LivroQ e Seguir */
`;

export const Seguir = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px 0px 0px 60px;
`;
