import { getTrendingMovies,getPopular,getTopRated,getNowPlayingMovies} from "../services/tmdb.service.js";


export const getMoviesController = async (req, res) => {

  try {
    const trendingMovies = await getTrendingMovies();
    const nowPlayingMovies = await getNowPlayingMovies();
    const popularMovies = await getPopular("movie");
    const topRatedMovies = await getTopRated("movie");

    res.status(200).json({
        message: "Movies fetched successfully",
        data: {
            trending: trendingMovies,
            popular: popularMovies,
            topRated: topRatedMovies,
            nowPlaying: nowPlayingMovies
        },
        success: true
    });
  }
    catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};