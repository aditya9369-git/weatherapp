// window.alert("Hi Hi");
//let apikey="196c23352824f676b941f86d91fc3cf7";
//let url= `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}&units=metric`;

async function weather() {
    let city_name = document.getElementById("search").value;
    let temp = document.getElementById("temp");
    let humid = document.getElementById("humid");
    let wind = document.getElementById("wind");
    let clouds=document.getElementById("clouds");
    let rain=document.getElementById("rain");
    let apikey = "196c23352824f676b941f86d91fc3cf7";
   // let apikey="ba2534551cb97f9acf08a28cffe96bbf"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}&units=metric`;
    //let url=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`


    if (city_name = "") {
        // window.alert("Please enter your city name ");
        return;
    }
    // let res = await fetch(url);
    //     let data = await res.json();
    //     console.log(data);

    //     city.innerHTML=data.name;
    //     temp.innerHTML=data.main.temp + "°C";
    //     humid.innerHTML=data.main.humidity + "%";
    //     wind.innerHTML=data.wind.speed + "m/s";
    //    clouds.innerHTML=data.clouds.oktas +"°";
    //    rain.innerHTML=data.rain.millimeters +"mm";
 
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);

        city.innerHTML = data.name;
        temp.innerHTML = data.main.temp + "°C";
        humid.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "m/s";
        clouds.innerHTML=data.clouds.all +"°";
        rain.innerHTML=data.rain.all +" 1h";
    
}