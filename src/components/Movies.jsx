import React, {useEffect, useState} from 'react';
import {getMovies} from '../api';
export default function Movies() {
  const [singleMovie, setSingleMovie]= useState([])

  const getData = async () =>{
    const result = await getMovies({category:'movie'})
    setSingleMovie(result.length)
  }
  useEffect(() => {
  getData()  
  }, []
  );
  console.log(singleMovie)
  //prazan niz znaci kad se komponenta ucita i nikad vise se ne ponavalja
  return <div>home</div>;
}
