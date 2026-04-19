import { createContext, useState } from "react";

export const ActorDetailContext=createContext()

export const ActorDetailContextProvider=({children})=>{

    const [loading, setLoading] = useState(false)
    const [ActorDetail, setActorDetail] = useState([])

    return (<ActorDetailContext.Provider value={{loading,setActorDetail,setLoading,ActorDetail}}>{children}</ActorDetailContext.Provider>)

}