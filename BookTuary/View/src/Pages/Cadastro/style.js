import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgCadastro from '../../assets/imagem-cadastro.svg';


export const Conteudo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Milonga&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Asul:wght@400;700&family=Milonga&display=swap');

  display: flex; 
  justify-content: center;
  align-items: center;
  font-family: 'Asul', serif ;
  height: 100vh; 
  background-image: url(${ImgCadastro});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 

`;

export const Form = styled.form`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  border-radius: 50px;
  max-width: 200vh;
  width: 600px;
  background-color: #121111;
  border: 5px solid #121111;
  box-shadow: 0 4px 15px #121111, 0 4px 30px #121111; 
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(20px); /* Compatibilidade para navegadores WebKit */
  gap: 14vh; /* Espaço uniforme entre os elementos */    


    h1{
        display: flex;
        align-items: flex-start;
        color: #D8D8D8;
    }
`;


export const InputNome = styled.div`

  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  margin-top: -10vh;
  font-family: "Asul", serif;
  text-align: left;
  font-size: 14px;
  width: 70%;

  @media (min-width: 1800px) {
   width : 90% ;
   padding-bottom: 10px;
  }
  
  p{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #D8D8D8; 
  }

  input {
    width: 100%;
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid #6F79FF; 
    background: transparent; 
    font-size: 16px; 
    color: #909090; 
    outline: none; 
  }
  
   
    input:focus {
      border-bottom: 2px solid #404588;
    }
  
`;

export const DateNick = styled.div`

    display: flex;
    justify-content: space-between;
    width: 24vw;
    

    @media (min-width: 1200px) {
    gap: 2px;
    margin-bottom: 2vh;

  }

    @media (min-width: 1800px) {
    width : 20vw ;
    gap: 3px;
    margin-bottom: -1vh;
  }

`;

export const InputNick = styled.div`

  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  margin-top: -12vh;
  font-family: "Asul", serif;
  text-align: left;
  font-size: 14px;
  width: 70%;

  @media (min-width: 1200px) {
   margin-left: -2.5vw;
  }
  
  p{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #D8D8D8; 
  }

  input {
    width: 10vw; 
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid #6F79FF; 
    background: transparent; 
    font-size: 16px;
    color: #909090; 
    outline: none; 

    @media (min-width: 1200px) {
    width: 14vw;
  }

  @media (min-width: 1800px) {
    width: 12vw;
  }

  }
  
   
    input:focus {
      border-bottom: 2px solid #404588; 
    }

`;

export const InputDate = styled.div`
   
  display: flex;
  flex-direction: column;
  margin-top: -90px;
  font-family: "Asul", serif;
  text-align: left;
  font-size: 14px;
  width: 70%;

  @media (min-width: 1200px) {
   margin-left: 1vw;
  }

  @media (min-width: 1800px) {
    margin-top: -118px;
  }
  
  p{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #D8D8D8; 
  }

  input {
    width: 14vw;
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid #6F79FF;
    background: transparent;
    font-size: 16px;
    color: #909090;
    outline: none; 

    @media (min-width: 1800px) {
    width: 12vw;
  }

  }
  
   
    input:focus {
      border-bottom: 2px solid #404588; 
    }

`;


export const InputUm = styled.div`

display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  margin-top: -17vh;
  font-family: "Asul", serif;
  text-align: left;
  font-size: 14px;
  width: 70%;

  @media (min-width: 1800px) {
   width : 90% ;
  }
  
  p{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #D8D8D8; 
  }

  input {
    width: 100%;
    padding: 10px 0;
    border: none; 
    border-bottom: 2px solid #6F79FF;
    background: transparent; 
    font-size: 16px; 
    color: #909090;
    outline: none; 
  }
  
    
    input:focus {
      border-bottom: 2px solid #404588;
    }
`;

export const InputDois = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -12vh;
  font-family: "Asul", serif;
  text-align: left;
  font-size: 14px;
  width: 70%;

  @media (min-width: 1800px) {
   width : 90% ;
  }
  
  p{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #D8D8D8; 
  }

  input {
    width: 100%; 
    padding: 10px 0; 
    border: none; 
    border-bottom: 2px solid #6F79FF;
    background: transparent; 
    font-size: 16px; 
    color: #909090; 
    outline: none; 
  }
  

    input:focus {
      border-bottom: 2px solid #404588; 
    }
`;

export const ButtonPrimary = styled(Link)`
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Asul", serif;
  padding: 15px 60px; /* Ajusta o padding para tornar o botão mais clicável */
  margin-top: -8vh; /* Pequeno espaço entre o input e o botão */
  margin-right: 12px;
  background: linear-gradient(90deg, #9BA4FF 0%, #404588 84.67%); /* Cor de fundo do botão */
  color: white; /* Cor do texto */
  font-size: 18px;
  text-decoration: none; /* Remove o sublinhado */
  border-radius: 8px; /* Bordas arredondadas */
  cursor: pointer;
  transition: background-color 0.3s ease;

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

export const ButtonSecondary = styled(Link)`
   font-family: "Asul", serif;
   margin-top: -12vh;
   font-size: 13px;
   margin-left: 1vw;
   margin-right: 2vw;
   color: #909090;
  
  &:hover {
    color: white;
  }

  @media (min-width: 1800px) {
    margin-left: 2vw;
    margin-right: 2.7vw;
    }
`;