import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Gato from '../../assets/gato.svg'
import { HomeC, Imagem, Content, Logo, TextSection, ButtonPrimary, ButtonSecondary } from './style';


function Inicial() {

  useEffect(() => {
    document.title = " Pagina Inicial"; // Altera o título da aba
  }, []);

  return (

    <HomeC>

      <Imagem>
        <img src={Gato} />
      </Imagem>

      <Content>

        <Logo>bookTuary</Logo>

        <TextSection>

          <h2>Onde cada livro encontra seu legado</h2>

          <h3>O refúgio perfeito para amantes da leitura. Explore livros, descubra autores e conecte-se com outros.</h3>

        </TextSection>

        <ButtonPrimary to="/cadastro" >Cadastre-se</ButtonPrimary>
        <ButtonSecondary to="/login">Já tem uma conta? Faça seu login</ButtonSecondary>

      </Content>



    </HomeC>

  )
}

export default Inicial
