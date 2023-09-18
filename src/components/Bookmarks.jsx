import React, {useEffect, useState} from 'react';
import {getBookmarks} from '../api';
import Search from './Search';
export default function Bookmarks() {
  const [bookmarks, setbookmarks]= useState({bookmarkedMovies:[], bookmarkedTvSeries : []})

  const getData = async (title) =>{
    const results = await getBookmarks({title})
    const tempMovies ={bookmarkedMovies:[], bookmarkedTvSeries : []}
    for(const result of results){
      if(result.category==='Movie')tempMovies.bookmarkedMovies.push(result)
      else tempMovies.bookmarkedTvSeries.push(result)
    }
    setbookmarks(tempMovies)
  
}
console.log(bookmarks)
  useEffect(() => {
  getData()  
  return ()=>{
  }
  }, []
  );
  //prazan niz znaci kad se komponenta ucita i nikad vise se ne ponavalja
  return <> <Search placeholder='Search for bookmared shows'  setData={getData}/> </>;
}
