import { useState } from "react"
import { createCard } from "../services/cardService"

function CreateCard() {
    const [form,setForm]= useState({
    characterName: "",
    characterImage: "",
    mediaType: "",
    mediaTitle: "",
    quote: ""
  })

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
    <>
    <div>
        <h2>Crea una nueva card</h2>

        <form onSubmit={handleSubmit}>
        <input name="characterName" placeholder="Character" value={form.characterName} onChange={handleChange} />
        <input name="characterImage" placeholder="Image URL" value={form.characterImage} onChange={handleChange} />
        <input name="mediaType" placeholder="Type" value={form.mediaType} onChange={handleChange} />
        <input name="mediaTitle" placeholder="Title" value={form.mediaTitle} onChange={handleChange} />
        <input name="quote" placeholder="Quote" value={form.quote} onChange={handleChange} />

        <button type="submit">Crear Card</button>
      </form>
    </div>
    </>
  )
}

export default CreateCard