import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import books from "./books.json";
import { useNavigate } from "react-router-dom"; // Importa o hook de navegação

const Input = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const searchBoxRef = useRef(null);
  const navigate = useNavigate(); // Inicializa o hook de navegação

  // Atualiza a lista de livros filtrados sempre que o termo de busca mudar
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBooks([]);
    } else {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target) &&
        !event.target.closest(".pesquisa") // Impede que o clique fora da pesquisa limpe a pesquisa
      ) {
        setSearchTerm(""); // Limpa o termo de pesquisa quando clicar fora
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // Lidar com a navegação ao pressionar "Enter"
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setFilteredBooks(books); // Mostra todos os livros ao pressionar Enter
    }
  };

  // Lidar com o clique em um livro e navegar para a URL correspondente
  const handleBookClick = (url) => {
    console.log("Navegando para:", url); // Verifica a URL que está sendo clicada
    navigate(url); // Redireciona para a rota configurada no JSON
  };

  return (
    <StyledWrapper filteredBooks={filteredBooks}>
      <div className="searchBox" ref={searchBoxRef}>
        <input
          className="searchInput"
          type="text"
          placeholder="Buscar por livros"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="pesquisa">
        {filteredBooks.length > 0 && (
          <ul>
            {filteredBooks.map((book) => (
              <li key={book.id} onClick={() => handleBookClick(book.url)}>
                <img
                  src={book.image}
                  alt={`Capa do livro ${book.title}`}
                  style={{ width: "90px", height: "140px" }}
                />
                <div>
                  <h1>{book.title}</h1>
                  <h2>{book.author}</h2>
                  <br />
                  <p>{book.paginas} páginas</p>
                  <p>Idioma: {book.idioma}</p>
                  <br />
                  <p>{book.year}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .searchBox {
    display: flex;
    width: 690px;
    max-width: 100%;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    background: #16161a;
    border: 1px solid #404588;
    border-radius: 50px;
    position: relative;

    @media (max-width: 1200px) {
      width: 100%;
      height: 55px;
    }
  }

  .pesquisa {
    flex-direction: column;
  }

  ul {
    flex-direction: column;
    position: absolute;
    top: 120px;
    width: 680px;
    height: 360px;
    background: #1f1f1f;
    border-radius: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    list-style: none;
    padding: 10px;
    margin: 0;
    z-index: 1;
    overflow-y: auto;
    max-height: 500px;

    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }

  ul::-webkit-scrollbar {
    width: 8px;
  }

  ul::-webkit-scrollbar-track {
    background: transparent;
  }

  ul::-webkit-scrollbar-thumb {
    background: transparent;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    padding: 10px;
    row-gap: 20px;
    border-bottom: 1px solid #333;
    transition: background 0.2s ease;
    cursor: pointer;

    &:hover {
      background: #292929;
      border-radius: 15px;
    }

    &:last-child {
      border-bottom: none;
    }

    a {
      text-decoration: none;
      color: white;
      display: flex;
      align-items: flex-start;
      gap: 15px;
      width: 100%;
    }

    img {
      width: 80px;
      height: 120px;
      border-radius: 8px;
      object-fit: cover;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-size: 22px;
      margin: 0;
      color: whitesmoke;
    }

    h2 {
      font-size: 17px;
      margin: 0;
      color: #aaa;
    }

    p {
      font-size: 15px;
      margin: 0;
      color: #aaa;
    }
  }

  .searchInput {
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    padding: 24px 46px 24px 30px;
    transition: all 0.2s ease-in-out;
    width: 690px;
    height: 100%;

    @media (max-width: 1200px) {
      font-size: 12px;
      width: 400px;
    }
  }

  .searchInput:focus {
    border: 2px solid #404588;
    border-radius: 30px;
    background-color: #2c2c2f;
    box-shadow: 0 0 5px rgba(64, 69, 136, 0.8);
    color: #fff;
  }
`;

export default Input;
