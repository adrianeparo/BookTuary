// CommentSectionStyles.js
import styled from "styled-components";

export const CommentsContainer = styled.div`
  width: 820px;
  height: 800px;
  overflow-y: auto;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 1200px){
    width: 550px !important;
  }

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

export const Comment = styled.div`
  height:300px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #9c9c9d;
  border-radius: 30px;

  @media (max-width: 1200px){
    height: 250px !important;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  margin-top: 3px;
`;
