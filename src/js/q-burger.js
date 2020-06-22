const notLinks = document.querySelectorAll('.link__not-active');
function burgerMenu() {
  const burger = document.querySelector('.header__burger'),
    links = document.querySelectorAll('.header__link'),
    logo = document.querySelector('.logo'),
    menu = document.querySelector('.header__menu');

  function toggleMenu() {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    logo.classList.toggle('active');
    if (menu.classList.contains('active')) {
      // document.body.style.overflow = 'hidden';
      bodyLock();
    } else {
      // document.body.style.overflow = 'visible';
      bodyUnLock();
    }
  }

  burger.addEventListener('click', () => {
    toggleMenu();
  });
  [].forEach.call(links, function (el) {
    el.addEventListener('click', () => toggleMenu());
  });
}

[].forEach.call(notLinks, function (el) {
  el.addEventListener('click', e => e.preventDefault());
});
burgerMenu();
