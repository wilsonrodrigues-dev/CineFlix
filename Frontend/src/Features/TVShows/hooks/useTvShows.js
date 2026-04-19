import { useContext } from "react";
import { getTvSHowsdata } from "../services/TvShows.api";
import { TvShowsContext } from "../TvShows.context";

export const useTvShows=() => {
    const {loading,setLoading,TvShows,setTvShows}=useContext(TvShowsContext)

    async function handleTvShows() {
        try {
            setLoading(true)
            const {data}=await getTvSHowsdata()
            setTvShows(data)
            setLoading(false)
            return data
        } catch (error) {
            console.log(error)
        }
        
    }

    return ({loading,handleTvShows,TvShows})
}