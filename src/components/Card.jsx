import { useNavigate } from "react-router-dom"

function Card({ card, onDelete, onLike, showLikeButton=true }) {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div className="card">
      <h3>{card.characterName}</h3>
      <img src={card.characterImage} alt={card.characterName} />
      <p>{card.mediaType?.toUpperCase() || "SIN TIPO"}</p>
      <p><strong>{card.mediaTitle}</strong></p>
      <p>"{card.quote}"</p>

      <p className="counterLike">❤️ {card.likes || 0}</p>

      {showLikeButton && (
        <button onClick={() => onLike(card._id)} className="btnLike">
        Me gusta!
        </button>
      )}
      

      {user?.role === "admin" && (
        <button onClick={() => onDelete(card._id)} className="btnDltAdmin">
          Eliminar
        </button>
      )}

      {user?.role === "admin" && (
        <button onClick={() => navigate("/admin")} className="btnEditAdmin">
          Editar
        </button>
)}
    </div>
  )
}

export default Card