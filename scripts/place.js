const today = new Date();
today.getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;


document.getElementById("windchill").innerHTML = (windChillResult = calculateWindChill(5, 10, 'C')) === "N/A" ? "N/A" : windChillResult.toFixed(1) + "&deg;C";

// windchill function
function calculateWindChill(temperature, windSpeed, unit = 'C') {
    // Validate inputs
    if (unit === 'C') {
        // Celsius: temp <= 10°C and wind > 4.8 km/h
        if (temperature <= 10 && windSpeed > 4.8) {
            // Wind chill formula for Celsius
            // WC = 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
            const windChillC = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
            return windChillC;
        }
    } else if (unit === 'F') {
        // Fahrenheit: temp <= 50°F and wind > 3.0 mph
        if (temperature <= 50 && windSpeed > 3.0) {
            // Wind chill formula for Fahrenheit
            // WC = 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
            const windChillF = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            return windChillF;
        }
    }
    return "N/A";
}