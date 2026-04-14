import React, { useState, useEffect } from "react";
import styles from "./HeroSlider.module.scss";
import { Play, Info } from "lucide-react";

const HeroSlider = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);



    useEffect(() => {
      if (!items || items.length === 0) return;
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [items]);

    if (!items || items.length === 0) return null;

  return (
    <div className={styles.heroContainer}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
        >
          <img
            src={item.backdrop}
            alt={item.title || item.name}
            className={styles.backdrop}
          />
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title || item.name}</h1>
            <p className={styles.overview}>{item.desc}</p>
            <div className={styles.actions}>
              <button className={styles.btnPrimary}>
                <Play size={20} fill="currentColor" /> Play Now
              </button>
              <button className={styles.btnSecondary}>
                <Info size={20} /> More Info
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
