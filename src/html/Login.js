import { getElementError } from "@testing-library/react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

//import fuera de react
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Card.css';

const Login = () => {
    const navigate = useNavigate();

    const login = () => {
        const Password = document.getElementById("pass").value
        console.log(Password)

        const User = document.getElementById("usuario").value
        console.log(User)

        if (Password === "" || User === "") {
            toast.error("Llene los campos por favor")
        }
        else if (User === "Usuario" && Password === "123") {
            toast.success("Entrando")
            navigate("/dashboard");
        } else {
            toast.error("credenciales invalidas")
        }
    }



    return (
        <>
            <ToastContainer />
            <div className="card-container">
                <div class="card col-xs-12 col-md-6 col-lg-6 border-success">
                    <div class="card-header text-white" style={{backgroundColor: '#138138' }}>
                        Bienvenido
                    </div>
                    <div class="card-body" style={{backgroundColor: '#139139' }}>
                    <div class="d-flex justify-content-center">
                        <form>
                            <div class="form-group text-white mt-2">
                                <label for="exampleInputEmail1">Usuario</label>
                                <input type="user" class="form-control" id="usuario" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-black">Intente con Usuario.</small>
                            </div>
                            <div class="form-group text-white mt-2">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="pass" placeholder="Password" />
                                <small id="passwordHelp" class="form-text text-black">Intente con 123.</small>
                            </div>
                            <button type="button" class="btn btn-light mt-2" onClick={login}>Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Login