import { useEffect, useState } from 'react'
import React from 'react'
import StylesWeatherApp from './WeatherApp.module.css'
import WheaterForm from './WeatherForm'
import WheaterInfo from './WeatherInfo'
import Loading from './loading'

export default function WeatherApp() {

const [weather,setWeather] = useState(null)


useEffect(() => {
  loadInfo()
}, [])


useEffect(() => {
  document.title=`Weather | ${weather?.location.name ?? " " }`;

}, [weather])




  async function loadInfo(city="madrid"){
    try{
      const request = await fetch(`${import.meta.env.VITE_API_URL}&key=${import.meta.env.VITE_API_KEY}&q=${city}`);
      const cityData = await request.json();
      console.log(`${import.meta.env.VITE_API_URL}&key=${import.meta.env.VITE_API_KEY}&q=${city}&aqi=no`);

     
        setTimeout(() => {
            setWeather(cityData)
        }, 2000);
      console.log(cityData);

   

    } catch(error){

      console.log(error);

    }


  }

  function handleChangeCity(city){

    setWeather(null);
    loadInfo(city);
  }

 return(
  <div className={StylesWeatherApp.weatherContainer}>

    <h1>WeatherApp</h1><br/>
    <WheaterForm onChangeCity={handleChangeCity} />
    {weather ?  <WheaterInfo weather={weather}/> : <Loading/> }
   
  </div>


 )
}