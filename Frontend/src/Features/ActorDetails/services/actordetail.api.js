import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:3000/api"
})


export async function getActorsDetails(id) {

    try {
        
        const response=await api.get(`/actors/${id}`)

        // console.log("api done")
        
        return response.data

    } catch (error) {
        console.log("APi Error",error)
        
    }
    
}