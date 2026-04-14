import cardStyle from './card.module.scss'
import {Bookmark,Heart}  from 'lucide-react'
const Card = () => {
  return (
    <div className={cardStyle.cardContainer}>
      <div className={cardStyle.cardImage}>
        <img src="https://m.media-amazon.com/images/M/MV5BMzFiNTVkZjYtM2I3Yi00MGNjLWEyYTAtMGViNGExZmMzMGMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" />
      </div>
      <div className={cardStyle.cardinfo}>
        <h2>Dhurandhar</h2>
        <div className={cardStyle.cardaddinfo} >
          <h3>Rating 9/10</h3>
          <div> 
            <Bookmark />
          <Heart />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
