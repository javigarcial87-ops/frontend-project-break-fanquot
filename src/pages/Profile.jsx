import { useEffect, useState} from "react"
import {getCards} from "../services/cardService"
import Card from "../components/Card"

function Profile() {
    const [cards, setCards] = useState([])
    const [likedCards, setLikedCards] = useState([])

    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(()=> {
        getCards()
        .then(data => {
            setCards(data)

            const filtered = data.filter(card =>
                card.likedBy?.includes(user._id)
            )
            setLikedCards(filtered)
        })
        .catch(err => console.error(err))
    },[])

    if(!user) {
        return <p>Debes estar logeado</p>
    }

    return (
    <div>
      <h1>Mi perfil</h1>

      <h2>Cards que te gustan</h2>

      {likedCards.length === 0 ? (
        <p>No has dado like a ninguna card aún</p>
      ) : (
        <div className="cardsContainer">
          {likedCards.map(card => (
            <Card key={card._id} card={card} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Profile