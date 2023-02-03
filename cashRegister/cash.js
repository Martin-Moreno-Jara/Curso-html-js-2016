var caja = [];
var dinero = document.getElementById("dinero");
var button = document.getElementById("extraer");
button.addEventListener("click",darVueltas)
var result = document.getElementById("result")
var bills = document.getElementById("bills")
var etiquete = document.getElementById("damoney")

caja.push(new Billete(100,5));
caja.push(new Billete(50,10,));
caja.push(new Billete(20,5));
caja.push(new Billete(10,10));
caja.push(new Billete(5,5))

etiquete.innerHTML = "Nuestras reservas:<br/>billetes $100: "+caja[0].getCantidad()+"<br/>billetes $50: "+caja[1].getCantidad()+"<br/>billetes $20: "+caja[2].getCantidad()+"<br/>billetes $10: "+caja[3].getCantidad()+"<br/>billetes $5: "+caja[4].getCantidad()+"<hr/>";


function darVueltas()
{
    var vueltas = [];
    var solicitado = parseInt(dinero.value);
    for(var i in caja){
        if(solicitado>0){
            var billValue = caja[i].getValor();
            var billQuantity = caja[i].getCantidad();
            var billReturned =parseInt(solicitado/billValue)
            if(billReturned>billQuantity){
                billReturned = billQuantity
            }
            vueltas.push(new Billete(billValue,billReturned));
            solicitado-=(billValue*billReturned);
        } 
    }
    if(solicitado!=0){
        result.innerHTML="No podemos dar esa cantidad<br/>";
    }
    else{
        console.log(vueltas)
        for(var billete of vueltas){
            if(billete.cantidad>0){
                for(var i=0;i<vueltas.length;i++){
                    if(billete.valor==caja[i].getValor()){
                        caja[i].cantidad-=billete.cantidad;
                        console.log(caja[i])
                    }
                }
                etiquete.innerHTML = "Nuestras reservas:<br/>billetes $100: "+caja[0].getCantidad()+"<br/>billetes $50: "+caja[1].getCantidad()+"<br/>billetes $20: "+caja[2].getCantidad()+"<br/>billetes $10: "+caja[3].getCantidad()+"<br/>billetes $5: "+caja[4].getCantidad()+"<hr/>";

                result.innerHTML+= billete.getCantidad()+ " billetes de $"+billete.getValor()+"<br/>";
                for(var i=1;i<=billete.getCantidad();i++){
                    var billImage = billete.imprimirImagen()
                    bills.appendChild(billImage);
                    bills.innerHTML+=" "

                }
                
            }
        }
        result.innerHTML+="<hr/>"
    }
}
