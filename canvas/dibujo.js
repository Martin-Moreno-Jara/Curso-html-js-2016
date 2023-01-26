var canva =document.getElementById("dibujito");
var lienzo = canva.getContext("2d")

var texto = document.getElementById("txt_lineas")
var boton = document.getElementById("btn")
boton.addEventListener("click",dibujo_por_click);

function makeStroke(initx,inity,finalx,finaly,color){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(initx,inity);
    lienzo.lineTo(finalx,finaly);
    lienzo.stroke();
    lienzo.closePath();
}


// makeStroke(20,50,80,50,"black")
// makeStroke(20,50,20,150,"red")
// makeStroke(20,150,80,150,"blue")
// makeStroke(80,150,80,50,"purple")
function dibujar_bordes(){
    makeStroke(1,1,0,300,"#AFA")
    makeStroke(1,1,300,0,"#AFA")
    makeStroke(299,299,0,299,"#AFA")
    makeStroke(299,299,299,0,"#AFA")
}

 function dibujar_torre(x,y,limit_lineas){
    var lineas = 0;
    console.log(canva.width)
    while(lineas<limit_lineas){
        makeStroke(0,y,x+(canva.width/limit_lineas),300,"#AAFA");
        lineas++;
        x+=canva.width/limit_lineas;
        y+=canva.height/limit_lineas;
    }   
 }
 function dibujar_torre_traversa(x,y){
    var lineas = 0;
    while(lineas<30){
        makeStroke(300,y,300-x,300,"#FAFA");
        lineas+=1;
        x+=10;
        y+=10;
    }
 }
 function dibujar_torre_inversa(x,y){
    var lineas = 0;
    while(lineas<30){
        makeStroke(x,0,300,y+10,"#FAA");
        lineas+=1;
        x+=10;
        y+=10;
    }
 }
 function dibujar_torre_reinversa(x,y){
    var lineas = 0;
    while(lineas<30){
        makeStroke(300-x,0,0,y+10,"#AFAA");
        lineas+=1;
        x+=10;
        y+=10;
    }
 }

function dibujo_por_click(){
    lienzo.clearRect(0,0,canva.width,canva.height)
    dibujar_bordes()
    valor_texto = texto.value
    var num_lineas = parseInt(valor_texto);
    console.log(num_lineas);
    dibujar_torre(0,0,num_lineas)

}

//  dibujar_torre(0,0);
//  dibujar_torre_traversa(0,0);
//  dibujar_torre_inversa(0,0);
//  dibujar_torre_reinversa(0,0);

