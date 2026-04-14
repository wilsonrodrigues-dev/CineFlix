import { getPopular,getTopRated } from "../services/tmdb.service";

async function getPopular(req, res) {
    const { type } = req.params;
    try {
        const media = await getPopular(type);
        res.status(200).json({
            message: "Popular movies fetched successfully",
            data: media,
            success: true
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch popular movies" });
    }
}

async function getTopRated(req, res) {
    const { type } = req.params;
    try {
        const media = await getTopRated(type);
        res.status(200).json({
            message: "Top rated movies fetched successfully",
            data: media,
            success: true
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch top rated movies" });
    }
}

export { getPopular, getTopRated };