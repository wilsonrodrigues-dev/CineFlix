import { createContext, useState } from "react";

export const MovieContext=createContext()

export const MovieContextProvider=({children})=>{
    const [loading, setLoading] = useState(false)
    const [MovieData, setMovieData] = useState([])

    return (<MovieContext.Provider value={{loading,setLoading,MovieData,setMovieData}}>{children}</MovieContext.Provider>)
}