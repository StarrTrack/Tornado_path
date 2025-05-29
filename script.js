var swiper = new Swiper(".mySwiper", {
  slidesPerView: "1.3",
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



var button = document.querySelector('.btn');
var image = document.querySelector('.image__btn');
var container = document.querySelector('.container_1__part_2');


// Не получилось сделать повторения, требует доработки!
// button.addEventListener('click', function(){
//   button.textContent = 'Скрыть';
//   container.style.display = 'flex';
//   image.src = '../icons/expand_down.svg';
//   button.addEventListener('click', function(){
//     button.textContent = 'Показать все';
//     container.style.display = 'none';
//     image.src = '../icons/expand_up.svg';
//   });
// });

button.addEventListener('click', function() {
  if (button.textContent === 'Скрыть') {
    button.textContent = 'Показать все';
    container.style.display = 'none';
    image.src = 'icons/expand_up.svg';
  } else {
    button.textContent = 'Скрыть';
    container.style.display = 'flex';
    image.src = 'icons/expand_down.svg';
  }
});


