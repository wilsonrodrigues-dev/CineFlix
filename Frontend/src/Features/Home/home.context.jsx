import { createContext, useState } from "react";

export const HomeContext=createContext();

export const HomeContextProvider=({children})=>{
    const [media,setMedia]=useState([])
    const [loading, setLoading] = useState(false)

    return (<HomeContext.Provider value={{media,setLoading,loading,setMedia}}>{children}</HomeContext.Provider>)
}
