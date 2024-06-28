
export const loginUser = async (data) => {
    try {
        const res = await fetch("http://localhost:3000/api/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        return { success: true, data: await res.json() }
    } catch (error) {
        return { success: false, error }
    }
}

export const registerUser = async (data) => {
    try {
        const res = await fetch("http://localhost:3000/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        return { success: true, data: await res.json() }
    } catch (error) {
        return { success: false, error }
    }
}