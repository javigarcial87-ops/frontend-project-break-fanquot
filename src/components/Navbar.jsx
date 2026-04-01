import { Link } from "react-router-dom"

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <>
    <nav className="navBar">
      <img src="/LOGO-fanquot-bueno.png" alt="LOGO" className="imgLogo"/>
      <Link to="/"><img src="/home.svg" alt="home" className="iconHome" /></Link>
      <Link to="/create">Crear Card</Link>
      <Link to="/profile">Mi perfil</Link>

  
      {user ? (
        <>
          {user?.username || user?.email ? (
            <span className="userName">Hola, {user?.username || user?.email}</span>
          ) :null}


          <button onClick={() => {
            localStorage.removeItem("user")
            window.location.reload()
          }} className="btnLogout">
            <img src="/log-out.svg" alt="logout" className="iconLogout"/>
          </button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Registrate</Link>
          
        </>
      )}
    </nav>
    </>
  )
}

export default Navbar