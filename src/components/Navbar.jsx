import {Link} from "react-router-dom"

function Navbar() {
    return (
        <>
        <nav>
            <Link to="/">Home | </Link>
            <Link to="/create">Crear Card</Link>
        </nav>
        </>
    )
}


export default Navbar