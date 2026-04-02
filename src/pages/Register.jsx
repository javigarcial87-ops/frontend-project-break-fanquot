import { useState } from "react"
import { loginUser, registerUser } from "../services/authService"
import { useNavigate } from "react-router-dom"

function Register() {
    const navigate = useNavigate()
    const [form, setForm] =useState({
        username:"",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = await registerUser(form)
        navigate("/")
        console.log(user)
    }

    return (
        <>
                <form onSubmit={handleSubmit} className="registerForm">
                    <h2>REGISTRATE</h2>
                     <p>
                        ¿Ya tienes cuenta?{" "}
                        <span 
                            onClick={()=>navigate("/register")}
                            style={{color:yelow, cursor:"pointer"}}
                            >
                            Logéate
                        </span>
              </p>
                    <input name="username" placeholder="Nombre de Usuario" onChange={handleChange} required />
                    <input name="email" placeholder="Email" onChange={handleChange} required/>
                    <input name="password" placeholder="Password" onChange={handleChange} required/>
                    <button className="btnRegist">Registrarse</button>
                </form>
        </>
    )
}

export default Register