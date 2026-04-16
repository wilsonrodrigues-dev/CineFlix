import axios from 'axios'

const api=axios.create({
    baseURL:"http://localhost:3000/api"
})

export async function getMovies() {
    try {
        const response=await api.get("/movie")

        console.log("done api")

        return response.data

    } catch (error) {
        console.log(error)
    }
    
}