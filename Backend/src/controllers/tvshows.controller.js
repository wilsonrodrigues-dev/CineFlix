import { getAiringTodayTVShows,getTopRated,getPopular,getOnTheAirTVShows,getTrendingTVShows } from "../services/tmdb.service.js";


export const getTVShowsController = async (req, res) => {
    try {
        const airingTodayTVShows = await getAiringTodayTVShows();
        const onTheAirTVShows = await getOnTheAirTVShows();
        const trendingTVShows = await getTrendingTVShows();
        const popularTVShows = await getPopular("tv");
        const topRatedTVShows = await getTopRated("tv");
        res.status(200).json({
            message: "TV shows fetched successfully",
            data: { 
                airingToday: airingTodayTVShows,
                popular: popularTVShows,
                topRated: topRatedTVShows,
                onTheAir: onTheAirTVShows,
                trending: trendingTVShows
            },
            success: true
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch TV shows" });
    }
};
