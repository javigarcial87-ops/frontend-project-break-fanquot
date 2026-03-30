import { Link } from "react-router-dom"

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <nav className="navBar">
      <Link to="/">Home</Link>
      <Link to="/create">Crear Card</Link>

      {user ? (
        <>
          {user?.username || user?.email ? (
            <span>Hola, {user?.username || user?.email}</span>
          ) :null}


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