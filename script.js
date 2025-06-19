import './reset.css';
import './style/style.scss';
import 'core-js/stable/object/to-string';
import 'core-js/stable/dom-collections';

document.addEventListener('DOMContentLoaded', function () {
  // Инициализация слайдера брендов
  const brandsSwiper = new Swiper('.brands__swiper_container .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Инициализация слайдера типов ремонта
  const repairSwiper = new Swiper('.repair-types__slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Инициализация слайдера цен
  const pricingSwiper = new Swiper('.pricing__slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
//
const burgerButton = document.querySelector('.header__burger'); // Предполагаемая кнопка-бургер
const nav = document.querySelector('.nav');
const closeButton = document.querySelector('.nav__close');
const overlay = document.querySelector('.overlay');

burgerButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  overlay.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('open');
  overlay.classList.remove('active');
});

// Закрытие на планшетах при клике на overlay
if (window.innerWidth >= 768) {
  overlay.addEventListener('click', () => {
    nav.classList.remove('open');
    overlay.classList.remove('active');
  });
}

// Модальные окна
const callButtons = document.querySelectorAll('[data-modal="call"]');
const feedbackButtons = document.querySelectorAll('[data-modal="feedback"]');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal__close');

// Обработка всех кнопок "Заказать звонок"
callButtons.forEach(button => {
  button.addEventListener('click', () => {
    const callModal = document.querySelector('.modal--call');
    if (callModal) {
      nav.classList.remove('open');
      callModal.classList.add('modal--open');
      overlay.classList.add('overlay--open');
    }
  });
});

// Обработка всех кнопок "Обратная связь"
feedbackButtons.forEach(button => {
  button.addEventListener('click', () => {
    const feedbackModal = document.querySelector('.modal--feedback');
    if (feedbackModal) {
      nav.classList.remove('open');
      feedbackModal.classList.add('modal--open');
      overlay.classList.add('overlay--open');
    }
  });
});

// Закрытие модальных окон по клику на оверлей
if (overlay) {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      modals.forEach(modal => modal.classList.remove('modal--open'));
      overlay.classList.remove('overlay--open');
      nav.classList.remove('open'); // Закрываем навигацию при клике на оверлей
      overlay.classList.remove('active');
    }
  });
}

// Закрытие модальных окон по кнопке
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    if (modal) {
      modal.classList.remove('modal--open');
      overlay.classList.remove('overlay--open');
    }
  });
});

// Закрытие модальных окон по нажатию Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modals.forEach(modal => modal.classList.remove('modal--open'));
    overlay.classList.remove('overlay--open');
    nav.classList.remove('open'); // Закрываем бургер-меню
    overlay.classList.remove('active');
  }

  // Обработчик для кнопок "Показать все"
  const showAllButtons = document.querySelectorAll('.btn');
  showAllButtons.forEach(button => {
    button.addEventListener('click', () => {
      const section = button.closest('section');
      const sectionClass = section.className.split(' ')[0];
      const isExpanded = section.classList.contains(`${sectionClass}--expanded`);

      section.classList.toggle(`${sectionClass}--expanded`);
      button.textContent = isExpanded ? 'Показать все' : 'Скрыть';
      button.setAttribute('aria-expanded', !isExpanded);
    });
  });

  // Обработчик для кнопки "Читать далее"
  const readMoreButton = document.querySelector('.services__read-more');
  if (readMoreButton) {
    readMoreButton.addEventListener('click', () => {
      const section = readMoreButton.closest('.service');
      const isExpanded = section.classList.contains('service--expanded');

      section.classList.toggle('service--expanded');
      readMoreButton.textContent = isExpanded ? 'Читать далее' : 'Скрыть';
      readMoreButton.setAttribute('aria-expanded', !isExpanded);
    });
  }
});
