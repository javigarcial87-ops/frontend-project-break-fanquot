import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getCards,deleteCard} from "../services/cardService"

function Admin() {
    const [cards,setCards]= useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

   
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"))

        if (!user || user.role !== "admin") {
            alert("Acceso exclusivo de administrador")
            navigate("/")
        }
    },[])

    
    useEffect(()=>{
        getCards()
        .then(data => setCards(data))
        .catch(err => console.error(err))
    },[])

    
    const handleDelete = async (id)=> {
        await deleteCard(id)
        setCards(prev => prev.filter(card => card._id !==id))
    }

    
    const filteredCards = cards.filter(card=>
        card.characterName.toLowerCase().includes(search.toLowerCase()) ||
        card.mediaTitle.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
        <div className="adminPanel">
            <h1>Panel administrador</h1>

            
            <input 
            type="text"
            placeholder="Busca por nombre de personaje o titulo donde aparece"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="searchInput"
             />

            
             
             {filteredCards.map(card=>(
                <div key={card._id} className="adminSearch">
                    <h3>{card.characterName}</h3>
                    <p>{card.mediaTitle}</p>

                    <button onClick={()=>handleDelete(card._id)} className="btnDlt">
                    Borrar card
                    </button>

                    <button onClick={()=>navigate(`/edit/${card._id}`)} className="btnEdit">
                    Editar card
                    </button>
                </div>
             ))}
        </div>
        
        </>
    )
}

export default Admin