const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.querySelector('.modal__text');
const closeButton = document.querySelector('.modal__close');
const overlay = document.querySelector('.modal__overlay');

function openModal() {
  modal.classList.add('modal--open');
}

function closeModal() {
  modal.classList.remove('modal--open');
}

// Ver detalles: abre el modal con los datos de la tarjeta
document.querySelectorAll('[data-open-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.project-card');
    modalTitle.textContent = card.querySelector('.project-card__title').textContent;
    modalText.textContent = card.querySelector('.project-card__text').textContent;
    openModal();
  });
});

// Cerrar: botón, clic en el fondo oscuro o tecla Escape
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Destacar: alterna el modificador y el badge de la tarjeta
document.querySelectorAll('[data-toggle-featured]').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.project-card');
    const badge = card.querySelector('.project-card__badge');
    const isFeatured = card.classList.toggle('project-card--featured');
    badge.classList.toggle('project-card__badge--hidden', !isFeatured);
  });
});