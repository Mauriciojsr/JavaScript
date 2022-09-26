var funcionarios= 
{
    "Arthur":{"Idade": 16,"Cidade": "Chapecó"},
    "Anderson":{"Idade": 27,"Cidade": "Chapecó"},
    "Mauricio":{"Idade": 34,"Cidade": "Chapecó"},
    "Eduardo":{"Idade": 18,"Cidade": "Chapecó"},
    "Maria":{"Idade": 23,"Cidade": "Chapecó"},
    "Alex":{"Idade": 18,"Cidade": "Chapecó"},
}

var funcionarios = JSON.parse(funcionarios);
alert(funcionarios.Arthur);
alert(funcionarios.Anderson.Idade);
alert(funcionarios.Mauricio.Cidade);