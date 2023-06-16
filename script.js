
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dataField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather condition span");
const searchField = document.querySelector(".searchField");
const form =  document.querySelector("form");

let target = "london"

form.addEventListener("submit",function(e){
    e.preventDefault();
    target=searchField.value;
    console.log(target);
    fetchdata(target);
})

async function fetchdata(target){
    try{
        let url = `https://api.weatherapi.com/v1/current.json?key=3cd66344bfc843ea8c084210231306&q=London&aqi=no`
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
        condole.log(error);
    }
}

function updateDOM(temp,locationName,time,emoji,condition){
    let exactTime = time.split(" ")[1];
    let exactDate = time.split(" ")[0];
    let countofDay = new Date(exactDate).getDay();
    let nameofday = getNameofDay(countofDay);
    dateField.innerText = `${exactTime} ${nameofDay} ${exactDate}`
    temperatureField.innerText
}