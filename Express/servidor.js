var express = require("express");
var app = express();

app.get("/",inicio);
app.get("/cursos",cursos);

function inicio(request,response){
    response.send("Este es el <strong>home</strong> genial")
}
function cursos(request,response){
    response.send("Estos son los <strong>cursos</strong>")
}

app.listen(8989);