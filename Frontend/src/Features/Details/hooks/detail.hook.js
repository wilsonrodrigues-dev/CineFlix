import { getMediaDetails } from "../services/details.api.js";
import { useContext } from "react";
import { DetailsContext } from "../details.context.jsx";

export function useMediaDetails() {
  const { details, setDetails, loading, setLoading } =
    useContext(DetailsContext);

  const handleMediaDetails = async (type, id) => {
    try {
      setLoading(true);

      const data = await getMediaDetails(type, id);
      console.log(data)
      setDetails(data);

    } catch (error) {
      console.error("Error fetching media details:", error);
    } finally {
      setLoading(false); // ✅ only here
    }
  };

  return { loading, details, handleMediaDetails };
}