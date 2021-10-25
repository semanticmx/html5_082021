# Local Storage

HTML5 Storage or local storage is a way for web pages to store named key/value pairs locally, within the client web browser.

Like cookies this data persist even after you navigate away from the website. Unlike cookies, this data is never transmitted to the remote web server, unless you send it manually.

HTML5 Storage is based on named key/value pairs. You store data based on a named key, then you can retrieve that data with the same key. 

The named key is a string. The data can be any type supported by JavaScript, including strings, Booleans, integers, or floats. However, the data is actually stored as a string. 

If you are storing and retrieving anything other than strings, you will need to use functions like parseInt() or parseFloat() to coerce your retrieved data into the expected JavaScript datatype.

## Save values

To save a value inside the local storage, we have to call the variable localStorage. After that, we call the .setItem() method. Then inside the method, we have to point to the named key. The Syntax is:

```
    localStorage.setItem('textinput')
```

In the example I also point the value inside the .setItem() method.

```
    localStorage.setItem('textinput', text.textContent)
```

"text" is the variable that I defined at the beginning of the localstorage.js file.

## Delete local storage

To delete local storage is similar to saving it. We just change the method from .setItem() to .revomeItem(). The syntax is:

```
    localStorage.removeItem('textinput', text.textContent)
```