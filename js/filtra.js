var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){//pegar o conteudo de texto e filtrar
    //o this nesse caso e o campofiltro
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){//se o valor de Texto digitado tiver o comprimento maior que 0
        //se tem algo digitado faço a filtragem
         for (var i = 0; i < pacientes.length; i++) {
           //esse paciente tem o nome igual eu digite no meu campo
    
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");//dentro do paciente estamos buscando o td com a classe nome
        var nome = tdNome.textContent;//estraindo o conteudo da td
        //quero esconder se o nome for diferente do this.value se for igual quero mostrar

       var comparavel = nome.substring(0, this.value.length); /*Como o primeiro parâmetro é o inicio, e queremos comparar desde o início da string nome, vamos utilizar como início o valor 0, ou seja, sempre a partir do primeiro caractere. Mas qual é o fim? O fim é justamente o tamanho do valor digitado:*/

       var comparavelMinusculo = comparavel.toLowerCase();
       var valorDigitadoMinusculo = this.value.toLowerCase();

    
        if(!(valorDigitadoMinusculo == comparavelMinusculo)){//pega pelos alguma das letras da regexp
            paciente.classList.add("invisivel");
        }else{
            paciente.classList.remove("invisivel");
        }   
            
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){//pra cada paciente eu quero remover dele a classe de deixar invisivel 
    //pra quando eu apagar todo mundo 
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");

        }
    }

});

    // var expressao = new RegExp(this.value, "i");//oque eu quero que regExp busque? o conteudo de texto do meu campo e como eu quero que ela busque "i" busca M ou m
        /*
        O modificador "i" é para indicar que estamos buscando por case-insensitive, ou seja tanto "Pa" quanto "pa" achariam a palavra "Paulo", ele não liga para a diferença entre maísuculas e minúsculas.
        Com a expressão regular em mãos, só precisamos pedir para ela testar se o nome do usuário bate com o que foi digitado. Para isto, vamos utilizar sua função .test, que em caso positivo deve exibir o paciente removendo a sua classe invisivel, e em caso negativo deve esconder o paciente adicionando a classe invisivel :
        */