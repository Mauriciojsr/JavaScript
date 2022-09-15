//Classe Documento
document.write("Bom dia Chapecó")

//Title - Retorna o Titulo da Página
//URL - Retorna a url completa da página

//Ex:
document.write("<h2>"+document.title+"</h2>")
document.writeln(document.URL)

//Requisitando informações do HTML e alterando-as
function fAlterar(){
    var x= document.getElementById("paragrafo");
    x.innerHTML="Bom Dia";
}

function inter(){
    var btnNome = Element = document.getElementById("btnInter");
    var lampada = Element = document.getElementById("imgLamp");
    if (Element.src.match("bulbon")){
        Element.src = "./img/pic_bulboff.gif";
        btnNome.innerHTML = "Ligar"
    }else{
        Element.src = "./img/pic_bulbon.gif";
        btnNome.innerHTML = "Desligar"
    }
}

function soma(){
    var n1= parseInt(document.getElementById("v1").value);
    var n2= parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: "+ (n1 + n2);

}

function subtrair(){
    var n1= parseInt(document.getElementById("v1").value);
    var n2= parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: "+ (n1 - n2);

}

function dividir(){
    var n1= parseInt(document.getElementById("v1").value);
    var n2= parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: "+ (n1 / n2);

}

function multipilcar(){
    var n1= parseInt(document.getElementById("v1").value);
    var n2= parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: "+ (n1 * n2);

}
function limpar(){
    var n1 = document.getElementById("v1");
    var n2 = document.getElementById("v2");
    var res = document.getElementById("res");
   
    n1.value = ""
    n2.value = ""
    res.innerHTML = "Resposta: "
}
function restDiv(){
    var n1= parseInt(document.getElementById("v1").value);
    var n2= parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: "+ (n1%n2);

}
function porcentagem(){
    var n1= parseInt(document.getElementById("v1").value);
    var n2= parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: "+ (((n1*n2)/100));

}
