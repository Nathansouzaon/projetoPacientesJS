
var titulo = document.querySelector(".titulo");
titulo.textContent = "nathan souza"; //altera o conteudo de texto
		

var pacientes = document.querySelectorAll(".paciente");
//length retorna o tamanho do array
for(var i=0; i< pacientes.length; i++){//percorrer até o final da lista
    var paciente = pacientes[i];//todos os pacientes obtidos guardado na var paciente
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = validaPeso(peso);//true ou false
var alturaValida = validaAltura(altura);


//validação
if(!pesoValido){//so vou entrar nesse if se o valor e invalido
    console.log("Peso Invalido");
    pesoValido = false;//se der invalida vira falso
    tdImc.textContent = "Peso Invalido";
    paciente.classList.add("paciente-invalido");//classlist retorna todas as classes do objeto e o medoto add adiciona uma nova classe modificar algo visual e no css
}

if(!alturaValida){//so vou entrar nesse if se o valor e invalido
    console.log("Altura Invalida");
    alturaValida = false;
    tdImc.textContent = "Altura Invalida";
    paciente.classList.add("paciente-invalido");
}

if(alturaValida && pesoValido){
var imc = calculaImc(peso, altura)
tdImc.textContent = imc;//colocar o valor do imc atualizado
}
}


function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso/(altura * altura);
    return imc.toFixed(2);
}


// function mostraMensagem(){
//     confirm("ola fui clicado!");
// }

// console.log(paciente);//tr
// console.log(tdAltura);//td peso
// console.log(altura);//obter 100



//não buscar pela tag e sim por uma class ou id
//queryselector permite buscar pequenos pedaços do documento para manipular traz apenas um unico elemento para trazer varios elementos preciso usar o querySelectorALL

//textcontext busca o conteudo de texto para manipular