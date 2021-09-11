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
   <script> 
    try {
        document.createElement("canvas").getContext("2d");
        alert("HTML5 Canvas is supported.");
    } catch (e) {
        alert("HTML5 Canvas is not supported.");
    }   
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

### Video
Video API allows to embed videos into the web page.

### Video Formats
A video has different formats. These formats are called codecs. Codecs are algorithms used to encode the video into a stream of bits. 

Every browser supports a specific type of code, so you got to run a check for the common browsers.

### Local Storage
Storage provides a way for browsers to store information on your computer, in a similar way to cookies but larger quantities of data.

### Web Workers
Web Workers provide a way for browsers to run JavaScript in the background. Web Workers allows to spawn multiple "threads" that can run at the same time. 

These background threads allows to do background process while the main web page respond to the user. 

### Offline Web Applications
When a web page is loaded, downloads all the necessary files, So once the user goes offline, they'll be able to use the downloaded page or pages. 

### Geolocation
Geolocation API allows to figure out the user's IP address, wireless network connections,  Which cell tower your phone is connected to, or GPS hardware that calculates latitude and longitude.

### Input Types
Input types allow accepting data from users. There're a wide variety of types of input.

### Placeholder Text
Placeholder or hint text can be summarised as being the information in light grey found in an input field. It’s often there to help you put the correct information into that particular field

### Form Autofocus
Autofocus automatically focuses the first input field of a web page form.

### Micro Data
Microdata is a standardized way to provide additional semantics in your web pages.

Microdata lets you define your customized elements and start embedding custom properties in your web pages.

At a high level, microdata consists of a group of name-value pairs. The groups are called items, and each name-value pair is a property. Items and properties are represented by regular elements

### History
The History API lets you interact with the browser history, trigger the browser navigation methods and change the address bar content.