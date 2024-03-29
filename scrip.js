var counter = document.getElementById('counter');
var count = 20;

function updateCounter() {
    counter.textContent = count;
    count--;
    if (count < 0) {
        count = 20;
    }
}

// Atualiza o contador imediatamente ao carregar a página
updateCounter();

// Atualiza o contador a cada segundo
setInterval(updateCounter, 10 * 1000);