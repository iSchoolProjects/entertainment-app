import React, { useEffect } from 'react'

export default function Home() {
    useEffect(()=>{
        getMovies()
    },[])
    //prazan niz znaci kad se komponenta ucita i nikad vise se ne ponavalja
  return (
    <div>home</div>
  )
}
