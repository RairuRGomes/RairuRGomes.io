function dakrmode() {

    
    var teste = document.body;
    var h01 = document.getElementsByTagName("h1");

    teste.classList.toggle("tudo-darkmode");

    for(var i = 0; i< h01.length; i++){
        h01[i].classList.toggle("tudo-darkmode")
      }
}

function resultado(){

    var quilometro = document.getElementById("quilometro").value;
    var centimetro ;
    var metro ;
    metro =  quilometro * 1000 ;
    centimetro = quilometro * 100000;

    document.getElementById("metro").value = metro;
    document.getElementById("centimetro").value = centimetro ; 

}

function limpar(){
    document.getElementById("quilometro").value = "";
    document.getElementById("centimetro").value = "";
    document.getElementById("metro").value = "";
}

    