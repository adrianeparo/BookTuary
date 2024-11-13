import styled, { css } from "styled-components";
import { MagnifyingGlass } from "phosphor-react";

export const Conteudo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5vh;
  gap: 60px;

  @media (max-width: 1200px) {
    gap: 20px !important;
  }
`;

export const Busca = styled.h1`
  input {
    width: 900px;
    height: 60px;
    flex-shrink: 0;
    background: #d6c9c9;
    border-radius: 30px;
    padding-left: 20px;
    border: transparent; /* Borda inicial leve */
    outline: none;
    transition: all 0.5s ease; /* Transição suave */

    ::placeholder {
      color: #888;
      font-size: 16px;
      opacity: 1;
    }

    &:hover {
      background: whitesmoke;
      border-color: #a0a0a0; /* Muda a cor da borda no hover */
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
    }

    &:focus {
      border-color: #4a90e2; /* Cor da borda ao focar */
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15); /* Sombra mais intensa */
    }

    
  }
`;



export const Logo = styled.h1`
  color: #d6c9c9;
  text-shadow: 0px 0px 17.052px #d6c9c9, 0px 0px 4.872px #d6c9c9;
  font-family: Milonga;
  padding: 10px;
  margin-top: 2px;

  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1200px) {
    font-size: 20px !important;
    padding: 2px 10px 2px 25px !important;
    margin-top: 12px;
  }
`;
