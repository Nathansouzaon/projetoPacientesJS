//ajax
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//abre a conexa com o endereço que vamos fazer

    xhr.addEventListener("load", function(){//quando a função carregar exibe pra mim
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;//essa sempre vai ser a resposta
            
            var pacientes = JSON.parse(resposta);//vai devolver um array de objeto //transformar resposta que e um texto em um array de paciente
        
             pacientes.forEach(function(paciente){
                adicionaPacienteTabela(paciente);
             })
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }


        
    });

    xhr.send();//pega a requisição e envia ela

});