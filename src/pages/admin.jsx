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
}