  // Abre o modal
    export function abrirModal() {
        const modal = document.getElementById("modal");
        modal.classList.add("modal-aberto");
    }


    // Fecha o modal
    export function fecharModal() {
        const modal = document.getElementById("modal");
        modal.classList.remove("modal-aberto");
    }


    // Mostra a mensagem na tela
    export function mostrarToast(mensagem) {
        const toast = document.getElementById("toast");
        const texto = document.getElementById("toast-mensagem");

        texto.textContent = mensagem;
        toast.classList.add("toast-visivel");

        setTimeout(function() {
            toast.classList.remove("toast-visivel");
        }, 3000); 
    }


    // Inicia a pausa
    export function iniciarPausa() {
        fecharModal();
        mostrarToast("✓ Momento de pausa iniciado!");
    }

