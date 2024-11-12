import styled from "styled-components";
import { Link } from "react-router-dom";

export const Conteudo = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Milonga&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Asul:wght@400;700&family=Milonga&display=swap');
  
  display: flex; /* Define layout flex para organizar os elementos em linha */
  justify-content: flex-end; /* Alinha o conteúdo à direita */
  height: 100vh; /* Define altura total da viewport */
  background-color: #121111; /* Cor de fundo da página */

`;

export const Imagem = styled.div`

  display: flex; /* Usa o layout flexbox */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
  width: 40vw; /* Define a largura como 50% da largura da viewport */
  height: 100vh; /* Define a altura como 100% da altura da viewport */
  position: absolute; /* Posiciona o elemento em relação à sua posição ancestral */
  left: 0; /* Posiciona o elemento na extremidade direita da tela */
  top: 0; /* Posiciona o elemento no topo da tela */

  img {
    width: 954px; /* Define a largura da imagem (ajuste conforme necessário) */
    height: 100%; /* A altura da imagem ocupa 100% do container */
    object-fit: cover; /* Faz a imagem cobrir todo o container, cortando se necessário */
    border-radius: 0px 100px 100px 0px; /* Adiciona bordas arredondadas, com um estilo específico */
  }

`;

export const Form = styled.form`
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Asul', serif; /* Fonte personalizada */
  margin-right: 25vh;
  flex-direction: column;
  padding: 30px;
  max-width: 50%;
  width: 400px;
  background-color: transparent;

  @media (min-width: 1800px) {
        margin-right: 40vh;
    }

  h1{

    font-size: 5vh;
    color: #D8D8D8;
    text-align: center; /* Alinha o texto no centro */
    margin-bottom: 20vh; /* Espaçamento entre o título e o resto do formulário */
    font-weight: 400;
    line-height: 88px; /* 183.333% */
    letter-spacing: -0.48px;

  }

 
`;


export const InputUm = styled.div`

  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  margin-top: -10vh;
  font-family: "Asul", serif;
  text-align: left;
  font-size: 14px;
  width: 100%;

  p{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #D8D8D8; /* Cor do texto */
  }

  input {
    width: 100%; /* Faz o input ocupar toda a largura disponível */
    padding: 10px 0; /* Adiciona um pouco de espaçamento interno vertical */
    border: none; /* Remove todas as bordas */
    border-bottom: 2px solid #6F79FF; /* Adiciona apenas uma borda inferior */
    background: transparent; /* Remove qualquer cor de fundo */
    font-size: 16px; /* Define o tamanho da fonte */
    color: #909090; /* Define a cor do texto */
    outline: none; /* Remove o destaque azul padrão no foco */
  }
  
    /* Estilo ao focar no input */
    input:focus {
      border-bottom: 2px solid #404588; /* Cor diferente ao focar */
    }
`;

export const InputDois = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-bottom: 20px;
  font-family: "Asul", serif;
  text-align: left;
  font-size: 14px;
  width: 100%;

  p{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #D8D8D8; /* Cor do texto */
    margin-top: 5px;
  }

  input {
    width: 100%; 
    padding: 10px 0 5px 0;
    border: none; 
    border-bottom: 2px solid #6F79FF;
    background: transparent;
    font-size: 16px; 
    color: #909090; 
    outline: none;

    &::placeholder{
      color: #909090;
      margin-top: 20;
    }
  }

    input:focus {
      border-bottom: 2px solid #404588; /* Cor diferente ao focar */
    }
`;


export const Entrar = styled(Link)`

  font-family: "Asul", serif;
  display: inline-block;
  font-weight: 400;
  margin-top: 10vh;
  padding: 12px 60px;
  background: linear-gradient(90deg, #9BA4FF 0%, #404588 84.67%); /* Cor de fundo */
  color: white; /* Cor do texto */
  font-size: 20px;
  text-align: center;
  text-decoration: none; /* Remove o sublinhado */
  border-radius: 20px; /* Bordas arredondadas */
  position: relative; /* Necessário para o posicionamento do pseudo-elemento */
  z-index: 1; /* Garante que o texto fique na frente */
  cursor: pointer;


  &:hover {
    background: linear-gradient(90deg, #404588 0%, #9BA4FF 84.67%); /* Inverte as cores do gradiente no hover */
    transform: scale(1.05); /* Faz o botão "crescer" um pouco */
  }

  &::before {
    content: '';
    position: absolute;
    border-radius: 25px; /* Mantém as bordas arredondadas */
    background: rgba(255, 255, 255, 0.3); /* Brilho suave ao redor do botão */
    z-index: -1; /* Coloca o brilho atrás do botão */
    opacity: 0; /* Inicia invisível */
    transition: opacity 0.1s ease; /* Suave transição de opacidade */
  }

  &:hover::before {
    opacity: 0.1; /* Mostra o brilho ao passar o mouse */
  }
`;

export const Esqueceu = styled(Link)`
   display: flex;
   padding-left: 32vh;
   font-family: "Asul", serif;
   margin-top: -10px;
   font-size: 12px;
   text-decoration: none;
   color: #909090;
    
  &:hover {
    color: white;
  }

  @media (min-width: 1800px) {
        padding-left: 24vh;
    }
`;

export const BotaoDois = styled(Link)`
   font-family: "Asul", serif;
   margin-top: 10px;
   font-size: 13px;
   margin-left: -5px;
   color: #909090;
  
  &:hover {
    color: white;
  }

  @media (min-width: 1800px) {
    margin-right: -3px;
    }
`;
