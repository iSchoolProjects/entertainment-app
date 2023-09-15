import React, {useEffect} from 'react';
import {getMovies} from '../api';
export default function Home() {
  useEffect(() => {
    getMovies();
  }, []);
  //prazan niz znaci kad se komponenta ucita i nikad vise se ne ponavalja
  return <div>home</div>;
}
