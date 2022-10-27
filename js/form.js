//tudo relacionado ao meu form

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
     event.preventDefault();//previne o comportamento padrao para usar coloco o event no paramentro
     //previne o comportamento padrao do meu botao que e recarregar a pagina
     var form = document.querySelector("#form-adiciona");
     //console.log(form.peso.value);//acessar o valor de cada campo que seria o value

    const paciente = obtemPacienteDoForm(form);
    
    var erros = validaPaciente(paciente)

     //monta o paciente e valida ele
     if(erros.length > 0){//se o tamanho da minha string for maior que 0 tem um erro
        //se não for paciente valido
        exibeMensagensErro(erros);

        return;//retorna vazio ele vai sair da função e não vai adicionar na tabela
     }

     adicionaPacienteTabela(paciente);

     //para colocar um elemento dentro do outro como se fosse filho vamos usar a função appendChild

     form.reset();
   var mensangensErro =  document.querySelector("#mensagens-erro");
     mensangensErro.innerHTML = "";


});//adiciona um escutador de eventos

function adicionaPacienteTabela(paciente){
  var pacienteTr = montaTr(paciente);    //cria tr e td do paciente
  var tabela = document.querySelector("#tabela-pacientes");     //adicionando pacientes na tabela
  tabela.appendChild(pacienteTr);//colocando como filho os tr que acabei de criar 
}

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");//pra cada item do meu array vou percorrer e colocar uma nova li la dentro

    ul.innerHTML = "";//permite controlar o html interno  de um elemento

    //forEach passa por todos elementos 
    erros.forEach(function(erro){//pra cada item do meu array você executa essa função
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}











function obtemPacienteDoForm(form){
    //criei meu proprio objeto com as caracteristas do paciente
    var paciente = {
        nome:form.nome.value,//o valor do nome e o que vou extrair do meu form
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,//caracteristicas
        imc:calculaImc(form.peso.value, form.altura.value)
    }

   return paciente;
}

//recebe os dados dos pacientes

function montaTr(paciente){
    //criar um elemento para adicionar um novo item cria qualquer tag html que eu quiser
    var pacienteTr = document.createElement("tr"); 
    pacienteTr.classList.add("paciente");

    //para cada tr coloca um filho qual e o filho? o td que ela vai criar com a função montaTd com os valores
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));//colocar os td dentro dos tr e colocar os tr dentro do tbody
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}


function validaPaciente(paciente){//vai estar preenchido porque a função obtempaciente do form ja vai criar um paciente com os dados que obter do forumalario

    var erros = [];

    if(paciente.nome.length == 0){
      erros.push("O Nome Não Pode Ser Em Branco");
    }

  if(!validaPeso(paciente.peso)){
    erros.push("Peso Inválido");
  }

  if(!validaAltura(paciente.altura)){
    erros.push("Altura Inválida");
  }

  if(paciente.gordura.length == 0){
    erros.push("A Gordura Não Pode Ser Em Branco");
  }

  if(paciente.peso.length == 0){
    erros.push("O Peso Não Pode Ser Em Branco");
  }
  if(paciente.altura.length == 0){
    erros.push("O Altura Não Pode Ser Em Branco");
  }

  return erros;

}