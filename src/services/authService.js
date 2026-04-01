const API_URL = "https://backend-project-break-fanquot.onrender.com/auth"

export const registerUser = async (userData)=>{
    const res = await fetch(`${API_URL}/register`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(userData)
    })
    return res.json()
}

export const loginUser = async (data) => {
    const res = await fetch("https://backend-project-break-fanquot.onrender.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })
    const result = await res.json()
    return result
}