# Detecting HTML5 Features
Next is detailed HTML5 detection techniques, these techniques help us to know which features are available in the browser.

When a browser loads a web page, it constructs a Document Object Model (DOM), DOM is a programming API, it defines the logical structure of documents and the way a document is accessed and manipulated. 

Last but not least, Application Programming Interfaces (APIs) are a collection of JS libraries that can be used directly in HTML files.

In conclusion, when a browser loads a web page creates a DOM, to know which features are supported we can check within the DOM

## Why detect features?
To build a perfect web page from the beginning, we have to go through the supported features, otherwise, we can lose lots of time working on the code to find out that it doesn't work.

## Modernizr
Modernizr collects all the necessary tests or "detections" which we can run on a web page.

On the official Modernizr web page, you can select the detects that you need or all the detections that Modernizr has available. Modernizr gather all the selected tests and print them into a .js file

## Frequently APIs used
The following part is a list with descriptions of the more frequently APIs used in HTML5.

There're two ways to script an API test. You can use modernizr, which is the easiest way to do it,  just connect modernizr to the HTML file. The other way is to do the script yourself.

### Canvas
Canvas is a container used to draw graphics on a web page, via JavaScript.

JavaScript code:
```
    <script defer> 
    try {
        document.createElement("canvas").getContext("2d");
        alert("HTML5 Canvas is supported.");
    } catch (e) {
        alert("HTML5 Canvas is not supported.");
    }   
    </script> 
```

Modernnizr code:
```
    if (Modernizr.canvas) {
        // let's draw some shapes!
    } else {
        // no native canvas support available :(
    }
```

### Canvas Text
Canvas Text is just text drawn in a canvas container. ¿Why do we have to look out for the browser's canvas text support? Canvas Text API was added late after Canvas API. So some browsers could support Canvas API but might not Canvas API.

Modernnizr code:
```
    if (Modernizr.canvastext) {
        // let's draw some text!
    } else {
        // no native canvas text support available :(
    }   
```

### Video
Video API allows to embed videos into the web page.

Modernnizr code:
```
    if (Modernizr.video) {
        // let's play some video!
    } else {
        // no native video support available :(
    }
```

### Video Formats
A video has different formats. These formats are called codecs. Codecs are algorithms used to encode the video into a stream of bits. 

Every browser supports a specific type of code, so you got to run a check for the common browsers.

Modernnizr code:
```
    if (Modernizr.video) {
    // let's play some video! but what kind?
        if (Modernizr.video.webm) {
            // try WebM
        } else if (Modernizr.video.ogg) {
            // try Ogg Theora + Vorbis in an Ogg container
        } else if (Modernizr.video.h264){
            // try H.264 video + AAC audio in an MP4 container
        }
    }
```

### Local Storage
Storage provides a way for browsers to store information on your computer, in a similar way to cookies but larger quantities of data.

Modernnizr code:
```
    if (Modernizr.localstorage) {
        // window.localStorage is available!
    } else {
        // no native support for local storage :(
        // try a fallback or another third-party solution
    }
```

### Web Workers
Web Workers provide a way for browsers to run JavaScript in the background. Web Workers allows to spawn multiple "threads" that can run at the same time. 

These background threads allows to do background process while the main web page respond to the user. 

Modernnizr code:
```
    if (Modernizr.webworkers) {
        // window.Worker is available!
    } else {
        // no native support for web workers :(
    }
```

### Offline Web Applications
When a web page is loaded, downloads all the necessary files, So once the user goes offline, they'll be able to use the downloaded page or pages. 

Modernnizr code:
```
    if (Modernizr.applicationcache) {
        // window.applicationCache is available!
    } else {
        // no native support for offline :(
        // try a fallback or another third-party solution
    }
```

### Geolocation
Geolocation API allows to figure out the user's IP address, wireless network connections,  Which cell tower your phone is connected to, or GPS hardware that calculates latitude and longitude.

Modernnizr code:
```
    if (Modernizr.geolocation) {
        // let's find out where you are!
    } else {
        // no native geolocation support available :(
        // try geoPosition.js or another third-party solution
    }
```

### Input Types
Input types allow accepting data from users. There're a wide variety of types of input.

Modernnizr code:
```
    if (!Modernizr.inputtypes.date) {
        // no native support for <input type="date"> :(
        // maybe build one yourself with Dojo or jQueryUI
    }
```

### Placeholder Text
Placeholder or hint text can be summarised as being the information in light grey found in an input field. It’s often there to help you put the correct information into that particular field.

Modernnizr code:
```
    if (Modernizr.input.placeholder) {
        // your placeholder text should already be visible!
    } else {
        // no placeholder support :(
        // fall back to a scripted solution
    }
```

### Form Autofocus
Autofocus automatically focuses the first input field of a web page form.

Modernnizr code:
```
    if (Modernizr.input.autofocus) {
        // autofocus works!
    } else {
        // no autofocus support :(
        // fall back to a scripted solution
    }
```

### Micro Data
Microdata is a standardized way to provide additional semantics in your web pages.

Microdata lets you define your customized elements and start embedding custom properties in your web pages.

At a high level, microdata consists of a group of name-value pairs. The groups are called items, and each name-value pair is a property. Items and properties are represented by regular elements.

Modernnizr code:
```
    if (Modernizr.microdata) {
        // supported
    } else {
        // not-supported
    }
```

### History
The History API lets you interact with the browser history, trigger the browser navigation methods and change the address bar content.

Modernnizr code:
```
    if (Modernizr.history) {
        // history management works!
    } else {
        // no history support :(
        // fall back to a scripted solution like History.js
    }
```