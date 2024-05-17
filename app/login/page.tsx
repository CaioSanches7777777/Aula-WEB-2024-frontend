"use client"

import { AuthContext, SignIdData } from "@/context/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const Login = async ({}) => {
    const {register, handleSubmit} = useForm<SignIdData>();
    const { login } = useContext(AuthContext);

    const handleLogin = async(data: SignIdData) => {
        await login(data);
    }

    return (
        <div className="grid place-items-center">
            <form className="flex flex-col" onSubmit={handleSubmit(handleLogin)}>
                <label htmlFor="username">Usuário</label>
                <input type="text" name="username" id="username" placeholder="username"></input>

                <label htmlFor="password">Senha</label>
                <input type="text" name="password" id="password" placeholder="password"></input>

                <input type="submit" value="Acessar"></input>
            </form>
            <p>{resultado}</p>
        </div>
    )
}

export default Login;