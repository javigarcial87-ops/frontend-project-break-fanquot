import {Link} from "react-router-dom"
import { useEffect, useState } from "react"

function Navbar() {
    const [user,setUser] = useState(null)

    useEffect(()=>{
        const storedUser = JSON.parse(localStorage.getItem("user"))
    })
    return (
        <>
     <nav>
  <Link to="/">Home</Link>
  <Link to="/create">Crear Card</Link>

  {user ? (
    <>
      <span>Hola, {user.username}</span>
      <button onClick={() => {
        localStorage.removeItem("user")
        window.location.reload()
      }}>
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  )}
</nav>
    </>
    )
}


export default Navbar