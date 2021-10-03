# HTML Canvas

The <canvas> element is a resolution-dependent bitmap canvas which can be used for rendering graphs.

## Building Canvas Elements

To create an canvas element we just use <canvas> tag. The canvas element doen't has any content or borders, when we create an canvas element will be embedded within the background.

We have to give the canvas element size, the syntax is:
```
    <canvas id="a"
        height="375px"
        width="500px"
        style="border:1px dotted">
    </canvas>
```
note: The border style is not necessary, is only used as a reference.

After that we can select the canvas element in our .js file:
```
var a_canvas=document.getElementById("a");
```

## Coordinates

This canvas element has lines, letters and numbers, first we define the canvas element:
```
    <div id="container2">
      <canvas id="c"
        height="375px"
        width="500px"
        style="border:1px dotted">
      </canvas>
    </div>
```

After that we find the canvas element in the DOM by using: ```document.getElementById();```, we have to call the getContext() method and pass the string 2d to the method. For example:
```
var c_canvas=document.getElementById("c");
var context=c_canvas.getContext("2d");
```

Now, to make the grid we use vertical and horizontal lines:
```
for (var x = 0.5; x < 500; x += 10){
    context.moveTo(x, 0);
    context.lineTo(x, 375);
} 

for (var y = 0.5; y < 375; y += 10){
    context.moveTo(0, y);
    context.lineTo(500, y);
}
```

After drawing the lines we have to apply ink to the draw using the following codes inside the loop "for":
```
    context.strokeStyle = "#eee";
    context.stroke();
```

After that we draw the black lines with arrows, first we have to create the fuction ```context.beginPath();```, afterwards we create the horizontal and vertical lines:

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

Finally for the letters and numbers, we used the ```context.fillText();``` method.

For the letters the syntax is:
```
context.font = "bold 12px sans-serif";
context.fillText("x", 248, 43);
context.fillText("y", 58, 165);
```

and for the numbers the syntax is:
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

**Gradient from top to bottom**
First we create a variable with the linear gradient method:
```
var my_gradient = context.createLinearGradient();
```

To make it from top to bottom, we have to specify the parameter, that is, all the numbers 0 except the last one, the last number tells us where the gradient starts:
```
context.createLinearGradient(0, 0, 0, 375);
```

After that we shade the gradient form black to white:
```
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
```

Defining the gradient and the colors doesn't draw anything, to draw something in the canvas we have to set the ```fillStyle``` method:
```
context.fillStyle = my_gradient;
context.fillRect(0, 0, 500, 375);
```

full syntax:

```
var my_gradient = context.createLinearGradient(0, 0, 0, 375);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
context.fillStyle = my_gradient;
context.fillRect(0, 0, 500, 375);
```

## Images

We can load an image using and img element (``` <img id="cat" src="images/cat.png">```) or using and image object (```cat.onload = function()```)in javascript

Image object:
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

Image Object:
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