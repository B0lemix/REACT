import React, { useState } from "react";
import StylesWeatherForm from './WeatherForm.module.css'

export default function WheaterForm({onChangeCity}){

    const [city,setCity]= useState("")

    function onChange(e){

        const value=e.target.value;
        (value !== "") ? setCity(value) : null
        
    }


    function handleSubmit(e){
        e.preventDefault();


        onChangeCity(city);

    }



    return(


        <form onSubmit={handleSubmit} className={StylesWeatherForm.container}>
            <input type="text" placeholder="Type a city..." onChange={onChange} className={StylesWeatherForm.input}></input>

        </form>
    )


}