import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./styles.css";

const EMAIL_PADRAO = "dani";
const SENHA_PADRAO = "123";

export const Login = () => {
    const history = useHistory();

    function onSubmit(event){
        event.preventDefault(); //Parando carregamento da pagina
        const { email, password } = event.target.elements;
        if(email.value === EMAIL_PADRAO && SENHA_PADRAO === password.value){  //Compara tipo e valor
            history.push("/home");
        }else{
            toast.error("E-mail ou senha inválidos");
        }
    }
    return(
        <div className="contentt">
            <div id="login">
                <form onSubmit={(event)=> { onSubmit(event)}} >
                    <h1>Login</h1>
                    <label>E-mail:</label>
                    <input type="text" id="email" placeholder="ex. contato@gmail.com" required/>
                    <label>Senha:</label>
                    <input type="password" id="password" placeholder="ex. senha"  required/>
                    <div id="botao">   
                    <input type="submit" value="Login"/> 
                    </div>                       
                </form>
            </div>
        </div>
    );
};