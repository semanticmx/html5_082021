//Basic geolocation API

const successCallback = (position) => {
    console.log(position);
}

const errorCallback = (error) => {
    console.log(error);
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


//Geolocation objects
/*
navigator.geolocation.getCurrentPosition(show_map, handle_error);

function show_map(position){
    var acc = position.coords.accuracy;
    var alt = position.coords.altitude;
    var AltAcc = position.coords.altitudeAccuracy;
    var head = position.coords.heading;
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var sp = position.coords.speed; 
    console.log(position);
}

function handle_error(err) {
    if (err.code == 1) {
        console.log("User said no!");
    }
}
*/



