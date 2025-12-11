
// toogle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections

let sections = document.querySelectorAll ('section');
let navLinks = document.querySelectorAll ('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach (links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    // sticky header
    let header = document.querySelector ('header');

    header.classList.toggle('sticky', window.scrollY >100);

    // remove toggle isSecureContext and navbar when clcik navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}


 function activateGallery(galleryId) {
      const panels = document.querySelectorAll(`#${galleryId} .panel`);
      panels.forEach(panel => {
        panel.addEventListener('click', () => {
          panels.forEach(p => p.classList.remove('active'));
          panel.classList.add('active');
        });
      });
    }

    activateGallery("certificates");
    activateGallery("achievements");


      let index = 0; // start with 2nd slide as center

  function moveSlide(direction) {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // loop index
    index = (index + direction + totalSlides) % totalSlides;

    // calculate offset so current index is always centered
    const slideWidth = slides[0].offsetWidth;
    const offset = (index - 1) * slideWidth;
    track.style.transform = `translateX(-${offset}px)`;

    // reset classes
    slides.forEach(slide => slide.classList.remove('active', 'blur'));

    // mark center slide
    slides[index].classList.add('active');

    // left & right blur
    slides[(index - 1 + totalSlides) % totalSlides].classList.add('blur');
    slides[(index + 1) % totalSlides].classList.add('blur');
  }

  document.addEventListener("DOMContentLoaded", () => {
    moveSlide(0);
    window.addEventListener("resize", () => moveSlide(0));
  });
