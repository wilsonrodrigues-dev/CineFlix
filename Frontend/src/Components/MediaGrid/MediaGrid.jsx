import React from "react";
import { Link } from "react-router-dom";
import styles from "./MediaGrid.module.scss";

const MediaGrid = ({ title, items, showFilters = false, defaultMediaType = "movie" }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className={styles.gridWrapper}>
      {title && <h2 className="section-title">{title}</h2>}
      
      {showFilters && (
        <div className={styles.filters}>
          <select defaultValue="popular">
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="new">Newly Added</option>
          </select>
          <select defaultValue="all">
            <option value="all">All Genres</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="scifi">Sci-Fi</option>
          </select>
        </div>
      )}

      <div className={styles.grid}>
        {items.map((item) => {
          const type = item.media_type || defaultMediaType;
          const routeStr = `/${type}/${item.id}`;
          return (
            <Link to={routeStr} key={item.id} className={styles.card}>
              {item.poster_path ? (
                 <img src={item.poster_path} alt={item.title || item.name} className={styles.poster} />
              ) : (
                 <div className={styles.poster}></div>
              )}
              <div className={styles.overlay}>
                <h3 className={styles.title}>{item.title || item.name}</h3>
                <span className={styles.meta}>Rating: {item.vote_average ? item.vote_average.toFixed(1) : "N/A"}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MediaGrid;
