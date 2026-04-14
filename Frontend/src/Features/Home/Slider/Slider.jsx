import React, { useEffect, useState } from "react";
import sliderStyle from "./styles/slider.module.scss";

const Slider = () => {
  const slides = [
    { url: "https://www.coffeeandcigarettes.co.uk/wp-content/uploads/2017/08/LandOfMine_CCWebsite_1600x900-1.jpg", title: "Land Of Mine", desc: "desc" },
    { url: "https://i.pinimg.com/474x/42/75/01/42750115d68a876558e7e0115b6600c8.jpg", title: "Movie 2", desc: "desc" },
    { url: "https://www.tallengestore.com/cdn/shop/products/LordOfTheRings-FellowshipOfTheRing-HollywoodMoviePoster_b2a24ebf-61b1-48a2-8906-5707233906c8.jpg?v=1630764643", title: "Movie 3", desc: "desc" },
    { url: "https://img.freepik.com/premium-psd/stylish-movie-poster-with-lights_94574-32600.jpg", title: "Movie 4", desc: "desc" },
    { url: "https://cdna.artstation.com/p/assets/images/images/017/022/542/large/amirhosein-naseri-desktop-screenshot-2019-04-03-18-17-47-11.jpg?1554338571", title: "Movie 5", desc: "desc" },
  ];

  const extendedSlides = [...slides, slides[0]]; // 🔥 clone first slide

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle reset (magic part)
  useEffect(() => {
    if (currentIndex === slides.length) {
      setTimeout(() => {
        setIsTransitioning(false); // remove animation
        setCurrentIndex(0);        // jump to real first
      }, 600); // match CSS duration
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, slides.length]);

  return (
    <div className={sliderStyle.slider}>
      
      <div className={sliderStyle.viewport}>
        <div
          className={sliderStyle.track}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
          }}
        >
          {extendedSlides.map((slide, idx) => (
            <img key={idx} src={slide.url} alt={slide.title} />
          ))}
        </div>
      </div>

      <div className={sliderStyle.info}>
        <h2>{slides[currentIndex % slides.length].title}</h2>
        <p>{slides[currentIndex % slides.length].desc}</p>
        <button>Watch Now</button>
      </div>

    </div>
  );
};

export default Slider;