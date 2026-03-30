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
                    <input name="username" placeholder="Username" onChange={handleChange} />
                    <input name="email" placeholder="Email" onChange={handleChange} />
                    <input name="password" placeholder="Password" onChange={handleChange} />
                    <button>Registrarse</button>
                </form>
        </>
    )
}

export default Register