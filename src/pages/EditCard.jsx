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
            <h2>Editar Card</h2>

            <form onSubmit={handleSubmit}>
                <input name="characterName" value={form.characterName} onChange={handleChange} />
                <input name="characterImage" value={form.characterImage} onChange={handleChange} />
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
                <input name="mediaTitle" value={form.mediaTitle} onChange={handleChange} />
                <input name="quote" value={form.quote} onChange={handleChange} />

                <button type="submit">Guardar</button>
            </form>

    </div>
        </>
    )
}

export default EditCard