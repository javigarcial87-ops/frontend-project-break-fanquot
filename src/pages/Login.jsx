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
    console.log("RESPUESTA LOGIN:", user)

    if (!user || user.error) {
        alert("Datos incorrectos, intentalo de nuevo")
        
        setForm({
          email: "",
          password: ""
        })
        return
    }

    localStorage.setItem("user", JSON.stringify(user))

    if (user.role === "admin") {
      navigate("/admin")
    } else {
      navigate("/")
    }

    window.location.reload()

  } catch (error) {
    alert("Datos incorrectos, intentalo de nuevo")
    console.error(error)
  }
} 

return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <input name="email" value={form.email} placeholder="Email" onChange={handleChange} required />
            <input name="password" type="password" value={form.password}  placeholder="Password" onChange={handleChange} required />
            <button>Login</button>
        </form>
        </>
    )
}

export default Login