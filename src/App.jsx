import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateCard from "./pages/CreateCard"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCard />} />
      </Routes>
    </Router>
  )
}

export default App