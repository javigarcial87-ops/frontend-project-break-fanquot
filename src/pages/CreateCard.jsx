import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createCard } from "../services/cardService"

function CreateCard() {
  const navigate = useNavigate()



  const [form, setForm] = useState({
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
      await createCard({
        ...form,
        likes: 0,
        likedBy: []
      })

      setForm({
        characterName: "",
        characterImage: "",
        mediaType: "",
        mediaTitle: "",
        quote: ""
      })

      navigate("/")

    } catch (error) {
      console.error("Error al crear card:", error)
    }
  }



useEffect(()=>{
  const user = JSON.parse(localStorage.getItem("user"))
  if (!user) {
    alert("Debes estar logeado para crear")
    navigate("/login")
  }
},)

  return (
    <div>
      <h2>Crea una nueva card</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="characterName"
          placeholder="Character"
          value={form.characterName}
          onChange={handleChange}
        />

        <input
          name="characterImage"
          placeholder="Image URL"
          value={form.characterImage}
          onChange={handleChange}
        />

        <select 
          name="mediaType"
          value={form.mediaType}
          onChange={handleChange}
          required
                >
              <option value="">Selecciona el tipo de medio</option>
              <option value="cine">CINE</option>
              <option value="television">TV</option>
              <option value="juegos">JUEGOS</option>
              <option value="literatura">LITERATURA</option>

        </select>

        <input
          name="mediaTitle"
          placeholder="Title"
          value={form.mediaTitle}
          onChange={handleChange}
        />

        <input
          name="quote"
          placeholder="Quote"
          value={form.quote}
          onChange={handleChange}
        />

        <button type="submit">Crear Card</button>
      </form>
    </div>
  )
}

export default CreateCard