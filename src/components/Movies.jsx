import React, {useEffect, useState} from 'react';
import {getMovies} from '../api';
import Search from './Search';
export default function Movies() {
  const [singleMovie, setSingleMovie] = useState([]);

  const getData = async (title) => {
    const result = await getMovies({title, category: 'movie'});
    setSingleMovie(result.length);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Search placeholder="Search for movies" setData={getData} />
    </>
  );
}
