var formulario = document.querySelectorAll(".formDefault")
var invalido = document.querySelectorAll(".obrigatorio")
console.log(formulario)
console.log(invalido)

function enviarFormulario(){
formulario.forEach(validacao) 
}

function validacao(item, index){
    if (item.value === ""){
        invalido[index].innerHTML = "campo obrigatório*";
        item.classList.add("invalido")
    } else {
        invalido[index].innerHTML = "";
        item.classList.remove("invalido")
        item.classList.add("valido")
    }  
}

