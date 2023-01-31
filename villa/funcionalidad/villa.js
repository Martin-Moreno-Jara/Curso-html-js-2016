var canva = document.getElementById("canva");
var papel = canva.getContext("2d");
var number;
var numCows = generateRandomNumber(12,2);
var numChicks = generateRandomNumber(25,2);
var sowX = 80;
var sowY = 200;
var sowT = false;

var cow ={
    url:"imgs/vaca.png",
    ready:false
};
var chick ={
    url:"imgs/pollo.png",
    ready:false
};
var sow ={
    url:"imgs/cerdo.png",
    ready:false
};
var tile ={
    url:"imgs/tile.png",
    ready:false
};
var keys= {
    W:87,
    S:83,
    D:68,
    A:65
};
tile.object = new Image();
tile.object.src = tile.url;
tile.object.addEventListener("load",loadBackground);

cow.object = new Image();
cow.object.src = cow.url;
cow.object.addEventListener("load",loadCow);

sow.object = new Image();
sow.object.src = sow.url;
sow.object.addEventListener("load",loadSow);
document.addEventListener("keydown",moveSow);

chick.object = new Image();
chick.object.src =chick.url;
chick.object.addEventListener("load",loadChick);
//---------------------------------------------------
function loadBackground()
{
    tile.ready = true;
    draw();
}
function loadCow()
{
    cow.ready = true;
    draw();
}
function loadSow()
{
    sow.ready = true;
    draw();

}
function moveSow(event)
{
    if(event.keyCode==keys.W){
        console.log(event)
        sowY-=5;
    }
    else if(event.keyCode==keys.S){
        console.log(event)
        sowY+=5;
    }
    else if(event.keyCode==keys.A){
        console.log(event)
        sowX-=5;
    }
    else if(event.keyCode==keys.D){
        console.log(event)
        sowX+=5;
    }
    drawSow();
    
}
function loadChick()
{
    chick.ready = true;
    draw();
}

function drawSow(){
    sowT=true;
    draw();
    papel.drawImage(sow.object,sowX,sowY);
}

function draw()
{
    if(tile.ready){
        papel.drawImage(tile.object,0,0)
    }
    if(cow.ready){
        for(var i=1;i<numCows;i++){
            var ramnumX = generateRandomNumber(7,0)
            var ramnumY = generateRandomNumber(7,0)
            papel.drawImage(cow.object,ramnumX*60,ramnumY*60)
        }
    }
    if(sow.ready && sowT!=true){
        papel.drawImage(sow.object,80,200)
    }
    if(chick.ready){
        for(var i=1;i<numChicks;i++){
            var ramnumX = generateRandomNumber(7,0)
            var ramnumY = generateRandomNumber(7,0)
            papel.drawImage(chick.object,ramnumX*60,ramnumY*60)
        }
    }
}

function generateRandomNumber(max,min){
    var random = Math.floor(Math.random()*(max-min+1))+min;
    return random;
}

