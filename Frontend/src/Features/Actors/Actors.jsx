import React from "react";
import { Link } from "react-router-dom";
import styles from "./Actors.module.scss";
import { dummyActorsList } from "../../utils/dummyData";

const Actors = () => {
  return (
    <div className={styles.gallery}>
      <h1 className={styles.title}>Popular Actors</h1>
      
      <div className={styles.grid}>
        {dummyActorsList.map(actor => (
          <Link to={`/actor/${actor.id}`} key={actor.id} className={styles.actorCard}>
            <div className={styles.imageWrapper}>
              {actor.profile_path ? (
                 <img src={actor.profile_path} alt={actor.name} />
              ) : (
                 <div style={{width:'100%', height:'100%', background:'var(--bg-tertiary)'}}></div>
              )}
            </div>
            <h3 className={styles.name}>{actor.name}</h3>
            <span className={styles.department}>{actor.known_for_department}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Actors;
