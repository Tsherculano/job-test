function initModal(idDivModal) {
  const modal = document.getElementById(idDivModal);
  modal.classList.add('show');
  modal.addEventListener('click',(event)=>{
    if(event.target.className == 'btn-close') {
      modal.classList.remove('show');
    } 
  });
}

const buttonCreateForm = document.querySelector('.btn-CreateForm');
buttonCreateForm.addEventListener('click', () => initModal('modal-menu'));

