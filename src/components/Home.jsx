import React, {useEffect, useState} from 'react';
import {getMovies} from '../api';
export default function Home() {
  const [allMovies, setAllMovies]= useState([])

  const getData = async () =>{
    const result = await getMovies()
    setAllMovies(result)
  }
  useEffect(() => {
  getData()  
  }, []
  );
  //prazan niz znaci kad se komponenta ucita i nikad vise se ne ponavalja
  return <div>home</div>;
}
