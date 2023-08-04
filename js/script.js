let catalogItem = document.querySelector('.navigation-catalog-item');
let buttonSubcatalog = document.querySelector('.button-subcatalog');

catalogItem.classList.remove('catalog-closed-nojs');

buttonSubcatalog.addEventListener('click', function () {
  if (catalogItem.classList.contains('catalog-closed')) {
    catalogItem.classList.remove('catalog-closed');
    catalogItem.classList.add('catalog-opened');
  } else {
    catalogItem.classList.add('catalog-closed');
    catalogItem.classList.remove('catalog-opened');
  }
});
