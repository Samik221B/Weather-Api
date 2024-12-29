const apikey="f06699ab06e9e8d46db40683a0d3569f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// let btn=document.querySelector(".btn");
let weatherIcon=document.querySelector(".weather-icon");
let searchbox=document.querySelector(".search input");
let searchbtn=document.querySelector(".search button");

searchbtn.addEventListener("click",async ()=>{
    checkweather(searchbox.value);


});


async function checkweather(city)
{
    const res= await fetch( apiUrl+ city +`&appid=${apikey}`);
    let data= await res.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
    console.log(data.weather[0].main);

    if(data.weather[0].main =="Clouds")
    {
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main =="Clear")
    {
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        weatherIcon.src="images/mist.png";
    }
    else if(data.weather[0].main=="Snow")
    {
        weatherIcon.src="images/snow.png";
    }
    else if(data.weather[0].main=="Wind")
    {
        weatherIcon.src="images/wind.png";
    }
    else if(data.weather[0].main=="Smoke")
    {
        weatherIcon.src="images/atmosphere.png";
    }
    else if(data.weather[0].main=="Haze")
    {
        weatherIcon.src="images/atmosphere.png";
    }
    else if(data.weather[0].main=="Fog")
    {
        weatherIcon.src="images/fog.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        weatherIcon.src="images/mist.png";
    }


    let app=document.querySelector(".weather");
    app.style.display="block";
}
