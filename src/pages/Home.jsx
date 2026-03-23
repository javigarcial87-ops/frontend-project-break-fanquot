import { useEffect, useState } from "react"
import { getCards, deleteCard } from "../services/cardService"
import Card from "../components/Card"

function Home() {
    const [cards, setCards] = useState([])
    const [currentPage,setCurrentPage] =useState(1)
    const cardsPerPage = 8
    useEffect(() => {
        getCards()
            .then(data => setCards(data))
            .catch(err => console.error(err))
  }, [])

  const handleDelete = async (id)=>{
    await deleteCard(id)

    setCards(prev => prev.filter(card=> card._id !== id))
  }

  const indexOfLastCard

  return (
    <>
    <div>
        <h1>FanQuot</h1>

         <div className="cardsContainer">
            {cards.map((card) => (
             <Card 
                key={card._id} 
                card={card}
                onDelete={handleDelete}
                />
        ))}
      </div>
    </div>
    </>
  )
}

export default Home