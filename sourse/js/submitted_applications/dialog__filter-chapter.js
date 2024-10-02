const modal_chapter = document.querySelector('.dialog__filter-chapter');
const buttonOpenModal_chapter = document.querySelector('#chapter-open-filter');

function openModal_chapter() {
    modal_chapter.style.display = 'flex';
    modal_chapter.showModal();
}

function closeModal_chapter(e) {
    if (!e.target.contains(modal_chapter)) return;
    modal_chapter.style.display = 'none';
    modal_chapter.close();  
}

buttonOpenModal_chapter.addEventListener('click', openModal_chapter);
document.addEventListener('click',closeModal_chapter);