var imagenes = [];
imagenes["kauchin"] = "imgs/vaca.png"
imagenes["pokacho"] = "imgs/pollo.png"
imagenes["tocinauro"] = "imgs/cerdo.png"

// kauchin.show();
// pokacho.show();
// tocinauro.show();
var colection = [];
colection.push(new Pakiman("kauchin","dirt",100,30));
colection.push(new Pakiman("pokacho","Lightning",80,50));
colection.push(new Pakiman("tocinauro","Water",200,20));

for(var i of colection){
    i.show();
}