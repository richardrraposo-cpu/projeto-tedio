import { navegar, abrirMenu } from "./navegacao.js";

import {
    abrirModal,
    fecharModal,
    iniciarPausa
} from "./interface.JS";

import {enviarFormulario} from "./formulario.JS";


// Disponibiliza as funções para o HTML
window.navegar = navegar;
window.abrirMenu = abrirMenu;

window.abrirModal = abrirModal;
window.fecharModal = fecharModal;
window.iniciarPausa = iniciarPausa;

window.enviarFormulario = enviarFormulario;