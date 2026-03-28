import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getCards,deleteCard} from "../services/cardService"

function Admin() {
    const [cards,setCards]= useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    //proteger la ruta
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"))

        if (!user || user.role !== "admin") {
            alert("Acceso exclusivo de administrador")
            navigate("/")
        }
    },[])

    //cargar las cards
    useEffect(()=>{
        getCards()
        .then(data => setCards(data))
        .catch(err => console.error(err))
    },[])

    //borrar card
    const handleDelete = async (id)=> {
        await deleteCard(id)
        setCards(prev => prev.filter(csrd => cards._id !==id))
    }

    //filtrar cards para busqueda
    const filteredCards = cards.filter(card=>
        card.characterName.toLowerCase().includes(search.toLowerCase()) ||
        card.mediaTitle.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
        <div>
            <h1>Panel administrador</h1>

            {/*BUSCADOR*/}
            <input 
            type="text"
            placeholder="Busca por nombre de personaje o titulo donde aparece"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
             />


             {/*LISTA*/}
             {filteredCards.map(card=>(
                <div key={card._id}>
                    <h3>{card.characterName}</h3>
                    <p>{card.mediaTitle}</p>

                    <button onClick={()=>handleDelete(card._id)}>
                    Borrar card
                    </button>

                    <button onClick={()=>navigate(`/edit/${card._id}`)}>
                    Editar card
                    </button>
                </div>
             ))}
        </div>
        
        </>
    )
}

export default Admin