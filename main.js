'use strict';

const btnClick = document.querySelector('.information__icons');
btnClick.addEventListener('click', (e) => {
  const target = e.target;
  if (target.nodeName === 'I') {
    target.classList.toggle('blue');
  }
});
