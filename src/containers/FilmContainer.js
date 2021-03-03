import React, {useEffect, useState}  from "react";
import FilmSelector from "../components/FilmSelector";
import FilmDetails from "../components/FilmDetails";

const FilmContainer = () => {

    const [film, setFilm] = useState({})
    const [selectedFilmId, setSelectedFilmId] = useState(1);

    const [loaded, setLoaded] = useState(false); 

    const getFilm = () => {
        console.log("test");
        fetch(`https://rss.itunes.apple.com/api/v1/us/movies/top-movies/all/25/explicit.json${selectedFilmId}`)
        .then(res => res.json())
        .then(data => setFilm(data))
        .then(() => setLoaded(true))	
    }
    useEffect(() => {
        getFilm();
      }, [selectedFilmId])
    
      const incrementSelectedFilm = () => {
        setSelectedFilmId(selectedFilmId + 1);
    }
    
    const decrementSelectedFilm = () => {
      setSelectedFilmId(selectedFilmId - 1);
    }
    
      return (
        <>
        <h1>Film Details</h1>
        <FilmSelector 
          onSelectedFilmIncrement={() => incrementSelectedFilm()}
          onSelectedFilmDecrement={() => decrementSelectedFilm()}
        />
        <FilmDetails 
         film={film}	
         loaded={loaded}	
         />
      </>
      )
    
    }

export default FilmContainer;