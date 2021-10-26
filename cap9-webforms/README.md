# Web Forms

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

## Place Holder
Placeholder text is displayed inside the input field as long as the field is empty.

```
	<form>
     	<input name="q" placeholder="Go to a website">
    	<input type="submit" value="Search">
    </form>
```

## Autofocus Field
Automatically focus the first input field of a web form

```
    <form>
    	<input name="q" autofocus="">
        <input type="submit" value="Search">
    </form>
```

Note:*Browsers that don’t support the autofocus attribute will simply ignore it*.

You can add your own script to be able to use autofocus in any web browser.

```
     <form name="f">
       	<input id="q" autofocus>
        <script>
        	if (!("autofocus" in document.createElement("input"))) {
        		document.getElementById("q").focus();
        	}
        </script>
        <input type="submit" value="Go">
      </form>
```

### Setting Focus as Early as Possible

Lots of web pages wait until window.onload fires to set focus. But the window.onload event doesn’t fire until after all your images have loaded. If your page has a lot of images, such a naive script could potentially re-focus the field after the user has started interacting with another part of your page.

```
<head>
	<script src="jquery.min.js"></script>
	<script>
  		$(document).bind('autofocus_ready', function(){
    		if (!("autofocus" in document.createElement("input"))){
      			$("#q").focus();
    		}
  		});
	</script>
</head>
<body>
	<form name="f">
  		<input id="q" autofocus>
  		<script>$(document).trigger('autofocus_ready');</script>
  		<input type="submit" value="Go">
</form>
```

## Email Addresses

These are the most common field types

|		Field Type		|		         Code              	|  
|-----------------------|-----------------------------------|
| Checkbox   			| 	```<input type="checkbox">```	|             
| radio button          | 	```<input type="radio">``` 		|
| password field        | 	```<input type="password">```	|
| drop-down lists		|	```<select><option>```			|
| file picker			|	```<input type="file">```		|
| submit button 		|	```<input type="submit">```		|
| plain text 			|	```<input type="text">```		|


For an email field type the syntax is:
```
	<form>
  		<input type="email">
  		<input type="submit" value="Go">
	</form>
```

All browsers supports type="email". They may not do anything special with it, but browsers that don’t recognize type="email" will treat it as type="text" and render it as a plain text field.

## Web Addresses

The web addresses like email types change the mobile keyboard making it easier to type the information. For example, the web address type adds a ".com" button.

```
    <form>
    	<input type="url">
        <input type="submit" value="Go">
    </form>
```

Like email type, when a browser doesn't recognize type="url" they render it as a plain text field.

## Numbers as spinboxes

To make spinboxes first we have to define some attributes.
- type="number" means that this is a number field.
- min="0" specifies the minimum value.
- max="10" is the maximum value.
- step="1" The increment value.
- value="0" is the default value.

```
     <form>
        <input type="number"
           min="0"
           max="10"
           step="1"
           value="0">
     </form>
```

As we mentioned earlier, when a browser doesn't recognize type="number" they will render it as a plain text field.

## Numbers as Slider

The slider is pretty much the same as the spinbox, the only difference is that we change type="number" for type="range".

```
    <form>
        <input type="range"
           min="0"
           max="10"
           step="1"
           value="0">
        <input type="submit" value="Go">
    </form>
```

## Date Pickers

For date pickers, we have different type values.


|		Field Type		|		      Description           |  
|-----------------------|-----------------------------------|
| type="date" 			| 	Give Date.						|             
| type="datetime"       | 	Give Date and time. 			|
| type="datetime-local" | 	Give Date and time.				|
| type="month"			|	Give Month.						|
| type="week"			|	Give Week.						|
| type="time"			|	Give Time.						|


```
    <form>
    	<input type="datetime-local">
       	<input type="submit" value="Go">
    </form>
```

like the other web forms, this one also couldn't be detected by the browser, so could be displayed as plain text. 


## Search boxes

Works as a search box, like any search box, on any page.

```
	<form>
    	<input name="g" type="search">
        <input type="submit" value="Find">
    </form>
```

For some browsers like safari, the search type gives small tweaks to the webform, like rounded corners to the search bar or a small "x" to clear the text. Like the other ones, if a browser doesn't detect it, it will render it as plain text.

## Color Pickers

This is a color picker with a RGB, HSL and HEX representation.

```
    <form>
        <input name="h" type="color">
        <input type="submit" value="Select">
    </form>
```

## Required Fields

Required fields must have a value before you can submit the form.

```
    <form>
        <input id="q" required>
        <input type="submit" value="Search">
    </form>
```