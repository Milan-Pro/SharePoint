import * as $ from "jquery";

var getWeather = function(domElement) {
        var settings = {  
            "async": true,  
            "crossDomain": true,  
            "url": "https://api.openweathermap.org/data/2.5/weather?lat=25.2854&lon=51.5310&units=metric&appid=8419181060b4dc0a4080aca18bcd29b6",  
            "method": "GET",  
            "processData": false,  
            "contentType": false,  
            "mimeType": "multipart/form-data",  
        };

        console.log("getWeather()->Started! AJAX Call going out..");

        $.ajax(settings).done(function (response) {

            console.log("AJAX Call completed!");

            var data = JSON.parse(response);  
            var html = "";

            html = `<div>
                        Temp : ${ data.main.temp}°<br/>
                        Wind : ${ data.wind.speed} MPH <br/>
                        Humidity : ${ data.main.humidity } %<br/>
                        Pressure :  ${ data.main.pressure } °
                    </div>`;

            domElement.innerHTML = html;
        })  
        .fail(function (response) {  
            console.log("error fecting weather data" + response);  
        });  
    }

export default getWeather;
