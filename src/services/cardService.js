const API_URL = "http://localhost:4000/cards"


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