import React, { useEffect, useState } from "react";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import ContentCarousel from "../../Components/ContentCarousel/ContentCarousel";
import { useHomeMedia } from "./hooks/home.hook";
import Sceleton from "../../Components/Sceleton";

const Home = () => {
  const { loading, media, handleGetHomeData } = useHomeMedia();

  useEffect(() => {
    handleGetHomeData();
  }, []);



  const trendingMovies = media.filter((item) => item.type === "movie");
  const trendingTv = media.filter((item) => item.type === "tv");


  if (loading || !media.length) {
      console.log("loading")
    return <Sceleton />;
  }

  //   if (loading) {
  //     return <h1>Loading....</h1>;
  //   }

  //   if (!media.length) {
  //   return <h1>No data available right now 😔</h1>;
  // }

  return (
    <div className="page-container">
      <HeroSlider items={Array.isArray(media) ? media.slice(0, 6) : []} />
      <div className="section">
        <ContentCarousel title="Continue Watching" items={trendingMovies} />
        <ContentCarousel title="Trending TV Shows" items={trendingMovies} />
        <ContentCarousel title="Top Rated Movies" items={trendingTv} />
      </div>
    </div>
  );
};

export default Home;
