import { doc } from "prettier";
import React, { useState } from "react";
import { toast } from "react-toastify";

import "./styles.css";

export const Signup = () =>{
    const[infosLogin, setInfosLogin] = useState({}); //Hooks

    function onSubmit(event){
        event.preventDefault(); //Parando carregamento da pagina
        const { name, email, password, birthday, date, cpf } = event.target.elements;

        const infosForm = {name:name.value,       //Informações do cad para o back
                            email: email.value,
                            password: password.value,
                            birthday: birthday.value,
                            cpf: cpf.value}
        toast.success("Cadastro realizado com sucesso!");
        document.getElementById("formulario").reset();
    }

    return (
        <div className="content">
            <h1>Criar Conta</h1>
            <form action="" onSubmit={(event)=> { onSubmit(event)}} id="formulario"> 
                <label htmlFor="name" >Nome:</label>
                <input type="text" id="name" placeholder="ex. seu nome"required/>
                <label htmlFor="email" >E-mail:</label>
                <input type="email" id="email" placeholder="ex. contato@gmail.com" required/>
                <label htmlFor="password" >Senha:</label>
                <input type="password" id="password" placeholder="ex. senha" required/>
                <label htmlFor="birthday" >Data de Nascimento:</label>
                <input type="date" id="birthday" required/>
                <label htmlFor="cpf" >CPF:</label>
                <input type="text" id="cpf"placeholder="ex. seu cpf" required/>
                <div id="botao">
                    <input type="submit" value="Sign Up"/>
                </div>
            </form>
        </div>
    );
};