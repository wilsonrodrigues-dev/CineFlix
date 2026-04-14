import { useContext } from "react";
import { getHomeData } from "../services/home.api";
import { HomeContext } from "../home.context.jsx";

export const useHomeMedia = () => {
  const context = useContext(HomeContext);

  const { media, setMedia, loading, setLoading } = context;

  async function handleGetHomeData(retry = true) {
    try {
      setLoading(true);

      const res = await getHomeData();

      const results = res?.data?.results || [];

      if (results.length === 0 && retry) {
        console.log("Retrying....");

        setTimeout(() => {
          handleGetHomeData(true);
        }, 2000);

        return;
      }

      setMedia(results);

    } catch (err) {
      console.error("Error:",err)
      if(retry){
        setTimeout(()=>{
          handleGetHomeData(true)
        },2000)
      }

    } finally {
      if(media.length>=0){
        setLoading(false);
      }
    }
  }

  return { loading, media, handleGetHomeData };
};
