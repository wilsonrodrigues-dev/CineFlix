import React, { useRef } from "react";
import Card from "../Components/Card";
import trendingStyle from "./trending.module.scss";
import { ArrowBigLeft, ArrowLeft, ArrowRight } from "lucide-react";

const Trending = () => {
  const containerRef = useRef(null);

  const cardScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300, // scroll distance
        behavior: "smooth", // smooth animation
      });
    }
  };

  const backScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300, // scroll distance
        behavior: "smooth", // smooth animation
      });
    }  };

  return (
    <div style={{ padding: "20px",position:"relative" }}>
      <h1>Trending</h1>

      <div className={trendingStyle.cordholder} ref={containerRef}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={trendingStyle.arrowholder}>
        <ArrowLeft onClick={backScroll} className={trendingStyle.arrow} size={40} />
        <ArrowRight onClick={cardScroll} className={trendingStyle.arrow} size={40} />
      </div>
    </div>
  );
};

export default Trending;