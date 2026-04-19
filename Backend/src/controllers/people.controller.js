import { getPopularPersons,getPersonDetails } from "../services/tmdb.service.js";

export const getPeopleController = async (req, res) => {
    try {
        const people = await getPopularPersons();
        res.status(200).json({
            message: "Popular persons fetched successfully",
            data: people,
            success: true
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch popular persons" });
    }
};

export const getPersonDetailsController = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const personDetails = await getPersonDetails(id);
        res.status(200).json({
            message: "Person details fetched successfully",
            data: personDetails,
            success: true
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch person details" });
    }
};