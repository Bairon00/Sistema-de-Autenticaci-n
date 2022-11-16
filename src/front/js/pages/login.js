import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navegar = useNavigate()
    const { store, actions } = useContext(Context);
    const [datos, setDatos] = useState({
        Email: "",
        Password: ""
    })
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")




    return (
        <div>
            <form onSubmit={(e) => actions.Login(email, pass, e, navegar)} >
                <div class="form-group">
                    <label for="exampleInputEmail1">Email </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="Email" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="Password" onChange={(e) => setPass(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary"
                >Login</button>
            </form>
        </div>
    );
}

