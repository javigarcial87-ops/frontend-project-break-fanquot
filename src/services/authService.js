const API_URL = "http://localhost:4000/auth"

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

export const loginUser = async (userData) => {
    const res = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })

    const result = await res.json()

    if (!res.ok) {
        return {error: result.error}
    }

    return res.json()
}