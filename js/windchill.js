let temperature = document.getElementById('temperature').textContent;
let speed = document.getElementById('speed').textContent;

if(temperature <=10 && speed >= 4.8){
    let exponent = Math.pow(speed, 0.16);
    let windchill = 35.74 + 0.6215 * temperature - 35.75 * exponent + 0.4275 * temperature * exponent;
    let output = windchill.toFixed(0); 
    document.getElementById('windchill').textContent = output + "°";  
}

else{
    document.getElementById('windchill').textContent = "N/A";
}