function draw(){
}
function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.hide()
Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UItMIF0QY/model.json",modelLoaded)
}
function modelLoaded(){

}
function preload(){

}