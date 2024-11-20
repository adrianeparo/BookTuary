import React from "react";
import { Container } from "./style";
import LivroImg from "../../assets/dracula.png";
import Salvar from "../../assets/salvarr.svg";
import Rating from "../Rating";
import Place from  "../../assets/Group 9.svg"

function BookInfo() {
  return (
    <Container>

      <img className="imagem" src={Place} />

    </Container>
  );
}

export default BookInfo;
