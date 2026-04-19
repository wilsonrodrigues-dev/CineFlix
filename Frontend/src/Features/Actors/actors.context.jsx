import { createContext, useState } from "react";

export const ActorContext=createContext();

export const ActorContextProvide=({children})=> {
    const [loading, setLoading] = useState(false)
    const [ActorsData, setActorsData] = useState([])
    
    return (<ActorContext.Provider value={{loading,setLoading,ActorsData,setActorsData}}>{children}</ActorContext.Provider>)
}