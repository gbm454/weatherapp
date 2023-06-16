
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form =  document.querySelector("form");

let target = "London"

form.addEventListener("submit",function(e){
    e.preventDefault();
    target=searchField.value;
    fetchData(target);
})

async function fetchData(target){
    try{
        let url = `https://api.weatherapi.com/v1/current.json?key=3cd66344bfc843ea8c084210231306&q=${target}&aqi=no`
        let response = await fetch(url);
        let data = await response.json();
        let currentTemp = data.current.temp_c;
        let currentCondition = data.current.condition.text;
        let locationName = data.location.name;
        let localTime = data.location.localtime;
        let conditionEmoji = data.current.condition.icon;

        updateDOM(currentTemp,locationName,localTime,conditionEmoji,currentCondition)
    }
    catch(error){
        alert("please put a valid location");
        console.log(error);
    }
}

function updateDOM(temp,locationName,time,emoji,condition){
    let exactTime = time.split(" ")[1];
    let exactDate = time.split(" ")[0];
    let countOfDay = new Date(exactDate).getDay();
    let nameofDay = getNameOfDay(countOfDay);
    dateField.innerText = `${exactTime} ${nameofDay} ${exactDate}`
    temperatureField.innerText = temp;
    cityField.innerText = locationName;
    emojiField.src = emoji;
    weatherField.innerText = condition;
}

let dayObject = {
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday"
}

function getNameOfDay(num){
    return dayObject[num];
}
fetchData(target);