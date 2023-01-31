var imagenes = [];
imagenes["kauchin"] = "imgs/vaca.png"
imagenes["pokacho"] = "imgs/pollo.png"
imagenes["tocinauro"] = "imgs/cerdo.png"
class Pakiman{
    constructor(name,type,attack,life){
        this.name = name;
        this.type = type;
        this.attack = attack;
        this.life = life;
        this.image = new Image();
        this.image.src = imagenes[this.name];
    }
    talk(){
        alert(this.name+" "+this.name)
    }
    show(){
        document.body.appendChild(this.image);
        document.write("<p>");
        document.write("<strong>"+this.name+"</strong><br/>");
        document.write("tipo: "+this.type+"<br/>");
        document.write("vida: "+this.life+"<br/>");
        document.write("ataque: "+this.attack+"<br/>");
        document.write("<hr/></p>")
    }
}

var kauchin = new Pakiman("kauchin","dirt",100,30);
var pokacho = new Pakiman("pokacho","Lightning",80,50)
var tocinauro = new Pakiman("tocinauro","Water",200,20)
kauchin.show();
pokacho.show();
tocinauro.show();