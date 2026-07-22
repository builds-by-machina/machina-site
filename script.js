const email = document.getElementById('email');

document.getElementById('cta').addEventListener('click', () => {
  email.classList.remove('flash');
  void email.offsetWidth;
  email.classList.add('flash');
});

email.addEventListener('animationend', () => {
  email.classList.remove('flash');
});
