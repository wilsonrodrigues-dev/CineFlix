import { useEffect,useState } from "react";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import MediaGrid from "../../Components/MediaGrid/MediaGrid";
import { dummyHeroData, dummyMoviesList } from "../../utils/dummyData";
import { useMoviedata } from "./hooks/useMoviedata.js";

const Movies = () => {
  const { loading, MovieData, handleGetMovieData } = useMoviedata();
  const [trending, setTrending] = useState(null)
  const [popular, setPopular] = useState(null)
  const [toprated, setToprated] = useState(null)
  const [nowplaying, setNowplaying] = useState(null)


  async function fetchmoviedata() {
    await handleGetMovieData();
    
  }

  const setmoviedata=()=>{
    setTrending(MovieData.trending.results)
    setPopular(MovieData.popular.results)
    setNowplaying(MovieData.nowPlaying.results)
    setToprated(MovieData.topRated.results)
  }

  useEffect(() => {
    console.log("running")
    fetchmoviedata()
  }, []);
  useEffect(()=>{
    if(MovieData!=0){
      console.log(MovieData)
      setmoviedata();
    }
  },[MovieData])

  if (loading) {
    return <h1 style={{ fontSize: "100px" }}>loading....</h1>;
  } else {
    return (
      <div className="page-container">
        <HeroSlider items={trending? trending.slice(0,9):[]} />
        <div className="section">
          <MediaGrid
            title="All Movies"
            items={popular,nowplaying,toprated}
            showFilters={true}
          />
        </div>
      </div>
    );
  }
};

export default Movies;
