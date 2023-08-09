// Меню
let catalogItem = document.querySelector('.catalog-popover-wrapper');
let buttonSubcatalog = document.querySelector('.button-subcatalog');

catalogItem.classList.remove('catalog-closed-nojs');
buttonSubcatalog.classList.remove('button-subcatalog-opened-nojs');

buttonSubcatalog.addEventListener('click', function () {
  if (catalogItem.classList.contains('catalog-closed')) {
    catalogItem.classList.remove('catalog-closed');
    catalogItem.classList.add('catalog-opened');
    buttonSubcatalog.classList.remove('button-subcatalog-opened');
    buttonSubcatalog.classList.add('button-subcatalog-closed');
  } else {
    catalogItem.classList.add('catalog-closed');
    catalogItem.classList.remove('catalog-opened');
    buttonSubcatalog.classList.remove('button-subcatalog-closed');
    buttonSubcatalog.classList.add('button-subcatalog-opened');
  }
});

// Слайд
const slider = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.slider-pagination-item'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();
