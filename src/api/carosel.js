import { ApiManager, handleCheckToken } from "./ApiManager"

export const findAllImage = async (token) => {
    try {
        handleCheckToken()
        const result = ApiManager(`/image`,{
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return result
    } catch (error) {
        console.log(error)
    }
}