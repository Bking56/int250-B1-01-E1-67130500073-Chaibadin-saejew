
document.getElementById('convert-temp').addEventListener('click', function() {
    let celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {

        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } else {
        alert("Please enter a valid number for Celsius.");
    }
});

document.getElementById('convert-weight').addEventListener('click', function() {

    let kg = parseFloat(document.getElementById('kilograms').value);
    
    if (!isNaN(kg)) {
        let lbs = kg * 2.205;
        document.getElementById('pounds').value = lbs.toFixed(2);
    } else {
        alert("Please enter a valid number for Kilograms.");
    }
});

document.getElementById('convert-distance').addEventListener('click', function() {
    let km = parseFloat(document.getElementById('kilometers').value);
    
    if (!isNaN(km)) {
        let miles = km / 1.609;
        document.getElementById('miles').value = miles.toFixed(2);
    } else {
        alert("Please enter a valid number for Kilometers.");
    }
});