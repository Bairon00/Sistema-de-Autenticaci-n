import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    const navegar = useNavigate()
    const { store, actions } = useContext(Context);
    useEffect(() => {
        if (localStorage.getItem("Token")) {
            alert("esa es una pagina privada !!!!")
        } else {
            navegar("/");
        }
    }, []);

    return (
        <div>
            <h1>esta es una pagina privada !!!</h1>
            <button onClick={() => actions.cerrar(navegar)}>Cerrar sesion</button>

        </div>
    )
}