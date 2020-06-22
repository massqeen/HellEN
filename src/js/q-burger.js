function burgerMenu() {
  const burger = document.querySelector('.header__burger'),
    menu = document.querySelector('.header__menu'),
    logo = document.querySelector('.logo'),
    links = document.querySelectorAll('.header__link');
  // notlinks = document.querySelectorAll('.link__not-active');
  function toggleMenu() {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    logo.classList.toggle('active');
    if (menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }

  burger.addEventListener('click', e => {
    toggleMenu();
  });
  [].forEach.call(links, function (el) {
    el.addEventListener('click', () => toggleMenu());
  });
}

// [].forEach.call(notLinks, function (el) {
//   el.addEventListener('click', () => preventDefault());
// });
burgerMenu();
