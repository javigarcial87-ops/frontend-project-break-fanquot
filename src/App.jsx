import { useEffect, useState } from "react"
import Card from "./components/Card"

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/cards")
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>FanQuot</h1>

      <div className="cardsContainer">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </div>
    </div>
  )
}

export default App