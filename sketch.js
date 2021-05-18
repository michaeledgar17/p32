const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

if (backgroundImg) {
background (backgroundImg)


}

    Engine.update(engine);

    // write code to display time in correct format here
    fill("black");
    textSize(30);
    if(hour>=12){
        text("Time : "+ hour % 12 + " PM", 50,100);
    } else if (hour==0){
        text("Time : 12 AM", 50,100);
        
    }else{
        text("Time : "+ hour % 12 + " AM", 50,100);

        
    }


}


async function getBackgroundImg (){

    // API call using fetch 
    var response= await fetch ("https://worldtimeapi.org/api/timezone/America/Chicago")// JSON /string
    var responseJSON= await response.json()
    console.log(responseJSON)
    
    var datetime = responseJSON.datetime;
    console.log(datetime);
    var hour = datetime.slice(11,13);
    console.log(hour)
    
    if  (hour>=03 && hour<=06) {
    
    bg ="sunrise1.png"
    
    }
    
    else if(hour>=06 && hour<=08) {

        bg = "sunrise2.png"

    }
    else if(hour>=08 && hour<=10) {

        bg ="sunrise3.png"

    }
    else if(hour>=10 && hour<=12) {

        bg = "sunrise4.png"

    }
    else if(hour>=12 && hour<=14) {

        bg = "sunrise5.png"

    }
    else if(hour>=14 && hour<=16) {

        bg = "sunrise6.png"

    }
    else if(hour>=16 && hour<=18) {

        bg = "sunset7.png"

    }
    else if(hour>=18 && hour<=20) {

        bg = "sunset8.png"

    }
    else if(hour>=20 && hour<=22) {

        bg = "sunset9.png"

    }
    else if(hour>=22 && hour<=23) {

        bg = "sunset10.png"

    }
    else if(hour>=23 && hour===0) {

        bg = "sunset11.png"

    }
    else if(hour===0 && hour<=03) {

        bg = "sunset12.png"

    }
    backgroundImg = loadImage(bg);
    
    //var minute=datetime.slice(14,17)
    //console.log(minute)
    }