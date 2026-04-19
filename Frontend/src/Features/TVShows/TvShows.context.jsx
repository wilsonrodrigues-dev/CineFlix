import { createContext, useState } from "react";

export const TvShowsContext=createContext()

export const TvShowsContextProvider=({children})=>{
    const [loading, setLoading] = useState(false)
    const [TvShows, setTvShows] = useState([])

    return (<TvShowsContext.Provider value={{loading,setLoading,TvShows,setTvShows}}>{children}</TvShowsContext.Provider>)
    
}