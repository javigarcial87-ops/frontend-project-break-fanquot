import { useEffect, useState} from "react"
import {getCards} from "../services/cardService"
import Card from "../components/Card"
import { useNavigate } from "react-router-dom"


function Profile() {
    const [cards, setCards] = useState([])
    const [likedCards, setLikedCards] = useState([])
    const navigate = useNavigate()
     
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

    
    useEffect(()=> {
      const user = JSON.parse(localStorage.getItem("user"))

      if (!user) {
        alert("debes estar logeado")
        navigate("/login")
      }
    },[])


    return (
    <div className="profileTab">
      <h1>Mi perfil</h1>

      <h2>Las cards que me gustan</h2>

      {likedCards.length === 0 ? (
        <p>No has dado like a ninguna card aún</p>
      ) : (
        <div className="cardsContainer">
          {likedCards.map(card => (
            <Card key={card._id} card={card} showLikeButton={false} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Profile