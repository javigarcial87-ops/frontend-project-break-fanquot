function Card({ card, onDelete }) {
  return (
    <div className="card">
      <h3>{card.characterName}</h3>
      <img src={card.characterImage} alt={card.characterName} />
      <p>{card.mediaType}</p>
      <p><strong>{card.mediaTitle}</strong></p>
      <p>"{card.quote}"</p>

      <button onClick={()=>onDelete(card._id)}>
        Delete
      </button>
    </div>
  )
}

export default Card