import React, {useEffect, useState} from 'react';
import {getMovies} from '../api';
import { all } from 'axios';
export default function Home() {
  const [allMovies, setAllMovies]= useState({trending:[], recomended : []} )

  const getData = async () =>{
      const results = await getMovies()
      const tempMovies ={trending:[], recomended : []}
      for(const result of results){
        if(result.isTrending)tempMovies.trending.push(result)
        else tempMovies.recomended.push(result)
      }
      setAllMovies(tempMovies)
    
  }
  console.log(allMovies)
  useEffect(() => {
  getData()  
  }, []
  );
  return <div>

  </div>;
}
