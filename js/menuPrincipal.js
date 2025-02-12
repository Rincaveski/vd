const modalMenuPrincipal = document.querySelector('.modal__MenuPrincipal');
const listaMenuPrincipal = document.querySelector('.modal__MenuPrincipal-lista');
const menuPrincipal = document.querySelector('[data-auxiliar="menuPrincipal"]');
const fecharMenu = document.querySelector('[data-principal="fechar"]');

document.addEventListener('click', (e) => {
  if (menuPrincipal.contains(e.target)) {
    document.querySelector('.modal__MenuAuxiliar').style.display = 'none';
    modalMenuPrincipal.style.display = 'block';
  }

  if (e.target.dataset.principal === 'ajustes') {
    modalMenuPrincipal.style.backgroundImage = 'url(../images/ajustes.png)';
    listaMenuPrincipal.style.gridTemplateColumns = 'repeat(5, 1fr)';
    listaMenuPrincipal.innerHTML = `
      <li class="modal__MenuPrincipal-item" data-ajustes="geral"></li>
      <li class="modal__MenuPrincipal-item" data-ajustes="encoder"></li>
      <li class="modal__MenuPrincipal-item" data-ajustes="agenda"></li>
      <li class="modal__MenuPrincipal-item" data-ajustes="rede"></li>
      <li class="modal__MenuPrincipal-item" data-ajustes="detectar"></li>
      <li class="modal__MenuPrincipal-item" data-ajustes="ptz"></li>
      <li class="modal__MenuPrincipal-item" data-ajustes="tela"></li>
      <li class="modal__MenuPrincipal-item" data-ajustes="padrao"></li>
      <li class="modal__MenuPrincipal-item" data-ajustes="remoto"></li>
    `;
  }

  if (e.target.dataset.ajustes === 'encoder') {
    modalMenuPrincipal.style.backgroundImage = 'url(../images/encoder.png)';
    modalMenuPrincipal.style.backgroundSize = 'cover';
  }
})

fecharMenu.addEventListener('click', () => {
  modalMenuPrincipal.style.display = 'none';
  modalMenuPrincipal.style.backgroundImage = 'url(../images/menuprincipal.png)';
})