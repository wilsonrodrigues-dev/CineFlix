import { getActorsDetails } from "../services/actordetail.api";
import { ActorDetailContext } from "../actorsdetails.context";
import { useContext }  from "react";

export const ActorDetailsHook=()=>{
    const {loading,setActorDetail,setLoading,ActorDetail}=useContext(ActorDetailContext)

    async function handleActorDetails(id) {

        try {
            setLoading(true)
            const data=await getActorsDetails(id)
            setActorDetail(data.data)
            // console.log("Hook done")
            setLoading(false)
            return data.data

        } catch (error) {
            console.log("Hook error",error)
        }
        
    }

    return ({loading,handleActorDetails,ActorDetail})
}
