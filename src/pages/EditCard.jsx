import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getCards, updateCard } from "../services/cardService"

function EditCard() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        characterName: "",
        characterImage: "",
        mediaType: "",
        mediaTitle: "",
        quote: ""
    })

    useEffect(()=> {
        getCards().then(cards => {
            const card = cards.find(c => c._id.toString() === id)
            if (card) setForm(card)
        })
    },[id])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await updateCard(id, form)

        navigate("/admin")
    }

    return (
        <>
    <div>
            

            <form onSubmit={handleSubmit} className="editForm">
                <h2>Editar Card</h2>

                <label className="labelEditForm">Nombre del personaje</label>
                <input name="characterName" value={form.characterName} onChange={handleChange} required/>

                <label className="labelEditForm">Imagen</label>
                <input name="characterImage" value={form.characterImage} onChange={handleChange} required/>

                <label className="labelEditForm">tipo de medio</label>
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

                <label className="labelEditForm">Nombre del medio</label>
                <input name="mediaTitle" value={form.mediaTitle} onChange={handleChange} required />

                <label className="labelEditForm">Cita</label>
                <textarea name="quote" value={form.quote} onChange={handleChange} className="EditQuote" required></textarea>
                <button type="submit" className="btnSave">Guardar Cambios</button>
            </form>

    </div>
        </>
    )
}

export default EditCard