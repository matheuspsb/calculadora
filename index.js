function insert(num) {
    
    var number = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = number + num;
}

function clean() {
    
    document.getElementById('resultado').innerHTML = "" ;
}

function back() {

    var voltar = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = voltar.substring(0, voltar.length -1);
}

function calcular () {
    var resultadofinal = document.getElementById('resultado').innerHTML;
    if(resultadofinal) {
        document.getElementById('resultado').innerHTML = eval(resultadofinal)
    } else{
        document.getElementById('resultado').innerHTML = "Cody By Matheus"
    }
}