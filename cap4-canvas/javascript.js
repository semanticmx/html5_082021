// Canvas Coordinates

var c_canvas=document.getElementById("c");
var context=c_canvas.getContext("2d");

// Grid
for (var x = 0.5; x < 500; x += 10){
    context.moveTo(x, 0);
    context.lineTo(x, 375);
    context.strokeStyle = "#eee";
    context.stroke();
} 

for (var y = 0.5; y < 375; y += 10){
    context.moveTo(0, y);
    context.lineTo(500, y);
    context.strokeStyle = "#eee";
    context.stroke();
}

// Arrows
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

// Text
context.font = "bold 12px sans-serif";
context.fillText("x", 248, 43);
context.fillText("y", 58, 165);

// Numbers
context.textBaseline = "top";
context.fillText("( 0 , 0 )", 8, 5);
context.textAlign = "right";
context.textBaseline = "bottom";
context.fillText("( 500 , 375 )", 492, 370);

// Canvas Gradients
var d_canvas = document.getElementById("d");
var context = d_canvas.getContext("2d");
var my_gradient = context.createLinearGradient(0, 0, 0, 375);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
context.fillStyle = my_gradient;
context.fillRect(0, 0, 500, 375);