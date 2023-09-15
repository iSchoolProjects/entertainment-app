import React, {useEffect, useState} from 'react';
import {getMovies} from '../api';
export default function TvSeries() {
  const [allSeries, setAllSeries]= useState([])

  const getData = async () =>{
    const result = await getMovies({category:'tv series'})
    setAllSeries(result.length)
  }
  useEffect(() => {
  getData()  
  }, []
  );
  return <div>home</div>;
}
