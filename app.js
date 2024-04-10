

const apiKey = `0c373ca27e6d9fb224e4cb34504aeadc`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

let inputCity = document.querySelector('.search > input');
let searchButton = document.querySelector('.search > button');


async function chekWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';

}



searchButton.addEventListener("click", () => {

    chekWeather(inputCity.value);
});










