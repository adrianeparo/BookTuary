import Pessoas from "../Pessoas/index.jsx";
import {
  Conteudo,
  Titulo,
  Parecidos,
  Parecidos2,
  Itens,
  Itens2,
  Itens3,
  Parags,
  TituloLivro,
  ItensContainer,
  Autor,
  Paginas,
  Romance,
  Alta,
  Heroica,
  Genero,
  Conto,
  Ficcao,
  Icones,
  Icone1,
  Icone2,
} from "./style.js";
import Livro01 from "../../assets/mistborn.png";
import Livro02 from "../../assets/Otemor.png";
import Livro03 from "../../assets/Adama.png";
import Circulo from "../../assets/X.svg";
import Book from "../../assets/bookmark.svg";
import React from "react";

function Lqtvg() {
  return (
    <Conteudo>
      <Titulo>Livros que talvez você conheça</Titulo>
      <Parecidos>
        Parecidos com o que você leu: <i>O Nome do Vento</i>
      </Parecidos>
      <ItensContainer>
        <Itens>
          <img src={Livro01} />
          <Parags>
            <TituloLivro>
              Mistborn Primeira Era - O império final (vol. 1)
            </TituloLivro>
            <Autor>Brandon Sanderson</Autor>
            <Paginas>608 páginas </Paginas>
            <Genero>
              <Romance>
                <p>Romance</p>
              </Romance>

              <Alta>
                <p>Alta Fantasia</p>
              </Alta>
            </Genero>
          </Parags>
        </Itens>

        <Icones>
          <Icone1>
            <img src={Circulo} />
          </Icone1>
          <Icone2>
            <img src={Book} />
          </Icone2>
        </Icones>

        <Itens2>
          <img src={Livro02} />
          <Parags>
            <TituloLivro>
              O temor do sábio (A Crônica do Matador do Rei – Livro 2)
            </TituloLivro>
            <Autor>Patrick Rothfuss</Autor>
            <Paginas>960 páginas </Paginas>
            <Genero>
              <Romance>
                <p>Romance</p>
              </Romance>

              <Heroica>
                <p>Fantasia heroica</p>
              </Heroica>
            </Genero>
          </Parags>
        </Itens2>

        <Icones>
          <Icone1>
            <img src={Circulo} />
          </Icone1>
          <Icone2>
            <img src={Book} />
          </Icone2>
        </Icones>

        <Parecidos2>
          Parecidos com o que você leu: <i>Noites brancas</i>
        </Parecidos2>
        <Itens3>
          <img src={Livro03} />
          <Parags>
            <TituloLivro>
            A dama do cachorrinho
            </TituloLivro>
            <Autor>A. P. Tchekhov</Autor>
            <Paginas>368 páginas </Paginas>
            <Genero>
              <Conto>
                <p>Conto</p>
              </Conto>

              <Ficcao>
                <p>Ficção</p>
              </Ficcao>
            </Genero>
          </Parags>
        </Itens3>

        <Icones>
          <Icone1>
            <img src={Circulo} />
          </Icone1>
          <Icone2>
            <img src={Book} />
          </Icone2>
        </Icones>
      </ItensContainer>
      <Pessoas />
    </Conteudo>
  );
}

export default Lqtvg;
