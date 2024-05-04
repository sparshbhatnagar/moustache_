function preload() {
    v = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    image(video, 0 , 0 , 300 , 300);
}
nose_x = "";
nose_y = "";
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw() {
    image(video, 0 , 0 , 300 , 300);
    fill("red");
    stroke("black");
    image(v, nose_x , nose_y , 45 , 30);
}

function take_snapshot() {
    save('myFilter_Img.png');
}

function modelLoaded() {
    console.log("posenet is initialized");
}

function gotPoses(results) {
if(results.length>0)
{
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x)
    console.log("nose y = " + results[0].pose.nose.y)
    nose_x = results[0].pose.nose.x - 15
    nose_y = results[0].pose.nose.y
}
}