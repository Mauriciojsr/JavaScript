$(function(){
    var operacao = "A"; // "A" = Adição
    var indice_selecionado = -1; 
    var tbLista = localStorage.getItem("tbLista");//Recuperar os dados armazenados
    tbLista = JSON.parse(tbLista);//Convertendo a String para Objeto

    if(tbLista == null) // Caso não exista conteudo, iniciamos um vetor vazio!
        tbLista = [];

        //Adiciona novo registro
        function adicionar(){
            var cli = GetLista("Codigo", $("#txtCodigo").val());
            if(cli != null){ //Verifica se o codigo já está cadastrado
                alert("Código já cadastrado!");
                return;
            }
            var lista = JSON.stringify({
                Codigo   : $("#txtCodigo").val(),
                Nome     : $("#txtDescrição").val(),
                Telefone : $("#txtQuantidade").val()
                
            });
            tbClientes.push(lista);
            localStorage.setItem("tbLista", JSON.stringify(tbLista));
            alert("Registro cadastrado com sucesso!");
            return true;
        }

        //Edita registro cadastrado
        function Editar(){
            tbLista[indice_selecionado] = JSON.stringify({
                Codigo     : $("#txtCodigo").val(),
                Descricao  : $("#txtDescrição").val(),
                Quantidade : $("#txtQuantidade").val()
                
            });
            localStorage.setItem("tbLista", JSON.stringify(tbClientes));
            alert("Informações editadas com sucesso!")
            operacao = "A";
            return true;
        }

        //Listar conteúdo
        function Listar(){
            $("#tblListar").html("");
            $("#tblListar").html(
                "<thead>" + "<tr>" + "<th></th>" + 
                "<th>Código</th>" +
                "<th>Descrição</th>" +
                "<th>Quantidade</th>" +
                "</tr>" +
                "</thead>" +
                "<tbody>" +
                "</tbody>"
            );
            for(var i in tbLista){
                var cli = JSON.parse(tbLista[i]);
                    $("#tblListar tbody").append("<tr>" + //.append() method inserts a set of Node objects or string
                    "	<td><img src='img/edit.png' alt='"+i+"' class='btnEditar'/><img src='img/delete.png' alt='"+i+"' class='btnExcluir'/></td>" + 
                    "	<td>"+cli.Codigo+"</td>" + 
                    "	<td>"+cli.Descricao+"</td>" + 
                    "	<td>"+cli.Quantidade+"</td>" 
                    );
        }

        }

        //Função que exclui o resgitro
        function Excluir(){
            indice_selecionado = parseInt($(this).attr("alt"));
            tbLista.splice(indice_selecionado, 1);//O método splice() aletera o conteudo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
            localStorage.setItem("tbLista", JSON.stringify(tbLista));
            alert("Registro excluído.");
        }

        function GetLista(propriedade, valor){
            var cli = null;
            for(var item in tbLista){
                var i = JSON.parse(tbLista[item]);
                if(i[propriedade] == valor)
                cli = i;
            }
            return cli;
        }
        Listar();

        $("#frmCadastro").bind("submit", function(){
            if(operacao == "A")
                return adicionar();
            else
                return Editar();
        });

        $(".btnEditar").bind("click", function(){
            operacao = "E";
            indice_selecionado = parseInt($(this).attr("alt"));
            var cli = JSON.parse(tbLista[indice_selecionado]);
                $("#txtCodigo").val(cli.Codigo);
                $("#txtDescricao").val(cli.Descricao);
                $("#txtQuantidade").val(cli.Quantidade);
                $("#txtCodigo").attr("readonly", "readonly");
                $("#txtDescricao").focus();

        });

        $(".btnExcluir").bind("click", function(){
            indice_selecionado = parseInt($(this).attr("alt"));
            Excluir();
            Listar();
        });

        

});


