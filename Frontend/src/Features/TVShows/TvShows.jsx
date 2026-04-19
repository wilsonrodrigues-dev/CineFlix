import React, { useEffect, useState } from "react";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import MediaGrid from "../../Components/MediaGrid/MediaGrid";
import ContentCarousel from "../../Components/ContentCarousel/ContentCarousel";
import { dummyHeroData, dummyMoviesList } from "../../utils/dummyData";
import { useTvShows } from "./hooks/useTvShows.js";

const TvShows = () => {
  const { loading, handleTvShows, TvShows } = useTvShows();
  const [airingtoday, setAiringtoday] = useState(null);
  const [popular, setPopular] = useState(null);
  const [ontheair, setOntheair] = useState(null);
  const [toprated, setToprated] = useState(null);
  const [trending, setTrending] = useState(null);

  async function fetchTvShows() {
    await handleTvShows();
  }


  const setalldata=()=>{
    setAiringtoday(TvShows.airingToday.results)
    setOntheair(TvShows.onTheAir.results)
    setPopular(TvShows.popular.results)
    setToprated(TvShows.topRated.results)
    setTrending(TvShows.trending.results)
    console.log("done")
  }
  useEffect(() => {
    fetchTvShows();
  }, []);

useEffect(() => {
  if (TvShows && TvShows.airingToday) {
    setalldata();
  }
}, [TvShows]);

  if (loading || TvShows<=0) {
    return <h1 style={{ fontSize: "100px" }}>loading....</h1>;
  } else {
    
    return (
      <div className="page-container">
        <HeroSlider items={airingtoday>0 ? airingtoday.slice(0,6):airingtoday} />
        <div className="section">
          <ContentCarousel
            title="New Episodes"
            items={ontheair}
          />
          <ContentCarousel
            title="Trending"
            items={trending}
          />
          <MediaGrid
            title="All TV Shows"
            items={popular,toprated}
            showFilters={true}
          />
        </div>
      </div>
    );
  }
};

export default TvShows;
