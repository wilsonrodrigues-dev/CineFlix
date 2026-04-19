import { getActorsdata } from "../services/Actors.api";
import { useContext } from "react";
import { ActorContext } from "../actors.context";

export const useActorsDetails=()=>{

    const {loading,setLoading,ActorsData,setActorsData}=useContext(ActorContext)

    async function handleActorsData() {
        try {
            setLoading(true)
            const data=await getActorsdata()
            console.log(data)
            setActorsData(data.data)
            console.log("hook Done")
            setLoading(false)
            return data.data
        } catch (error) {
            console.log("hook Error",error)
        }
        
    }

    return ({loading,ActorsData,handleActorsData})

}