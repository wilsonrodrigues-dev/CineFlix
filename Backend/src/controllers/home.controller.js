import { getTrending } from "../services/tmdb.service.js";

export async function homeData(req, res) {
  try {
    const data = await getTrending();

    res.status(200).json({
      message: "Home data fetch successfull",
      data: data,
      success: true,
    });
  } catch (err) {
    console.error("Home API Error:", err.message);

    res.status(500).json({
      message: "Failed to fetch home data",
      success: false,
    });
  }
}
