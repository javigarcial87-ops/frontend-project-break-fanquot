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

  try {
    const user = await loginUser(form)

    localStorage.setItem("user", JSON.stringify(user))

    if (user.role === "admin") {
      navigate("/admin")
    } else {
      navigate("/")
    }

    window.location.reload()

  } catch (error) {
    console.error("Error login:", error)
  }
} 

return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <input name="email" placeholder="Email" onChange={handleChange} required />
            <input name="password" placeholder="Password" onChange={handleChange} required />
            <button>Login</button>
        </form>
        </>
    )
}

export default Login