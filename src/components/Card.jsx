import { useNavigate } from "react-router-dom"

function Card({ card, onDelete, onLike }) {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div className="card">
      <h3>{card.characterName}</h3>
      <img src={card.characterImage} alt={card.characterName} />
      <p>{card.mediaType}</p>
      <p><strong>{card.mediaTitle}</strong></p>
      <p>"{card.quote}"</p>

      <p>❤️ {card.likes}</p>

      <button onClick={() => onLike(card._id)}>
        Like
      </button>

      {user?.role === "admin" && (
        <button onClick={() => onDelete(card._id)}>
          Delete
        </button>
      )}

      {user?.role === "admin" && (
        <button onClick={() => navigate(`/edit/${card._id}`)}>
          Edit
        </button>
)}
    </div>
  )
}

export default Card