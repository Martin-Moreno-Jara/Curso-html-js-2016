for(var i=1;i<=100;i++){
    if(esDivisible(i,3) && !esDivisible(i,5)){
        document.write("fizz <br/>");
    }
    else if(!esDivisible(i,3) && esDivisible(i,5)){
        document.write("buzz <br/>");
    }
    else if(esDivisible(i,3) && esDivisible(i,5)){
        document.write("FizzBuzz <br/>");
    }
    else{
        document.write(i+"<br/>")
    }
}

function esDivisible(num,divisor)
{
    if(num%divisor==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(esDivisible(87,4))