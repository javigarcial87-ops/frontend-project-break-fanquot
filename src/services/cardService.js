const API_URL = "https://backend-project-break-fanquot.onrender.com/cards"


export const getCards = async () => {
  const res = await fetch(API_URL)
  return res.json()
}


export const createCard = async (cardData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cardData)
  })

  return res.json()
}


export const deleteCard = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
}


export const likeCard = async (id, userId) => {
  const res = await fetch(`https://backend-project-break-fanquot.onrender.com/cards/like/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ userId })
  })
  return res.json()
}


export const updateCard = async (id, data) => {
  const res = await fetch(`https://backend-project-break-fanquot.onrender.com/cards/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return res.json()
}