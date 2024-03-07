var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//triangle
ctx.fillStyle = "magenta";
ctx.strokeStyle = "red";
ctx.lineWidth = 7;

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50,100);
ctx.lineTo(100,50);
ctx.closePath();
ctx.stroke();
ctx.beginPath();

//text
var grad = ctx.createLinearGradient(canvas.width/3, 0, canvas.width*2/3, 0);
grad.addColorStop('0', "magenta");
grad.addColorStop('.50', "blue");
grad.addColorStop('1', "red");

ctx.fillStyle = grad;
ctx.font = '50px Gilroy';
ctx.textAlign = "center";
ctx.fillText('This is a test, baby!', canvas.width/2, canvas.height/2);

//risovalka :P
ctx.lineWidth = 20;
ctx.strokeStyle = grad;
ctx.fillStyle = grad;
var isMouseDown = false;

canvas.addEventListener("mousedown", function() {
    isMouseDown = true;
});

canvas.addEventListener("mouseup", function() {
    isMouseDown = false;
    ctx.beginPath();
});

canvas.addEventListener("mousemove", function(e) {
    if (isMouseDown) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
});