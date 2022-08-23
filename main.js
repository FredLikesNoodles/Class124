noseX = 0;
noseY = 0;
difference = 0;
function preload() {}
function setup() {
  canvas = createCanvas(600, 550);
  canvas.position(150, 180);
  video = createCapture(VIDEO);
  video.size(600, 550);
  model1 = ml5.poseNet(video, modelLoaded);
  model1.on("pose", gotPoses);
}
function modelLoaded() {
  console.log("Model has been loaded");
}
function draw() {
  background("white");
  fill("red");
  stroke("black");
  square(noseX, noseY, difference);
}
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log(noseX);
    console.log(noseY);
    rightWrist = results[0].pose.rightWrist.x;
    leftWrist = results[0].pose.leftWrist.x;
    difference = floor(rightWrist - leftWrist);
    document.getElementById("width1").innerHTML = difference + " px";
  }
}
