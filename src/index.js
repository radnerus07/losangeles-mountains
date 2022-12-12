import './style/main.scss';

function changeBg() {
    var navbar = document.getElementById('nav');
    var navtitle = document.getElementById('nav-title')
    var navmenuhis = document.getElementById('navhistory')
    var navmenuteam = document.getElementById('navteam')
    var navitem = document.getElementById('nav-title')
    var scrollValue = window.scrollY;
    if (scrollValue < 150) {
      navbar.classList.remove('nav__bgclr');
      navtitle.classList.remove('nav__title')
      navmenuhis.classList.remove('cnt-clr-reset')
      navmenuteam.classList.remove('cnt-clr-reset')
      navitem.style.display = 'none';
      
    } else {
      navbar.classList.add('nav__bgclr');
      navtitle.classList.add('nav__title')
      navmenuhis.classList.add('cnt-clr-reset')
      navmenuteam.classList.add('cnt-clr-reset')
      navitem.style.display = 'block';
    }
  }
  
  window.addEventListener('scroll', changeBg);

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".imageslides__container");
const mount1Button = document.getElementById("slide-mountain1");
const mount2Button = document.getElementById("slide-mountain2");

mount2Button.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

mount1Button.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

