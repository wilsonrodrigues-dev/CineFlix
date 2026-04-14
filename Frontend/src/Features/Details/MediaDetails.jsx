import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MediaDetails.module.scss";
import { Play, Plus, Video } from "lucide-react";
import { dummyDetailsData, dummyMoviesList } from "../../utils/dummyData";
import ContentCarousel from "../../Components/ContentCarousel/ContentCarousel";
import { useMediaDetails } from "./hooks/detail.hook";
// import { details } from "./sampleinfo.js";

const MediaDetails = () => {
  const { type, id } = useParams();
  const [data, setData] = useState(null);
  const [recomendation, setRecomendation] = useState(null);
  const [crew, setCrew] = useState(null);
  const [cast, setCast] = useState(null);

  const { loading, details, handleMediaDetails } = useMediaDetails();

  const setAlldata = async () => {
    await handleMediaDetails(type, id);
  };

  useEffect(() => {
    console.log("running");
    setAlldata();
  }, []);

  useEffect(() => {
    setData(details.details);
    setRecomendation(details.recommendations);
    setCast(details.cast);
    setCrew(details.crew);
  }, [details]);


  if (!data) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading details...
      </div>
    );
  }

  return (
    <div className={styles.detailsContainer}>
      <header className={styles.hero}>
        <img src={data.backdrop} alt={data.title} className={styles.backdrop} />
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <div className={styles.posterWrapper}>
            <img src={data.poster} alt="Poster" className={styles.poster} />
          </div>

          <div className={styles.info}>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.meta}>
              <span className={styles.rating}>★ {data.rating}</span>
              <span>{data.date?.split("-")[0]}</span>
              <span>
                {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
              </span>
            </div>

            <div className={styles.genres}>
              {data.genres?.map((g) => (
                <span key={g.id}>{g.name}</span>
              ))}
            </div>

            <h3 className={styles.overviewTitle}>Overview</h3>
            <p className={styles.overview}>{data.desc}</p>

            <div className={styles.actions}>
              <button className={styles.btnPrimary}>
                <Play size={20} fill="currentColor" /> Play Now
              </button>
              <button className={styles.btnSecondary}>
                <Video size={20} /> Trailer
              </button>
              <button className={styles.btnSecondary}>
                <Plus size={20} /> Add to List
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.detailsSection}>
        <ContentCarousel title="Cast" items={cast} />
        <ContentCarousel title="Crew" items={crew} />
        <ContentCarousel title="Recommended" items={recomendation} />
      </main>
    </div>
  );
};

export default MediaDetails;
