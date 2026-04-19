import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:3000/api"
})

export async function getActorsdata() {
    try {
        const res=await api.get("/people")
        console.log("api done")

        return res.data
    } catch (error) {
        console.log("api error",error)
        
    }
    
}