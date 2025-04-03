document.querySelector("#buy-btn").addEventListener("click", function() {
    window.location.href = "https://xn--tiendarpida-q7a.online/products/mini-camara-espia-a9"; // link para site indicado
});

// Função para iniciar a contagem regressiva
function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;
        document.getElementById("timer").textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        if (--timer < 0) {
            timer = duration; // Reinicia a contagem
        }
    }, 1000);
}

startCountdown(600); // 10 minutos regressivo

const names = [
    "Santiago Ramírez", "Valentina López", "Sebastián Torres", "Mariana González", 
    "Juan Pablo Rodríguez", "Camila Fernández", "Andrés Castro", "Isabella Vargas", 
    "Daniel Mendoza", "Sofía Ríos", "Felipe Herrera", "Natalia Pérez", 
    "Alejandro Morales", "Juliana Gutiérrez", "Miguel Navarro", "Laura Suárez", 
    "Manuel Paredes", "Gabriela Castaño", "Tomás Mejía", "Daniela Cardona"
];

function showNotification() {
    const container = document.getElementById("notifications-container");
    const randomName = names[Math.floor(Math.random() * names.length)];
    
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerText = `${randomName} compró ✅`;

    container.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 4000); // Remove a notificação depois de 4 segundos
}

// Exibe notificações a cada 7 a 10 segundos aleatoriamente
setInterval(showNotification, Math.floor(Math.random() * 3000) + 7000);


