import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getCards, deleteCard, likeCard } from "../services/cardService"
import Card from "../components/Card"
import { useNavigate } from "react-router-dom"

function Home() {
  const [cards, setCards] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 8
  const location = useLocation() 
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const topCard =[...cards].sort((a,b)=> b.likes - a.likes)[0]



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
  

  if (!user || !user._id) {
    alert("Debes estar registrado y logueado para dar LIKE")
    navigate("/login")
    return
  }

  const updatedCard = await likeCard(cardId, user._id)

  if (!updatedCard || updatedCard.error) {
    console.error("Error en like:", updatedCard)
    return
  }

  setCards(prev =>
    prev.map(card =>
      card._id === cardId ? updatedCard : card
    )
  )
}

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)
  const filteredCards =cards.filter(card =>
    card.characterName.toLowerCase().includes(search.toLowerCase()) ||
    card.mediaTitle.toLowerCase().includes(search.toLowerCase())
  )


  return (
  <div >
    <div className="sideBar">
          

          {topCard && (
            <div>
              <h2 className="topTitle">EL DESTACADO</h2>
              
              <div className="sideTopCard">
                <h3>{topCard.characterName}</h3>
                <img src={topCard.characterImage} />
                <p>{topCard.mediaTitle}</p>
                <p>"{topCard.quote}"</p>
                <p>❤️ {topCard.likes}</p>
              </div>

            </div>
          )}
      </div>
    <div className="mainContent">

        <div className="searchHomeContainer">
        <input 
        className="searchHome"
        type="text"
        placeholder="Busca por personaje o titulo..."
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      

      <div className="cardsContainer">
        {(search ? filteredCards : currentCards).map((card) => (
          <Card
            key={card._id}
            card={card}
            onDelete={handleDelete}
            onLike={handleLike}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
          className="prevNextBtn"
        >
          {"<"}
        </button>

        <span>Página {currentPage}</span>

        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={indexOfLastCard >= cards.length}
          className="prevNextBtn"
        >
         {">"}
        </button>
      </div>
      
    </div>  
    
      


  </div>
  )
}

export default Home