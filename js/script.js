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
