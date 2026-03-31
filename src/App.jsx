import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateCard from "./pages/CreateCard"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Admin from "./pages/Admin"
import EditCard from "./pages/EditCard"
import Profile from "./pages/Profile"


function App() {
  return (
    <Router>

      <div className="appContainer">
      <Navbar />
      <div className="mainContent">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit/:id" element={<EditCard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </div>
      
      <Footer />
      </div>
    </Router>
  )
}

export default App