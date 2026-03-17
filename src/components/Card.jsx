function Card({ card }) {
  return (
    <div className="card">
      <img src={card.characterImage} alt={card.characterName} />
      <h3>{card.characterName}</h3>
      <p>{card.mediaType}</p>
      <p><strong>{card.mediaTitle}</strong></p>
      <p>"{card.quote}"</p>
    </div>
  )
}

export default Card