import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";


export const Login = () => {
    const { store, actions } = useContext(Context);
    const [datos, setDatos] = useState({
        Email: "",
        Password: ""
    })
    const captura = (e) => {
        setUsuario({
            ...datos,
            [e.target.name]: e.target.value
        })

    }

    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="Email" onChange={captura} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="Password" onChange={captura} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={() => {
                    actions.verificacion(datos.Email, datos.Password)
                }}>Login</button>
            </form>
        </div>
    )
}

