function preload0() {
{
function setup0() {
canvas
= createCanvas(640,
480);
canvas.position(110, 250);
video
= createCapture (VIDEO) ;
video.hide ();
tint_color
}
function draw0() {
image (video,tint_color = 0, 0, 640,480);
function take_snapshotO(){
save("student_name.png");
}
}
}

function filter_tint()
tint_color=document.getElementById("color_name").value ;
}