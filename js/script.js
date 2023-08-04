let catalogPopover = document.querySelector('.catalog-popover-wrapper');
let buttonSubcatalog = document.querySelector('.button-subcatalog');

catalogPopover.classList.remove('popover-closed-nojs');
buttonSubcatalog.classList.remove('button-subcatalog-opened-nojs');

buttonSubcatalog.addEventListener('click', function () {
  if (catalogPopover.classList.contains('popover-closed')) {
    catalogPopover.classList.remove('popover-closed');
    catalogPopover.classList.add('popover-opened');
    buttonSubcatalog.classList.remove('.button-subcatalog-opened');
    buttonSubcatalog.classList.add('button-subcatalog-closed');
  } else {
    catalogPopover.classList.add('popover-closed');
    catalogPopover.classList.remove('popover-opened');
    buttonSubcatalog.classList.remove('.button-subcatalog-closed');
    buttonSubcatalog.classList.add('button-subcatalog-opened');
  }
});
