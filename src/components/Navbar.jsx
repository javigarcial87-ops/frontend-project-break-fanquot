import { Link } from "react-router-dom"

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Crear Card</Link>

      {user ? (
        <>
          <span>Hola, {user?.username || user?.email}</span>
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
  )
}

export default Navbar