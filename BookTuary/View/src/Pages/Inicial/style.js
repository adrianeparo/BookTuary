import styled from "styled-components";
import { Link } from "react-router-dom";


export const HomeC = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Milonga&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Asul:wght@400;700&family=Milonga&display=swap');

`;

export const Imagem = styled.div`
  display: flex; /* Usa o layout flexbox */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
  width: 45vw; /* Define a largura como 50% da largura da viewport */
  height: 100vh; /* Define a altura como 100% da altura da viewport */
  position: absolute; /* Posiciona o elemento em relação à sua posição ancestral */
  right: 0; /* Posiciona o elemento na extremidade direita da tela */
  top: 0; /* Posiciona o elemento no topo da tela */

  img {
    width: 954px; /* Define a largura da imagem (ajuste conforme necessário) */
    height: 100%; /* A altura da imagem ocupa 100% do container */
    object-fit: cover; /* Faz a imagem cobrir todo o container, cortando se necessário */
    border-radius: 100px 0px 0px 100px; /* Adiciona bordas arredondadas, com um estilo específico */
  }

`;


export const Content = styled.div`
  margin-left: 35px;
  font-family: "Asul", serif;
  display: flex; /* Usa flexbox para organizar os itens dentro da div */
  flex-direction: column; /* Alinha os itens em coluna */
  align-items: flex-start; /* Alinha os itens à esquerda */
  padding: 50px; /* Adiciona um espaçamento interno (padding) na div */
  height: 100%; /* Garante que a div ocupe toda a altura disponível */

`;

// Estiliza o h1 Logo
export const Logo = styled.h1`

  margin-top: 20px; /* Espaçamento acima do Logo */
  margin-bottom: 50px; /* Espaçamento abaixo do Logo para o próximo conteúdo */
  font-size: 23px; /* Tamanho da fonte do Logo */
  font-weight: bold; /* Define o peso da fonte como negrito */
  color: #D6C9C9;/* Cor do texto (ajuste conforme necessário) */
  text-align: left; /* Alinha o texto à esquerda */
  width: 100%; /* Garante que o h1 ocupe toda a largura disponível */
  text-shadow: 0px 0px 17.052px #D6C9C9, 0px 0px 4.872px #D6C9C9;
  font-family: "Milonga", serif;
  font-style: normal;
  line-height: normal;
`;


export const TextSection = styled.div`
  h2 {
    font-family: "Asul", serif;
    margin-top: 60px;
    color: rgba(247, 246, 243, 0.70);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Asul;
    font-size: 85px;
    font-style: normal;
    font-weight:200;
    line-height: 88px; /* 97.778% */
    letter-spacing: -0.9px;
    width: 700px;

    @media (min-width: 1800px) {
    font-size: 6vw; /* Aumenta a fonte em telas maiores */
    width: 800px;
    margin-top: 10vh;
    margin-bottom: 5vh;
    line-height: 10.8vh; /* 97.778% */

  }
}

    h3 {
      margin-top: 35px;
      font-size: 15px;
      color: #909090;
      font-weight: 20;
      width: 550px; 
    }


      @media (min-width: 1800px) {
        font-size: 1vw;
        margin-top: 8vh;
        width: 700px;
    }

   

`;


export const ButtonPrimary = styled(Link)`
  font-family: "Asul", serif;
  display: inline-block;
  font-weight: 400;
  margin-top: 20px;
  padding: 22px 60px;
  background-color: transparent; /* Cor de fundo */
  color: white; /* Cor do texto */
  font-size: 20px;
  text-align: center;
  text-decoration: none; /* Remove o sublinhado */
  border-radius: 20px; /* Bordas arredondadas */
  position: relative; /* Necessário para o posicionamento do pseudo-elemento */
  z-index: 1; /* Garante que o texto fique na frente */
  cursor: pointer;

  /* Pseudo-elemento para criar a borda com blur */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px; /* Bordas arredondadas */
    border: 3px solid #6E78E9; /* Cor da borda */
    filter: blur(1.5px); /* Aplica o efeito de desfoque na borda */
    z-index: -1; /* Coloca o pseudo-elemento atrás do texto */

  }

  &:hover::before {
    filter: blur(6px); /* Aumenta o desfoque no hover */

  }

  &:hover {
    background: linear-gradient(90deg, #9BA4FF 0%, #404588 84.67%);
    transition: background-color 0.3s ease;
  }
    

`;

export const ButtonSecondary = styled(Link)`
   font-family: "Asul", serif;
   margin-top: 10px;
   font-size: 12px;
   margin-left: 21.5px;
   color: #909090;
  
  &:hover {
    color: white;
  }
`;
