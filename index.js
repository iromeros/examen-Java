function _id(ident){
    return document.getElementById(ident);
}

function factorial() {
    var entradaFactorial = _id("entradaFactorial").value;
    var operacion = "";
    var resultado = 1;

    if (entradaFactorial < 0) {
        alert('No se puede calcular');
    } else {
        for (var i = entradaFactorial; i > 0; i--) {
            resultado *= i;
            operacion += i;

            if (i>1) operacion+="*";
        } 
        _id("resultatFactorial").innerHTML = resultado;
        _id("operacionsFactorial").innerHTML = operacion;


    }

}

function calculaIVA(){
    
}

function canviaFons(tipus){
        var simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
    
        for(var i = 0; i < 6; i++){
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
    
        document.body.style.background = color;
        document.body.style.font = color;
        document.getElementById("hexadecimal").innerHTML = color;
        document.getElementById("text").innerHTML = "Copiar Color";
    }
