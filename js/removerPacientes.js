var tabela = document.querySelector("#tabela-pacientes");


tabela.addEventListener("dblclick", function(event){
       //o event ele me fala quem foi clicado dos filhos
        //this e o dono do evento e o target e quem sofreu o evento em si
        //tenho que pegar o pai de quem foi clicado
   //pega quem foi clicado TR=paciente=remover
   //parentnode que  e o pai de qualquer no do html
   /*
   Agora ao dar um duplo clique no elemento, o evento sobe até a tabela, e dentro da função conseguimos perguntar qual td foi clicado (event.target) e partir disto subir para o seu pai (parentNode) que é a <tr> do paciente e removê-lá.
   */
   event.target.parentNode.classList.add("fadeOut"); 

    setTimeout(function(){//função que eu quero esperar
       if(event.target.tagName == "TD"){
        event.target.parentNode.remove();//evento de escutar esta no pai quando escuta o double click no filho
         //ele remove cliquei no td e remove o pai que seria o tr
       }
       
    },500);



});




// pacientes.forEach(function(paciente){//pra ter acesso aos itens do meu array coloco a classe paciente
//     paciente.addEventListener("dblclick", function(){
//         this.remove();//this tem a ver com quem acionou o evento o dono do evento nesse caso o this
//         //tem a ver com quem foi clicado que no caso e o paciente
//     });

// });