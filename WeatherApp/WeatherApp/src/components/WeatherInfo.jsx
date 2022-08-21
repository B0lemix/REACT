import React from "react";
import StylesWeatherInfo from './WeatherInfo.module.css'


export default function WeatherInfo({weather}){

    return(
        <div className={StylesWeatherInfo.info}>
                <div className={StylesWeatherInfo.city}>{weather?.location.name}</div>
                <div className={StylesWeatherInfo.country}>{weather?.location.country}</div>
                <div className={StylesWeatherInfo.row}>
                    <div>
                        <img 
                            src={`http:${weather?.current.condition.icon}`} 
                            width="128px" 
                            alt={weather?.current.condition.text}>
                                
                        </img>    
                    </div>
                    <div className={StylesWeatherInfo.weatherConditions}>

                        <div className={StylesWeatherInfo.condition}>{weather?.current.condition.text}</div>
                        <div className={StylesWeatherInfo.current}>{weather?.current.temp_c}º</div>
                    
                    </div>   



            </div>

            <div>
            
            <iframe 
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1306284.7503903154!2d${weather?.location.lon}2!3d${weather?.location.lat}1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1661081707597!5m2!1ses!2ses`}
                title="map"
                width="100%"
                height="450"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        
        
    </div>
    )
}