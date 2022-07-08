// 29ac1cec3ed69ef63670316dd9cd7bec
//https://api.openweathermap.org/data/2.5/weather?q=pakistan&appid=29ac1cec3ed69ef63670316dd9cd7bec
import React, { useEffect, useState } from 'react'
import Weathercard from './Weathercard'
import './style.css'
const Temp = () => {
    const [searchValue,setSearchValue]=useState("pakistan")
    const [tempInfo,setTempInfo]=useState({})
    const getWeatherInfo= async() =>{
try {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=29ac1cec3ed69ef63670316dd9cd7bec`
    const res=await fetch(url);
    const data=await res.json();

    const{temp,humidity,pressure}=data.main;
    const{main:weathermood}=data.weather[0]
    const {name}=data;
    const {speed}=data.wind;
    const {country,sunset}=data.sys;
    const myNewWeatherInfo={
        temp,humidity,pressure,weathermood,name,speed,country,sunset,
    }
    setTempInfo(myNewWeatherInfo);
    console.log(temp)
} catch (error) {
    console.log(error)
}
    }
    useEffect(()=>{
getWeatherInfo()
    },[])
  return (
    <>
      <div className="wrap">
<div className="search">
<input type="search" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} classname="searchTerm" id="search" placeholder='search' autoFocus />
<button className="searchButton" type='button' onClick={getWeatherInfo}>Search</button>
</div>
      </div>
<Weathercard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp
