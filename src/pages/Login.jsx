import { useState } from "react"
import { loginUser, registerUser } from "../services/authService"

function Login() {
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
        console.log(user)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <button>Login</button>
        </form>
        </>
    )
}

export default Login