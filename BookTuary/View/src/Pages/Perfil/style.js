import styled from "styled-components";

export const Conteudo = styled.div`
  background: radial-gradient(
    358.07% 157.77% at 104.64% 111.11%,
    rgba(64, 69, 136, 0.7) 0%,
    rgba(16, 17, 34, 0.7) 75.82%
  );
  display: flex;
  flex-direction: row;

  .header_perfil {
    display: flex;
  }
`;

export const Imagem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 27px 30px 0px 80px;

  img {
    width: 400px;
  }
`;

export const CapaP = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 50px;
  max-height: 800px; /* Altura máxima da área visível */
  overflow-y: auto; /* Adiciona scroll vertical */
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

  img {
    width: 100%; /* Garante que a imagem ocupe a largura total */
    height: auto; /* Ajusta a proporção */
  }
`;
