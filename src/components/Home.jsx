import React, {useEffect, useState} from 'react';
import {getMovies} from '../api';
import Search from './Search';

export default function Home() {
  const [allMovies, setAllMovies]= useState({trending:[], recomended : []} )

  const getData = async (title) =>{
      const results = await getMovies({title})
      const tempMovies ={trending:[], recomended : []}
      for(const result of results){
        if(result.isTrending)tempMovies.trending.push(result)
        else tempMovies.recomended.push(result)
      }
      setAllMovies(tempMovies)
    
  }
  useEffect(() => {
  getData()  
  }, []
  );
  console.log(allMovies)
  return <>
        <Search placeholder='Search for movies or TV series'  setData={getData}/>

  </>;
}
