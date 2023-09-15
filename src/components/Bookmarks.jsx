import React, {useEffect, useState} from 'react';
import {getBookmarks} from '../api';
export default function Bookmarks() {
  const [bookmarks, setbookmarks]= useState({bookmarkedMovies:[], bookmarkedTvSeries : []})

  const getData = async () =>{
    const results = await getBookmarks()
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
    console.log('sajajs')
  }
  }, []
  );
  //prazan niz znaci kad se komponenta ucita i nikad vise se ne ponavalja
  return <div>home</div>;
}
