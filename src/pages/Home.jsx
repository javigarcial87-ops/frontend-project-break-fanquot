import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getCards, deleteCard, likeCard } from "../services/cardService"
import Card from "../components/Card"

function Home() {
  const [cards, setCards] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 8
  const location = useLocation() 

  useEffect(() => {
    getCards()
      .then(data => setCards(data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [location])

  const handleDelete = async (id) => {
    await deleteCard(id)
    setCards(prev => prev.filter(card => card._id !== id))
  }

  const handleLike = async (cardId) => {
    const user = JSON.parse(localStorage.getItem("user")) 

    console.log("USER:", user)

    if (!user) {
      alert("Debes estar logueado")
      return
    }

    const updatedCard = await likeCard(cardId, user._id)

    console.log("UPDATED:", updatedCard)

    setCards(prev =>
      prev.map(card =>
        card._id === cardId ? updatedCard : card 
      )
    )
  }

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)

  return (
    <div>
      <h1>FanQuot</h1>

      <div className="cardsContainer">
        {currentCards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onDelete={handleDelete}
            onLike={handleLike}
          />
        ))}
      </div>

      <div>
        <button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span>Página {currentPage}</span>

        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={indexOfLastCard >= cards.length}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Home