var temperatursCelcius = [32, 4, 77, -62, -2222293.15]
// // for loop for(start, condition, incrementor)

//TODO create a loop that calculates the celcius in Fahrenheit and in Kelvin

// C => F = C*1.8+32
// C => K = C+273,15
for (var i = 1; i < temperatursCelcius.length; i++) {
    console.log("C: " + temperatursCelcius[i])
    console.log("F: " + Number(temperatursCelcius[i] * 1.8 + 32))
    //TODO if result is lower than 0, return 0
    var kalvin = Number(temperatursCelcius[i] + 273.15)
    if (kalvin < 0) {
        kalvin = 0
    }
    console.log("K: " + kalvin)
}