let navbar = document.querySelector('.menu')
let menu = document.querySelector('.menu-icon')


menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
}

let bell = document.querySelector('.notification')
document.querySelector('#bell-icon').onclick =() =>{
    bell.classList.toggle('active');
}

// swiper

var swiper = new Swiper(".trending-content", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      });