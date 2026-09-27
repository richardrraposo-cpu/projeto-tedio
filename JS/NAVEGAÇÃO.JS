  // Navegação da SPA
   export function navegar(pagina) {

        const conteudo = document.getElementById("conteudo");

        if (pagina === "inicio") {
            conteudo.innerHTML = `
                <h1>Estamos perdendo a capacidade de sentir <strong>tédio?</strong></h1>
                <p>Vivemos cercados por notificações, vídeos e redes sociais.</p>
            `;
        }

        if (pagina === "reflexao") {
            conteudo.innerHTML = `
                <h2>O tédio pode ser importante</h2>
                <p>Ficar sem fazer nada também pode ajudar a descansar a mente.</p>
            `;
        }

        if (pagina === "impactos") {
            conteudo.innerHTML = `
                <h2>Vivemos cercados por estímulos</h2>
                <p>A tecnologia está presente em vários momentos do nosso dia.</p>
            `;
        }

        if (pagina === "experimente") {
            conteudo.innerHTML = `
                <h2>10 minutos sem estímulos</h2>
                <p>Deixe o celular de lado e fique alguns minutos em silêncio.</p>
            `;
        }
    }


    // Abre e fecha o menu no celular
   export function abrirMenu() {
        const menu = document.getElementById("menu");
        menu.classList.toggle("menu-aberto");
    }
