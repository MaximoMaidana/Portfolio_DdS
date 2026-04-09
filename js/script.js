
const botonModo = document.getElementById('boton-modo-oscuro');
const cuerpo = document.body;
const emoji = document.getElementById('emoji-tema');


const temaGuardado = localStorage.getItem('tema-portfolio');

if (temaGuardado === 'oscuro') {
    cuerpo.classList.add('modo-oscuro');
    emoji.textContent = '☀️';
}

botonModo.addEventListener('click', () => {
    
    cuerpo.classList.toggle('modo-oscuro');
    
    
    if (cuerpo.classList.contains('modo-oscuro')) {
        emoji.textContent = '☀️';
        localStorage.setItem('tema-portfolio', 'oscuro');
    } else {
        emoji.textContent = '🌙';
        localStorage.setItem('tema-portfolio', 'claro');
    }
});

