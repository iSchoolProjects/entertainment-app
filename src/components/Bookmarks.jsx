import React, {useEffect, useState} from 'react';
import {getBookmarks} from '../api';
import Search from './Search';
export default function Bookmarks() {
  const [bookmarks, setbookmarks]= useState({bookmarkedMovies:[], bookmarkedTvSeries : []})

  const getData = async (ids) =>{
    const results = await getBookmarks(ids)
    const tempMovies ={bookmarkedMovies:[], bookmarkedTvSeries : []}
    for(const result of results){
      if(result.category==='Movie')tempMovies.bookmarkedMovies.push(result)
      else tempMovies.bookmarkedTvSeries.push(result)
    }
    setbookmarks(tempMovies)
  
}
  useEffect(() => {
  const bookmarks=JSON.parse(localStorage.getItem('bookmarks'))
      getData(bookmarks)  
  }, []
  );
  //[] - SLUZI Da bi osluskivao promjene na stateful vr.(react state, hook-ovi)
  //kad se aplikacija ucita procitmao local storage pod kljucem bookmarks, i rez saljemo
  //api pozivu
  //prazan niz znaci kad se komponenta ucita i nikad vise se ne ponavalja
  return <> <Search placeholder='Search for bookmared shows'  setData={getData}/> </>;
}
