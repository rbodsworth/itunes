import React from "react";


const FilmDetails = ({film, loaded}) => {

    if (!loaded){											
        return <p>Loading...</p>
      }

  return (
    <>
        <h3>{film.title}</h3>	
      </>
      
      
      )


}

export default FilmDetails;