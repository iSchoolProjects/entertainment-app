import React, {useEffect, useState} from 'react';

export default function Search ({setData, placeholder}) {
    const[title, setTitle] = useState('')
    
    const getData = async (e) =>{
        setTitle(e.target.value)
        if(e.target.value.length >= 3){
        setData(e.target.value)
        }
      }
  return (
    <div className='search'>
    <img className='search-icon' src="./assets/icon-search.svg" alt="" />
    <input type="text"
    onChange={getData}
    placeholder={placeholder}value={title} />
    </div>
  )
}
//search ima input polje, state koji se zove title, i na change ce ispaljivati
//api poziv pod sl.usloivma:
//ako smo na home page saljemo api ka getall s tim sto u parametru saljemo title
//ako smo na str za filmove saljemo title sa kategorijom filmovi
//filmove, srije primoamo kroz props