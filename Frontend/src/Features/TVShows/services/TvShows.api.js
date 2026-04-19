import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:3000/api"
})

export async function getTvSHowsdata() {
    try {
        const response=await api.get("/tvshows")
        return response.data
    } catch (err) {
        console.log(err)
        
    }
    
}