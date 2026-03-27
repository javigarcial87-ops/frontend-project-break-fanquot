import { useState } from "react"
import { loginUser, registerUser } from "../services/authService"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate= useNavigate()
    const [form, setForm] =useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = await loginUser(form)

        localStorage.setItem("user", JSON.stringify(user))
        navigate("/")
        window.location.reload()
        console.log(user)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" placeholder="Password" onChange={handleChange} />
            <button>Login</button>
        </form>
        </>
    )
}

export default Login