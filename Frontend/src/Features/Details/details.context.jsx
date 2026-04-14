import { createContext, useState } from "react";

export const DetailsContext=createContext();

export const DetailsContextProvider=({children})=>{
    const [details, setDetails] = useState([])
    const [loading,setLoading]=useState(false)

    return (<DetailsContext.Provider value={{details,setDetails,loading,setLoading}}>{children}</DetailsContext.Provider>)
}