import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Prateleira from '../../assets/prateleira.svg'
import { Conteudo, Imagem, Form, Entrar, Esqueceu, BotaoDois, InputUm, InputDois } from './style';

function Login() {

    useEffect(() => {
        document.title = "Login"; // Altera o título da aba
    }, []);

    return (
        <>
            <Conteudo>

                <Imagem>
                    <img src={Prateleira} />
                </Imagem>

                <Form>

                    <h1>Login</h1>

                    <InputUm>
                        <p>Email</p>
                        <input placeholder="booktuary@email.com" name='email' type='email' />
                    </InputUm>

                    <InputDois>
                        <p>Senha</p>
                        <input placeholder="********" name='Senha' type='password' />
                    </InputDois>

                    <Esqueceu to="/" >Esqueceu a senha?</Esqueceu>

                    <Entrar to="/home" >Entrar</Entrar>

                    <BotaoDois to="/cadastro">Não tem conta? Cadastre-se</BotaoDois>

                </Form>
            </Conteudo>
        </>
    )
}

export default Login