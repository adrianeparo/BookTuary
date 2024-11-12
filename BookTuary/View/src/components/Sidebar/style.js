import styled, { css } from "styled-components";
import { CaretDown, AddressBook } from "phosphor-react";
import { Link } from "react-router-dom";

export const All = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Sbar = styled.div`
  position: relative;
  width: 290px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #16161a;
  padding: 24px;
  border-radius: 0px 50px 50px 0px;
  transition: all 0.4s;

  @media (max-width: 1200px){
    width: 240px !important;
  }
`;

export const Head = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #c1c1c1;
`;

export const Imagem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #404588;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const UserDetails = styled.div`
  ${({ isActive }) =>
    isActive &&
    css`
      display: none;
    `}
`;

export const P1 = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #757575;
  text-transform: uppercase;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.70);
  text-shadow: 0px 0px 12.499px rgba(255, 255, 255, 0.70), 0px 0px 7.142px rgba(255, 255, 255, 0.70), 0px 0px 4.166px rgba(255, 255, 255, 0.70), 0px 0px 2.083px rgba(255, 255, 255, 0.70);

  @media (max-width: 1200px){
    font-size: 16px !important;
  }
  
`;

export const Navegacao = styled.nav`
  display: flex;
  flex-direction: column; /* Organiza os itens em coluna */
  height: 100%; /* Garante que ocupe a altura total da sidebar */
`;

export const Menu = styled.div`
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #c1c1c1;

  p {
    font-size: 11px;
    font-weight: 500;
    color: #757575;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  ul li {
    list-style: none;
    margin-bottom: 5px;
  }

  span {
    flex: 1;
  }
`;

export const Menudois = styled.div`
  padding-bottom: 15px;
  margin-bottom: 20px;

  p {
    font-size: 11px;
    font-weight: 500;
    color: #757575;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  ul li {
    list-style: none;
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0; /* Remover o espaçamento inferior do último item */
    }
  }

  span {
    flex: 1;
  }
`;

export const Menutres = styled.div`
  padding-bottom: 15px;
  margin-top: auto; /* Empurra o "Conta" para o final */
  padding-top: 20px;

  p {
    font-size: 11px;
    font-weight: 500;
    color: #909090;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  ul li {
    list-style: none;
    margin-bottom: 5px;
  }

  span {
    flex: 1;
  }
`;

export const BotaoPerfil = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #A5A5A6;
  text-decoration: none;
  padding: 12px 8px;
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    color: #000;
    background: linear-gradient(90deg, #404588 0%, #9ba4ff 84.67%);
  }
`;

export const SubMenu = styled.div`
  margin-left: 20px;
  padding-left: 20px;
  padding-top: 5px;
  border-left: 1px solid #c1c1c1;

  li a {
    padding: 10px 8px;
    font-size: 12px;
  }
`;

export const BotaoSub = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #A5A5A6;
  text-decoration: none;
  padding: 12px 8px;
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    color: #000;
    background: linear-gradient(90deg, #404588 0%, #9ba4ff 84.67%);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 20;
  text-align: center;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const ModalButton = styled.button`
  padding: 8px 16px;
  background-color: #404588;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #9ba4ff;
  }
`;

export const EditInput = styled.input`
  width: 70%;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const ActionButton = styled.button`
  padding: 4px 8px;
  margin-left: 4px;
  background-color: #404588;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #9ba4ff;
  }
`;

export const RotatedCaret = styled(CaretDown)`
  transition: transform 0.3s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `}
`;
