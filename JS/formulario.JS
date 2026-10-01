    // Envia o formulário


    
     import { mostrarToast } from './interface.JS';
     export function enviarFormulario(event) {
{
    event.preventDefault(); }

    const campos = event.target.querySelectorAll("input, textarea");
    let formularioValido = true;

    campos.forEach(function(campo) {
        if (!validarCampo(campo)) {
            formularioValido = false;
        }
    });

    if (!formularioValido) {
        mostrarToast("⚠ Preencha os campos corretamente.");
        return;
    }

    
    // restante do seu código...

    if (!formularioValido) {
        mostrarToast("⚠ Preencha os campos corretamente.");
        return;
    }

    event.target.reset();
}


// Valida cada campo
function validarCampo(campo) {

    if (campo.value.trim() === "") {

        campo.classList.add("campo-erro");
        campo.classList.remove("campo-sucesso");

        return false;

    } else {

        campo.classList.add("campo-sucesso");
        campo.classList.remove("campo-erro");

        return true;
    }
}