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
    alert("Debes estar registrado y logeado para crear nuevas entradas")
    navigate("/login")
  }
},)

  return (
    <div>
      

      <form onSubmit={handleSubmit} className="createForm">

        <h2>Crea una nueva card</h2>

        <input
          name="characterName"
          placeholder="Personaje"
          value={form.characterName}
          onChange={handleChange}
        />

        <input
          name="characterImage"
          placeholder="URL de la imagen del personaje"
          value={form.characterImage}
          onChange={handleChange}
        />

        <select 
          name="mediaType"
          value={form.mediaType}
          onChange={handleChange}
          className="selectMedia"
          required
                >
              <option value="">Selecciona el tipo de medio</option>
              <option value="cine">MOVIE</option>
              <option value="television">TV</option>
              <option value="juegos">GAMING</option>
              <option value="literatura">BOOK</option>

        </select>

        <input
          name="mediaTitle"
          placeholder="Título del medio"
          value={form.mediaTitle}
          onChange={handleChange}
        />

        <label>Introduce aqui la frase del personaje</label>
        <textarea 
          name="quote"
          value={form.quote}
          onChange={handleChange}
          className="quoteArea"
        >

      </textarea>
        <button type="submit" className="btnCreateCard">Crear Card</button>
      </form>
    </div>
  )
}

export default CreateCard