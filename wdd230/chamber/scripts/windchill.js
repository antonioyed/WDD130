
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const anWind =document.querySelector('#aswind');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Trujillo,PE&appid=27653fb63d536c2f8ab27205805b2786&units=imperial"


const requestData = async(url)=>{
    const response = await fetch(url);
    console.log(response);

    if(response.ok === true){
        const data = await response.json();
        console.log(data);
        displayResults(data);
    }
    else{
        console.log("Someting went wrong, please recheck your URL or API.");
    }
};

function weather(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const displayResults = (weatherData)=>{
    let temperature = parseInt(weatherData.main.temp);
    currentTemp.innerHTML = `<strong>${temperature}</strong>`;

    let wSpeed = weatherData.wind.speed;
    anWind.innerHTML = wSpeed;

    const iconImg = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
    const descript = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconImg);
    weatherIcon.setAttribute('alt','weather-icon');

    captionDesc.innerText = weather(descript);



    const whChill = (35.74 + (0.6212 * temperature))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275 * temperature * Math.pow(wSpeed,0.16));

    const windChill = Math.round(whChill);
    const windChillNan = 'N/A';
    if (temperature <= 50 && wSpeed > 3){
        document.querySelector('#windChill').innerHTML = windChill;
    }   else{
        document.querySelector('#windChill').innerHTML = windChillNan;
    }




}



requestData(url);




