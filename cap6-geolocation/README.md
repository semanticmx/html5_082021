# Geolocation API

The geolocation API let you share your location with trusted web sites.

To detect the geolocation, first, we have to add the object "navigator" (The navigator object contains information about the browser), after that, we add the "geolocation" property (Returns a Geolocation object that can be used to locate the user's position). Example: ```navigator.geolocation```

Lasty we add the ```getCurrentPosition``` fuction. This fuction will ask the user for permission. Example: ```navigator.geolocation.getCurrentPosition```

Now we can add two constants, one when the user accept the geolocation, and the other one when the user deny the geolocation. Full syntax:

```
const successCallback = (position) => {
    console.log(position);
}

const errorCallback = (error) => {
    console.log(error);
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
```
## Position Objects

There're different positioning objects, which are: *latitude, longitude, altitude, accuracy, altitude accuracy, heading, speed and timestamp*. Example:

```
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
```

### Position Option Objects

There're two ways to know geolocation, one of them is using different cellular towers operated by your phone carrier and the other one is using GPS positioning satellites that are orbiting the Earth.

based on the above, we can use three position option objects: *Eneable High Accuracy, timeout (is the number of milliseconds your web application is willing to wait for a position), maximum age (allows the device to answer immediately with a cached position)*. Example:

```
navigator.geolocation.getCurrentPosition(
  success_callback, error_callback, {maximumAge: 75000});
```

## Handling Errors

Different errors may occur, which are:
- PERMISSION_DENIED (1) if the user clicks that “Don’t Share” button or otherwise denies you access to their location.
- POSITION_UNAVAILABLE (2) if the network is down or the positioning satellites can’t be contacted.
- TIMEOUT (3) if the network is up but it takes too long to calculate the user’s position. How long is “too long”? I’ll show you how to define that in the next section.

You can handle these errors by sending a message to know what may occur. Example:

```
function handle_error(err) {
    if (err.code == 1) {
        console.log("User said no!");
    }
}
```
