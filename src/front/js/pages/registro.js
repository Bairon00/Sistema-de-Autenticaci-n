import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";



export const Register = () => {
    const history = useHistory();
    const [usuario, setUsuario] = useState({
        Email: "",
        Password: ""
    })
    const register = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        }
        )
    }

    return (
        <form onSubmit={(e) => actions.registrarse(e, history)}>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label" onChange={aa}>Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" name="Email" />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label" onChange={aa}>Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password" name="Password" />
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-2"></div>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1" required />
                        <label class="form-check-label" for="gridCheck1">
                            recuerda seguirme en linkedin
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </div>
        </form>

    )
}