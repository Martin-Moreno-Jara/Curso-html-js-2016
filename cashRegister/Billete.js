class Billete{
    constructor(valor,cantidad){
        this.valor = valor;
        this.cantidad = cantidad
        this.imagen = new Image();
        this.imagen.src = images[valor]
    }
    getValor(){
        return this.valor;
    }
    getCantidad(){
        return this.cantidad;
    }
    imprimirImagen(){
        return this.imagen;
            //document.body.appendChild(this.imagen)
    }
}
images = [];
images[5] = "imgs/5_dollars.jpg"
images[10] = "imgs/10_dollars.jpg"
images[20] = "imgs/20_dollars.jpg"
images[50] = "imgs/50_dollars.jpg"
images[100] = "imgs/100_dollars.jpg"