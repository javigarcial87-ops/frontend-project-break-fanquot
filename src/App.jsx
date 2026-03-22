import { useEffect, useState } from "react"
import Card from "./components/Card"
import {getCards, createCard} from "./services/cardService"

function App() {
  const [cards, setCards] = useState([])

  const [form,setForm]= useState({
    characterName: "",
    characterImage: "",
    mediaType: "",
    mediaTitle: "",
    quote: ""
  })

  useEffect(() => {
   getCards()
    .then(data => setCards(data))
    .catch(err => console.error(err))
  }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const newCard = await createCard({
        ...form,
        likes: 0,
        likedBy: []
      })

      setCards(prev =>[...prev, newCard])

      setForm({
        characterName: "",
        characterImage: "",
        mediaType: "",
        mediaTitle: "",
        quote: ""
      })

    } catch (error) {
      console.error("Error al crear card:", error)
    }
  }






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