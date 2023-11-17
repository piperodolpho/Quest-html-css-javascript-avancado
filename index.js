var formulario = document.querySelectorAll(".formDefault").value
var invalido = document.querySelectorAll(".obrigatorio")

function enviarFormulario(){
formulario.forEach(element => {
    if (formulario == ""){
        invalido[element].innerHTML = "campo obrigatório*";
        this.element.classList.add("invalido")
    } else {
        this.element.classList.add("valido")
    }  
});
}

