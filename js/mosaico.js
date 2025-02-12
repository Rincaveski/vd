const mosaico = document.querySelector('body');
const modal = document.querySelector('.modal__MenuAuxiliar');

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();

  // Pega as dimensões da janela e do menu
  const { clientX: mouseX, clientY: mouseY } = event;
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  const menuHeight = modal.offsetHeight;
  const menuWidth = modal.offsetWidth;

  // Calcula a posição do menu (valida limites)
  const positionX = mouseX + menuWidth > windowWidth ? mouseX - menuWidth : mouseX;
  const positionY = mouseY + menuHeight > windowHeight ? mouseY - menuHeight : mouseY;

  // Define a posição do menu
  modal.style.left = `${positionX}px`;
  modal.style.top = `${positionY}px`;

  // Exibe o menu
  modal.style.display = 'block';
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.modal__MenuAuxiliar')) {
    return;
  }

  modal.style.display = 'none';
});

function atualizarRelogio() {
  const agora = new Date();
  const dia = agora.getDate().toString().padStart(2, '0');
  const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
  const ano = agora.getFullYear();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');
  
  document.querySelector(".mosaico__data").textContent = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);
