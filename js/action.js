const logoStart = document.getElementsByClassName('logo');
const logo = logoStart[0];
const sharkStart = document.getElementsByClassName('active');

logo.addEventListener("click", animateLogo);

let toggle = false;

function animateLogo() {
  toggle = !toggle;

  if (toggle) { // Rotate
    logo.classList.add('active');
    logo.classList.remove('logo');
    setTimeout(function() {
      logo.classList.remove('active');
      logo.classList.add('beforeActive');
      logo.classList.add('logo');
    }, 5000);

  }

  if (!toggle) { // Restart Rotate
    logo.classList.add('logo');
    logo.classList.remove('active');
  }
}
