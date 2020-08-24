const hamburger = document.getElementById('hamburger');
const navright =  document.getElementById('nav-right');

hamburger.addEventListener('click', () =>{
    navright.classList.toggle('show');
});