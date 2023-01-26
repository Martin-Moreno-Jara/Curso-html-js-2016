// DECLARATION OF VARIABLES ---------------------------------
var calification = document.getElementById("grade"); 
var button = document.getElementById("send_grade"); 
button.addEventListener("click",button_works); 

var largo_linea = document.getElementById("line_width")
var grueso_linea = document.getElementById("line_height")
var color_linea = document.getElementById("line_color")

var canva = document.getElementById("draw_canvas"); 
var lienzo = canva.getContext("2d"); 
document.addEventListener("keyup",drawKeyboard);

var keys = {
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39,
    W:87,
    S:83,
    A:65,
    D:68
};
var posX=250
var posY=250

//------------------------------------------------------


// FUNCTIONS -----------------------------------------
function button_works(){
    alert("I do indeed work correctly");
    console.log("My baby's got a gun");
}
function drawKeyboard(evento){
    var largo = parseInt(largo_linea.value) 
    var grueso = parseInt(grueso_linea.value)
    var color = color_linea.value
    console.log(largo)
    if(largo !=0 && largo !=NaN && grueso !=0 && grueso !=NaN){
    switch(evento.keyCode){
        case keys.LEFT:
            console.log("Left");
            drawLine(posX,posY,keys.LEFT,color,largo,grueso);
            posX-=largo;
            console.log(largo)
            break;
        case keys.UP:
            console.log("Up");
            drawLine(posX,posY,keys.UP,color,largo,grueso);
            posY-=largo;
            console.log(posY)
            break;
        case keys.RIGHT:
            console.log("Roight innit");
            drawLine(posX,posY,keys.RIGHT,color,largo,grueso);
            posX+=largo;
            console.log(posX)
            break;  
        case keys.DOWN:
            console.log("Down");
            drawLine(posX,posY,keys.DOWN,color,largo,grueso);
            posY+=largo
            console.log(posY)
            break;
    }
    }
}

function drawLine(posX,posY,direction,color,largo,grueso){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grueso;
    lienzo.moveTo(posX,posY);
    console.log("largo:"+ largo+" y: "+posY)
    if(direction==keys.LEFT){
        posX-=largo;
    }
    if(direction==keys.RIGHT){
        posX+=largo;
    }
    if(direction==keys.UP){
        posY-=largo;
    }
    if(direction==keys.DOWN){
        posY+=largo;
    }
    console.log("posición x: "+posX+", posición y: "+posY)
    lienzo.lineTo(posX,posY)
    lienzo.stroke();
    lienzo.closePath(); 
}
//-----------------------------------------------