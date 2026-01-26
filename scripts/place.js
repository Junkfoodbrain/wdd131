const today = new Date();
today.getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;


// document.getElementById("windchill").innerHTML = calculateWindChill(28, 18, 'C').toFixed(1) + "&deg;C";

// Wind chill calculation - only displays if temp <= 10°C and wind > 4.8 km/h
const windChillResult = calculateWindChill(5, 10, 'C');
if (windChillResult === "N/A") {
    document.getElementById("windchill").innerHTML = "N/A";
} else {
    document.getElementById("windchill").innerHTML = windChillResult.toFixed(1) + "&deg;C";
}

// windchill function
function calculateWindChill(temperature, windSpeed, unit = 'C') {
    // Validate inputs
    if (unit === 'C') {
        // Celsius: temp <= 10°C and wind > 4.8 km/h
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChillC = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
            return windChillC;
        }
    } else if (unit === 'F') {
        // Fahrenheit: temp <= 50°F and wind > 3.0 mph
        if (temperature <= 50 && windSpeed > 3.0) {
            const windChillF = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            return windChillF;
        }
    }
    return "N/A";
}

