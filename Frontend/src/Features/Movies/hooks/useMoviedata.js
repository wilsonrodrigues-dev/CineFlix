import { getMovies } from "../services/movie.api.js";
import { MovieContext } from "../movies.context.jsx";
import { useContext } from "react";

export const useMoviedata=()=>{
    const {loading,setLoading,MovieData,setMovieData} =useContext(MovieContext)

    async function handleGetMovieData() {

        try {
            setLoading(true);
            const data=await getMovies()
            setMovieData(data.data)
            console.log("Hook ")
            return data
        } catch (err) {
            console.log(err)
        }
        finally{
            setLoading(false)
        }
        
    }

    return {loading,MovieData,handleGetMovieData}

}