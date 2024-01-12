import React, { useState } from 'react';
import './WeatherApp.css';
import clear_icon from "../Asset/clear.png";
import search_icon from "../Asset/search.png";
import cloud_icon from "../Asset/cloud.png";
import drizzle_icon from "../Asset/drizzle.png";
import humidity_icon from "../Asset/humidity.png";
import rain_icon from "../Asset/rain.png";
import snow_icon from "../Asset/snow.png";
import wind_icon from "../Asset/wind.png";

const WeatherApp = () => {
  const [searchValue, setSearchValue] = useState("");
  const [cityInfo, setCityInfo]=  useState('');
  let apiKey = "96de36ed9caec0c1e36d60906d770551";

const search = async () => {  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${apiKey}`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    setCityInfo(data);
    
   
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const weatherIcons = {
  '01d': clear_icon, 
  '01n': clear_icon, 
  '02d': cloud_icon, 
  '02n': cloud_icon, 
  '03d': cloud_icon, 
  '03n': cloud_icon, 
  '04d': cloud_icon, 
  '04n': cloud_icon, 
  '09d': drizzle_icon, 
  '09n': drizzle_icon, 
  '10d': rain_icon,
  '10n': rain_icon, 
  '11d': rain_icon, 
  '11n': rain_icon, 
  '13d': snow_icon, 
  '13n': snow_icon, 
  '50d': humidity_icon,
  '50n': humidity_icon, 
};


  return (
    <div className='contanier'>
      <div className='top-bar'>
        <input type="text" className='city' placeholder='search' onChange={(e)=>{
          setSearchValue(e.target.value);
        }} />
        <div className='search-icon' onClick={()=>{search()}}>
        <img src={search_icon} alt="" />
        </div>
        
        
      </div>
      <div className='weather-img'>
            <img src={weatherIcons[cityInfo?.weather?.[0]?.icon] ? weatherIcons[cityInfo?.weather?.[0]?.icon] : clear_icon } alt="" />
        </div>
        <div className='weather-temp'> {cityInfo?.main?.temp ? cityInfo?.main?.temp + " °C" : '0 °C'} </div>
        <div className='weather-location'>{cityInfo?.name ? cityInfo?.name : "City Name"}</div>
        <div className='data-contanier'>
            <div className='element'>
                <img src={humidity_icon} alt="" srcset=""  className='icon'/>
                <div className='data'>
                <div className='humidity-percentage'>{cityInfo?.main?.humidity ? cityInfo?.main?.humidity + " %" : '0 %'}</div>
                <div className='text'>Humidity</div>
                </div>
                
            </div>
            <div className='element'>
                <img src={wind_icon} alt="" srcset="" className='icon' />
                <div className='data'>
                <div className='wind-speed'>{cityInfo?.wind?.speed ? cityInfo?.wind?.speed + " Km/h" : '0 Km/h'}</div>
                <div className='text'>Wind Speed</div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default WeatherApp
