import { useEffect } from "react";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import MediaGrid from "../../Components/MediaGrid/MediaGrid";
import { dummyHeroData, dummyMoviesList } from "../../utils/dummyData";
import { useMoviedata } from "./hooks/useMoviedata.js";

const Movies = () => {

  const {loading,MovieData,handleGetMovieData}=useMoviedata()

  useEffect(()=>{
    handleGetMovieData();
  },[])

  console.log(MovieData)

  return (
    <div className="page-container">
        <HeroSlider items={[dummyHeroData[0], dummyHeroData[2]]} />
      <div className="section">
        <MediaGrid title="All Movies" items={dummyMoviesList} showFilters={true} />
      </div>
    </div>
  );
};

export default Movies;