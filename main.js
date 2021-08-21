function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5poseNet(video,modeLoaded);
    poseNet.on('pose',gotposes);
}
function gotposes(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}
function draw()
{
    background('#969A97');
}
 function modelLoaded()
 {
     console.log('poseNet is initialized')
 }
