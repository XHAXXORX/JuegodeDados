window.onload = () => {
    let nRandom1, nRandom2;
    let currentScore = 0;
    let highScore = localStorage.getItem('highScore') || 0;
    
    // Actualizar la puntuación más alta en la interfaz
    document.getElementById('highScore').textContent = highScore;

    const randomItems = (t, n) => {
        let dado;
        while (t.firstChild) t.removeChild(t.firstChild);
        for (let i = 0; i < n; i++) {
            dado = document.createElement("div");
            dado.className = "circleDado";
            t.appendChild(dado);
        }
        t.classList.add("scale");
        setTimeout(() => t.classList.remove("scale"), 600);
    }

    const updateScore = (score) => {
        currentScore = score;
        document.getElementById('score').textContent = currentScore;
        
        if (currentScore > highScore) {
            highScore = currentScore;
            localStorage.setItem('highScore', highScore);
            document.getElementById('highScore').textContent = highScore;
        }
    }

    const rollDice = () => {
        // Deshabilitar el botón durante la animación
        const btn = document.getElementById('btn');
        btn.disabled = true;
        btn.style.opacity = '0.7';

        // Generar números aleatorios
        nRandom1 = Math.floor(Math.random() * 6) + 1;
        nRandom2 = Math.floor(Math.random() * 6) + 1;

        // Animar los dados
        randomItems(document.getElementById("dado1"), nRandom1);
        randomItems(document.getElementById("dado2"), nRandom2);

        // Actualizar puntuación
        updateScore(nRandom1 + nRandom2);

        // Habilitar el botón después de la animación
        setTimeout(() => {
            btn.disabled = false;
            btn.style.opacity = '1';
        }, 600);
    }

    // Evento de clic en el botón
    document.getElementById("btn").onclick = rollDice;

    // Evento de teclado (espacio)
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !document.getElementById('btn').disabled) {
            rollDice();
        }
    });
}