import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Conteudo = styled.div`
font-family: 'Inter', sans-serif;
`;

export const Name = styled.p`
color: #FFF ;
`;

export const Nick = styled.p`
color: #75757A;
`;

export const Titulo = styled.h1`

font-size: 30px;
font-weight: 500;
color: #9c9c9d;
border-bottom: 1px solid #353535;
width: 490px;
padding-bottom: 15px;
`;

export const Itens = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
`;

export const Botao = styled.button`
border-radius: 15px;
color: #484588;
border: 1px solid #484588;
background: transparent;
width: 100px;
height: 36px;
transition: all 0.4s;
cursor: pointer;

&:hover {
    color: #000;
    background: linear-gradient(90deg, #404588 0%, #9ba4ff 84.67%);
  }
`;

