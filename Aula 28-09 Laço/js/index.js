//Declaração for([expressão inicial];[condição];[incremento])

var passo; //criando variável
for(passo = 0; passo < 5; passo ++){
    console.log('Ande um Passo');
}
function howMany(selectObject){
    var nroSelecoes = 0;
    for(var i = 0; i < selectObject.options.length; i++){
        if(selectObject.options[i].selected){
            nroSelecoes++;
        }
    }
    return nroSelecoes;
}
var btn = document.getElementById('btn');
btn.addEventListener("click", function(){
    alert('Total Selecionados: ' + howMany(document.selectForm.tipoMusica))
});

/*do...while
do
    Stat
while(condição)*/

var resultado = '';
var i = 0;

do{
    i+=1;
    resultado += i + '';
}while(i<5);
document.getElementById('exemplo').innerHTML = resultado;
