import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:3000/api"
})

export async function getMediaDetails(type,id) {
    try{
        const {data}=await api.get(`/details/${type}/${id}`);
        // console.log(data.data)

        return data.data
    }
    catch(err){
        console.log("Error in api",err)
    }
}