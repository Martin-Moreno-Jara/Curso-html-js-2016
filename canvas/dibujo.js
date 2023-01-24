var d =document.getElementById("dibujito");
var lienzo = d.getContext("2d")
console.log(lienzo)

function makeStroke(initx,inity,finalx,finaly,color){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(initx,inity);
    lienzo.lineTo(finalx,finaly);
    lienzo.stroke();
    lienzo.closePath();
}

makeStroke(1,1,0,300,"#AFA")
makeStroke(1,1,300,0,"#AFA")
makeStroke(299,299,0,299,"#AFA")
makeStroke(299,299,299,0,"#AFA")
// makeStroke(20,50,80,50,"black")
// makeStroke(20,50,20,150,"red")
// makeStroke(20,150,80,150,"blue")
// makeStroke(80,150,80,50,"purple")

 function dibujar_torre(x,y){
    var lineas = 0;
    while(lineas<30){
        //x=lineas*10
        //y=10*(lineas+1)
        makeStroke(0,y,x+10,300,"#AAFA");
        lineas++;
        x+=10;
        y+=10;
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
 dibujar_torre(0,0)
 dibujar_torre_traversa(0,0)
 dibujar_torre_inversa(0,0)
 dibujar_torre_reinversa(0,0)
 for(l=0;l<11;l++){
    document.write(l)
 }
