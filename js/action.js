const logoStart = document.getElementsByClassName('logo');
const logo = logoStart[0];

logo.addEventListener("click", animateLogo);

function animateLogo() {
  logo.classList.add('active');
  logo.classList.remove('logo');
}
