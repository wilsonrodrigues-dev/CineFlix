import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContentCarousel.module.scss";

const ContentCarousel = ({ title, items, defaultMediaType = "movie" }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className={styles.carouselWrapper}>
      {title && <h2 className="section-title">{title}</h2>}
      <div className={styles.carousel}>
        {items.map((item,index) => {
          const type = item.type || defaultMediaType;
          const routeStr = `/${type}/${item.id}`;
          return (
            <Link to={routeStr} key={`${type}-${item.id}-${index}`} className={styles.card}>
              {item.poster || item.profile ? (
                 <img src={item.poster || item.profile} alt={item.title || item.name} className={styles.poster} />
              ) : (
                 <div className={styles.poster}></div>
              )}
              <div className={styles.overlay}>
                <h3 className={styles.title}>{item.title || item.name}</h3>
                <span className={styles.meta}>Rating: {item.rating ? item.rating.toFixed(1) : "N/A"}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContentCarousel;
