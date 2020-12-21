export const getInverseWord = async (word) => {
    const response = await fetch(`http://localhost:3001/iecho?text="${word}"`)
    const data = await response.json()
    if (response.status === 200) {
        return data.text
    } else {
        throw new Error(data.error)
    }
}