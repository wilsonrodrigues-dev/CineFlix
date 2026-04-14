import React from "react";
// import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import MediaGrid from "../../Components/MediaGrid/MediaGrid";
// import ContentCarousel from "../../Components/ContentCarousel/ContentCarousel";
import { dummyHeroData, dummyMoviesList } from "../../utils/dummyData";

const TvShows = () => {
  return (
    <div className="page-container">
      {/* <HeroSlider items={[dummyHeroData[1]]} />
      <div className="section">
        <ContentCarousel title="New Episodes" items={dummyMoviesList.slice(0, 5)} />
        <ContentCarousel title="Emmy Winners" items={dummyMoviesList.slice(2, 6)} />
        <MediaGrid title="All TV Shows" items={dummyMoviesList} showFilters={true} />
      </div> */}
    </div>
  );
};

export default TvShows;