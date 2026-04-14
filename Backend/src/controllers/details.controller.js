import { getDetails } from "../services/tmdb.service.js";

export async function mediaData(req, res) {
  const type = req.params.type;
  const id = req.params.id;
  console.log(type,id)

  try {
    const data = await getDetails(type, id);

    res.status(200).json({
      message: "Details Fetched Successfully",
      data: data,
      success: true,
    });
  } catch (error) {
    console.error("Datails API Error:");

    res.status(500).json({
      message: "Failed to fetch home data",
      success: false,
    });
  }
}
