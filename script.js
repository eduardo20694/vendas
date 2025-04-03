// Redireciona para a página do produto ao clicar no botão "Comprar Agora"
document.querySelector("#botao-comprar").addEventListener("click", function () {
    window.location.href = "https://xn--tiendarpida-q7a.online/products/mini-camara-espia-a9";
});

// Função para iniciar a contagem regressiva
function iniciarContagemRegressiva(duracao) {
    let tempo = duracao;

    setInterval(function () {
        let minutos = Math.floor(tempo / 60);
        let segundos = tempo % 60;

        document.getElementById("temporizador").textContent = `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;

        if (--tempo < 0) {
            tempo = duracao; // Reinicia a contagem
        }
    }, 1000);
}

// Inicia a contagem regressiva com 10 minutos (600 segundos)
iniciarContagemRegressiva(600);

// Lista de nomes para exibir notificações de compras
const nomes = [
    "Santiago Ramírez", "Valentina López", "Sebastián Torres", "Mariana González",
    "Juan Pablo Rodríguez", "Camila Fernández", "Andrés Castro", "Isabella Vargas",
    "Daniel Mendoza", "Sofía Ríos", "Felipe Herrera", "Natalia Pérez",
    "Alejandro Morales", "Juliana Gutiérrez", "Miguel Navarro", "Laura Suárez",
    "Manuel Paredes", "Gabriela Castaño", "Tomás Mejía", "Daniela Cardona"
];

// Exibe uma notificação de compra aleatória
function exibirNotificacao() {
    const container = document.getElementById("caixa-notificacoes");
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];

    const notificacao = document.createElement("div");
    notificacao.classList.add("notificacao");
    notificacao.innerText = `${nomeAleatorio} comprou ✅`;

    container.appendChild(notificacao);

    setTimeout(() => {
        notificacao.remove();
    }, 4000); // Remove a notificação após 4 segundos
}

// Exibe notificações a cada 7 a 10 segundos aleatoriamente
setInterval(exibirNotificacao, Math.floor(Math.random() * 3000) + 7000);

// Atualiza o número de visualizadores e exibe o popup
document.addEventListener("DOMContentLoaded", function () {
    const popupVisualizadores = document.getElementById("caixa-visualizadores");
    const contadorVisualizadores = document.getElementById("contador-visualizadores");

    function atualizarVisualizadores() {
        let visualizadoresAtuais = parseInt(contadorVisualizadores.innerText);
        let alteracao = Math.random() < 0.5 ? -1 : 1; // Aumenta ou diminui aleatoriamente
        let novosVisualizadores = visualizadoresAtuais + alteracao;

        if (novosVisualizadores < 20) novosVisualizadores = 22; // Garante um mínimo realista
        if (novosVisualizadores > 50) novosVisualizadores = 48; // Define um máximo realista

        contadorVisualizadores.innerText = novosVisualizadores;
    }

    function exibirPopup() {
        popupVisualizadores.style.display = "block";

        setTimeout(() => {
            popupVisualizadores.style.display = "none";
        }, 5000); // Some após 5 segundos
    }

    // Atualiza os visualizadores a cada 6 segundos
    setInterval(() => {
        atualizarVisualizadores();
        exibirPopup();
    }, 6000);
});

// Exibe o popup de promoção após 2 segundos
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("caixa-promocao").style.display = "flex";
    }, 2000);
});

// Fecha o popup de promoção
function fecharPopupPromocao() {
    document.getElementById("caixa-promocao").style.display = "none";
}




