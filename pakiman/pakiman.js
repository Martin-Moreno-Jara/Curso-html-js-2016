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

