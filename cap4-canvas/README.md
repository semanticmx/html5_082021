# HTML Canvas

The <canvas> element is a resolution-dependent bitmap canvas which can be used for rendering graphs.

## Building Canvas Elements

To create a canvas element we use <canvas> tag. The canvas element doesn't has any content or borders, is embedded within the background.

We have to give it a size to be able to use it, the syntax is:
```
    <canvas id="a"
        height="375px"
        width="500px"
        style="border:1px dotted">
    </canvas>
```
*note: The borders are not necessary, their purpose is as a reference.*

After we create the canvas tag and specify the size of it, we can select the canvas element in our .js file:
```
var a_canvas=document.getElementById("a");
```

## Coordinates

In the following exercise we are going to create a canvas element with a coordinate map inside. This Canvas element has lines, letters and numbers, first we define the canvas element:
```
    <div id="container2">
      <canvas id="c"
        height="375px"
        width="500px"
        style="border:1px dotted">
      </canvas>
    </div>
```
I used the div tag as a container to be able to center it on the screen. After that, I used a canvas tag with an ID to use the canvas element in the .js file. Then I added a size and a border, only to identify where it is.

Now we can find the canvas element in the DOM by using:```document.getElementById();```, we have to call the ```getContext()``` method and set a 2d to the method. For example:
```
var c_canvas=document.getElementById("c");
var context=c_canvas.getContext("2d");
```

### Grid background

Now, to make the grid, we use vertical and horizontal lines. For this, we use a loop statement that goes from 0.5 to the width "500", increasing 10 by 10:
```
for (var x = 0.5; x < 500; x += 10){
    context.moveTo(x, 0);
    context.lineTo(x, 375);
} 
```

We do the same for "y" axis, just change width of height:
```
for (var y = 0.5; y < 375; y += 10){
    context.moveTo(0, y);
    context.lineTo(500, y);
}
```

After drawing the lines we have to apply the "ink" to paint the lines. We use the following codes inside the loop "for":
```
    context.strokeStyle = "#eee";
    context.stroke();
```

### Vertical and horizontal lines

First we have to create the fuction ```context.beginPath();```, afterwards we create the horizontal and vertical lines:

```
context.beginPath();
    context.moveTo(0, 40);
    context.lineTo(240, 40);
    context.moveTo(260, 40);
    context.lineTo(500, 40);
    context.moveTo(495, 35);
    context.lineTo(500, 40);
    context.lineTo(495, 45);
    context.moveTo(60, 0);
    context.lineTo(60, 153);
    context.moveTo(60, 173);
    context.lineTo(60, 375);
    context.moveTo(65, 370);
    context.lineTo(60, 375);
    context.lineTo(55, 370); 
    context.strokeStyle = "#000";
context.stroke();
```

### Writing letter and numbers

For the letters and numbers, we used the ```context.fillText();``` method. Inside the method, the text that is in quotes is the one that will be written. The other two parameters are the positioning of the letters.

X and Y syntax:
```
context.font = "bold 12px sans-serif";
context.fillText("x", 248, 43);
context.fillText("y", 58, 165);
```

Coordinates syntax:
```
context.textBaseline = "top";
context.fillText("( 0 , 0 )", 8, 5);

context.textAlign = "right";
context.textBaseline = "bottom";
context.fillText("( 500 , 375 )", 492, 370);
```

## Gradients

A gradient is a smooth transition between two or more colors. The canvas drawing context supports two types of gradients:
- createLinearGradient(x0, y0, x1, y1) paints along a line from (x0, y0) to (x1, y1).
- createRadialGradient(x0, y0, r0, x1, y1, r1) paints along a cone between two circles. The first three parameters represent the start circle, with origin (x0, y0) and radius r0. The last three parameters represent the end circle, with origin (x1, y1) and radius r1.

### Gradient from top to bottom

First we create a variable with the linear gradient method:
```
var my_gradient = context.createLinearGradient();
```

To make it from top to bottom, we have to specify the parameter, first 0 is "y" right, second 0 is "x" buttom, third 0 is left and the last one is up. So, we use the last parameter to indicate the height of the gradient and to indicate where to start.

```
context.createLinearGradient(0, 0, 0, 375);
```

After that we shade the gradient from black to white:
```
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
```

Defining the gradient and the colors doesn't draw anything, to draw something in the canvas we have to set the ```fillStyle``` method:
```
context.fillStyle = my_gradient;
context.fillRect(0, 0, 500, 375);
```

Full syntax:
```
var my_gradient = context.createLinearGradient(0, 0, 0, 375);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
context.fillStyle = my_gradient;
context.fillRect(0, 0, 500, 375);
```

## Images

First we load the image, we can use an img element (``` <img id="cat" src="images/cat.png">```) or use an image object (```cat.onload = function()```)in javascript.

After loading the img we create the <canvas> element, we specify the size and the ID. Lastly, we create the script. To draw the image we use the ```context.drawImage();``` method.

Using an <img> element:
```
<img id="cat" 
    src="images/cat.png" 
    alt="sleeping cat" 
    width="177" 
    height="113">
<canvas id="e" 
    width="177" 
    height="113">
</canvas>
<script>
window.onload = function() {
  var canvas = document.getElementById("e");
  var context = canvas.getContext("2d");
  var cat = document.getElementById("cat");
  context.drawImage(cat, 0, 0);
};
</script>
```

Using an img() object:
```
<canvas id="e" width="177" height="113"></canvas>
<script>
  var canvas = document.getElementById("e");
  var context = canvas.getContext("2d");
  var cat = new Image();
  cat.src = "images/cat.png";
  cat.onload = function() {
    context.drawImage(cat, 0, 0);
  };
</script
```