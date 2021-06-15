var mouseEvent = "empty";
var lastposition_x, lastposition_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "green";
width = 3;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("Color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("last postion of x =" + lastposition_x + "last position of y =" + lastposition_y);
        ctx.moveTo(lastposition_x, lastposition_y);
        console.log("current postion of x =" + current_x + "current position of y =" + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    lastposition_y = current_y;
    lastposition_x = current_x;
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseLeave";
}

function ClearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}