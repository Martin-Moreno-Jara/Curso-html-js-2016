// DECLARATION OF VARIABLES ---------------------------------
var calification = document.getElementById("grade"); 
var button = document.getElementById("send_grade"); 

var largo_linea = document.getElementById("line_width")
var grueso_linea = document.getElementById("line_height")
var color_linea = document.getElementById("line_color")

var canva = document.getElementById("draw_canvas"); 
var lienzo = canva.getContext("2d"); 
var posX=250
var posY=250

var positionX;
var positionY;
// document.addEventListener("keyup",drawKeyboard);
canva.addEventListener("mousedown",drawMouseDown)
canva.addEventListener("mouseup",drawMouseUp)


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
//------------------------------------------------------


// FUNCTIONS -----------------------------------------

function drawMouseDown(evento){
    console.log(evento)
    positionX = evento.offsetX;
    positionY = evento.offsetY
}
function drawMouseUp(evento){
    console.log(evento)
    drawLineMouse(positionX,positionY,evento.offsetX,evento.offsetY,color_linea.value,grueso_linea.value) 
}


// function drawKeyboard(evento){
//     var largo = parseInt(largo_linea.value) 
//     var grueso = parseInt(grueso_linea.value)
//     var color = color_linea.value
//     console.log(largo)
//     if(largo !=0 && largo !=NaN && grueso !=0 && grueso !=NaN){
//     switch(evento.keyCode){
//         case keys.LEFT:
//             console.log("Left");
//             drawLine(posX,posY,keys.LEFT,color,largo,grueso);
//             posX-=largo;
//             console.log(largo)
//             break;
//         case keys.UP:
//             console.log("Up");
//             drawLine(posX,posY,keys.UP,color,largo,grueso);
//             posY-=largo;
//             console.log(posY)
//             break;
//         case keys.RIGHT:
//             console.log("Roight innit");
//             drawLine(posX,posY,keys.RIGHT,color,largo,grueso);
//             posX+=largo;
//             console.log(posX)
//             break;  
//         case keys.DOWN:
//             console.log("Down");
//             drawLine(posX,posY,keys.DOWN,color,largo,grueso);
//             posY+=largo
//             console.log(posY)
//             break;
//     }
//     }
// }

function drawLine(posX,posY,direction,color,largo,grueso){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grueso;
    lienzo.moveTo(posX,posY);

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
function drawLineMouse(initX,initY,finalX,finalY,color,grueso){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grueso;
    lienzo.moveTo(initX,initY);
    console.log("posición x: "+initX+", posición y: "+initY)
    lienzo.lineTo(finalX,finalY)
    lienzo.stroke();
    lienzo.closePath(); 
}
//-----------------------------------------------