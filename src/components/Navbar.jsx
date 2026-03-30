import { Link } from "react-router-dom"

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <>
    <nav className="navBar">
      <h1>fanQuot</h1>
      <Link to="/">Home</Link>
      <Link to="/create">Crear Card</Link>
      <Link to="/profile">Mi perfil</Link>

  
      {user ? (
        <>
          {user?.username || user?.email ? (
            <span>Hola, {user?.username || user?.email}</span>
          ) :null}


          <button onClick={() => {
            localStorage.removeItem("user")
            window.location.reload()
          }} className="btnLogout">
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