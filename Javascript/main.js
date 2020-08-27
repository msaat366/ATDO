const hamburger = document.getElementById('hamburger');
const navright =  document.getElementById('nav-right');

hamburger.addEventListener('click', () =>{
    navright.classList.toggle('show');
})

let x = document.getElementsByClassName("update-post");
let next = document.getElementsByClassName("next");
let prev = document.getElementsByClassName("previous");

let slideIndex = 1;
  showDivs(slideIndex);


function next_previous(n) {
  
  showDivs(slideIndex += n);
  //handleDisabled( slideIndex += n);

}

function showDivs(n) {
  let i;
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function handleDisabled(newIndex) {
  prev.style.display = "block";
  next.style.display = "block";

  if (newIndex === x.length) {
    prev.style.display = "none";
  } else if (newIndex === 1) {
    next.style.display = "none";
  }
}

function latestpost(){
    let latest = document.getElementsByClassName("update-post");
    for (let i = 0; i < latest.length; i++) {
        latest[i].style.display = "none";
      }
    latest[0].style.display = "block";   
}

  



