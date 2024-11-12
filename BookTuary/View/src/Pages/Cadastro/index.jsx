import React, { useEffect } from 'react';
import { Conteudo, Form, InputUm, InputDois, InputNome, InputDate, InputNick, DateNick, ButtonPrimary, ButtonSecondary} from './style';

function Cadastro() {

    useEffect(() => {
        document.title = "Cadastro"; // Altera o título da aba
    }, []);

    return (
        <>
            <Conteudo>

                <Form>

                    <h1>Cadastro</h1>

                    <InputNome>
                        <p>Nome</p>
                        <input placeholder="Nome Completo" name='Nome' type='text' />
                    </InputNome>

                    <DateNick>
                        <InputNick>
                            <p>Nickname</p>
                            <input placeholder="Nick_Name" name='Nickname' type='text' />
                        </InputNick>

                        <InputDate>
                            <p>Data de nascimento</p>
                            <input placeholder='xx/xx/xx' name='Date' type='date' />
                        </InputDate>
                    </DateNick>

                    <InputUm>
                        <p>Email</p>
                        <input placeholder="booktuary@email.com" name='email' type='email' />
                    </InputUm>

                    <InputDois>
                        <p>Senha</p>
                        <input placeholder="********" name='Senha' type='password' />
                    </InputDois>

                    <ButtonPrimary to="/login" >Cadastre-se</ButtonPrimary>
                    <ButtonSecondary to="/login">Já tem uma conta? Faça seu login</ButtonSecondary>

                </Form>
            </Conteudo >
        </>
    )
}

export default Cadastro