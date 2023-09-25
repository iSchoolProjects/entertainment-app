import React, {useEffect, useState} from 'react';
import {getMovies} from '../api';
import Search from './Search';
export default function TvSeries() {
  const [allSeries, setAllSeries] = useState([]);

  const getData = async (title) => {
    const result = await getMovies({title, category: 'tv series'});
    setAllSeries(result.length);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Search placeholder="Search for TV series" setData={getData} />
    </>
  );
}
