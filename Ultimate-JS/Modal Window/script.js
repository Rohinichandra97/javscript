' use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openbtnModal = document.querySelectorAll('.show-modal');
const closebtnModal = document.querySelector('.close-modal');

console.log(openbtnModal);

const hiddenWindow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const addingWindow = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < openbtnModal.length; i++) {
  openbtnModal[i].addEventListener('click', hiddenWindow);
}
closebtnModal.addEventListener('click', addingWindow);
overlay.addEventListener('click', addingWindow);

document.addEventListener('keydown', function (e) {
  console.log('key pressed', e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    addingWindow();
  }
});
