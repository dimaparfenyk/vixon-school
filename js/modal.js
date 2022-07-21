(() => {
  const refs = {
    openModalBtn: document.querySelector('.hero_btn'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
