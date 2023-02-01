var caja = [];
var solicitado = 230;
var vueltas = [];

var billete50 = new Billete(50,3);
var billete20 = new Billete(20,2);
var billete10 = new Billete(10,2);
// var billete50 = {
//     valor:50,
//     cantidad:3
// };
// var billete20 = {
//     valor:20,
//     cantidad:3
// };
// var billete10 = {
//     valor:10,
//     cantidad:3
// };
caja.push(billete50);
caja.push(billete20);
caja.push(billete10);
console.log(solicitado)

function darVueltas()
{
    for(i in caja){
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
        console.log("No podemos dar esa cantidad")
    }
    console.log(vueltas)
}