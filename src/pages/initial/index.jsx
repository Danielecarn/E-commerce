import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Initial = () =>{
    return (
        <div>
            <h1 className="titulo">E-commerce</h1>
            <div id="botao">
            <a href="/login">
            <button className="botao">Entrar</button>
            </a>
            <a href="/signup">
            <button className="botao">Cadastre-se</button></a>
            </div>
        </div>
    );
};