nose_X = 0;
nose_Y = 0;

function preload()
{
    noseImage = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(noseImage, nose_X-15, nose_Y-15, 30, 30);
}

function take_snapshot()
{
    save('MyFliterImage.png');
}

function gotPoses(results)
{
    if (results.length > 0) {
        console.log(results);
        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;
        console.log("nose x = " + nose_X);
        console.log("nose y = " + nose_Y);
    }
}
