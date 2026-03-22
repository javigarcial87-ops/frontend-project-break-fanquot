import { useEffect, useState } from "react"
import { getCards } from "../services/cardService"
import Card from "../components/Card"

function Home() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getCards()
            .then(data => setCards(data))
            .catch(err => console.error(err))
  }, [])

  return (
    <>
    <div>
        <h1>FanQuot</h1>

         <div className="cardsContainer">
            {cards.map((card) => (
             <Card key={card._id} card={card} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Home