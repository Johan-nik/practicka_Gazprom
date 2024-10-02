const modal = document.querySelector('.dialog__filter-status');
const buttonOpenModal = document.querySelector('#status-open-filter');

function openModal() {
    modal.style.display = 'flex';
    modal.showModal();
}

function closeModal(e) {
    if (!e.target.contains(modal)) return;
    modal.style.display = 'none';
    modal.close();  
}

buttonOpenModal.addEventListener('click', openModal);
document.addEventListener('click',closeModal);