function toFarenheit(as_kelvin) {
    return Math.round((9/5) * as_kelvin - 459.67);
}


function getTemperatureColor(temperature) {
    if (temperature >= 90)
        return "#ff1a1a";
    else if (temperature >= 80 && temperature < 90)
        return "#ff751a";
    else if (temperature >= 70 && temperature < 80)
        return "#33ff33";
    else if (temperature >= 60 && temperature < 70)
        return "#33ffff";
    else if (temperature >= 50 && temperature < 60)
        return "#80ffff";
    else if (temperature >= 40 && temperature < 50)
        return "#4dc3ff";
    else if (temperature >= 30 && temperature < 40)
        return "#1a75ff";
    else if (temperature < 30)
        return "#1a1aff";
}

$('.marquee').marquee({
    //speed in milliseconds of the marquee
    duration: 15000,
    //gap in pixels between the tickers
    gap: 1600,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
});


//Retrieve weather data
$.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=32603,us&APPID=a6a2ea29ae772c68a75928e9e276118d", function (result) {
    var temperature = toFarenheit(result.main.temp);

    $("#temperature-display span").text(temperature + " ° F");
    $("#temperature-display span").css("color", getTemperatureColor(temperature));


    $("#condition-display span").text(result.weather[0].description);
    $("#cloudiness-display span").text(result.clouds.all + " %");
});
