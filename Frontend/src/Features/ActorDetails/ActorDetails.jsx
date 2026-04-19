import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ActorDetails.module.scss";
import MediaGrid from "../../Components/MediaGrid/MediaGrid";
import { dummyActorDetails } from "../../utils/dummyData";
import { ActorDetailsHook } from "./hooks/ActorDetail.hook";


const ActorDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const {loading,handleActorDetails,ActorDetail}=ActorDetailsHook()

  async function fetchActordetails(id) {
    await handleActorDetails(id)
  }

  useEffect(()=>{
    fetchActordetails(id)
  },[])

  useEffect(()=>{
    if(ActorDetail!=0){
      console.log(ActorDetail.details)
      setData(ActorDetail.details)
    }
  },[ActorDetail])

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   setTimeout(() => {
  //      // Simulate fetching actor profile
  //      setData({ , id: id }); 
  //   }, 300);
  // }, [id]);

  if (!data) return <div style={{height: "100vh", display: "flex", alignItems:"center", justifyContent:"center"}}>Loading profile...</div>;

  return (
    <div className={styles.profileContainer}>
      <header className={styles.profileHeader}>
        <div className={styles.imageWrapper}>
          <img src={data.profile} alt={data.name} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.name}>{data.name}</h1>
          <div className={styles.meta}>
            <span>Born: {data.birthday}</span>
            <span>{data.place_of_birth}</span>
          </div>
          <h3 className={styles.bioTitle}>Biography</h3>
          <p className={styles.biography}>{data.biography}</p>
        </div>
      </header>

      <section className={styles.creditsSection}>
        {/* We reuse MediaGrid to display Known For items */}
        <MediaGrid title="Known For" items={data.credits.cast} />
        <MediaGrid title="Known For" items={data.credits.crew} />
      </section>
    </div>
  );
};

export default ActorDetails;
