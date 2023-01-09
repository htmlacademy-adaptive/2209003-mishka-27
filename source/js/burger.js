'use strict';

{
  const button = document.querySelector('.header__burger');
  const CLASS_FOR_ACTIVE_BUTTON = 'header__burger--active';

  const menuLinks = document.querySelectorAll('.navigation__menu-links');
  const CLASS_FOR_OPEN_MENU_LINK = 'navigation__menu-links--open';

  const blockUnderBurgerMenu = document.querySelector('[data-under-burger-menu]');
  const CLASS_FOR_BLOCK_UNDER_BURGER_MENU = 'main--with-js';

  const maxWindowWidth = 768;

  const toggleBurgerMenu = () => {
    menuLinks.forEach((menuLink) => {
      menuLink.classList.toggle(CLASS_FOR_OPEN_MENU_LINK);
    });

    button.classList.toggle(CLASS_FOR_ACTIVE_BUTTON);
  };

  const closeBurgerMenu = () => {
    menuLinks.forEach((menuLink) => {
      menuLink.classList.remove(CLASS_FOR_OPEN_MENU_LINK);
    });

    button.classList.remove(CLASS_FOR_ACTIVE_BUTTON);
  };

  // start
  blockUnderBurgerMenu.classList.add(CLASS_FOR_BLOCK_UNDER_BURGER_MENU);
  closeBurgerMenu();

  // actions
  button.addEventListener('click', toggleBurgerMenu);

  document.body.addEventListener('click', (event) => {
    const target = event.target;

    if (button.contains(target)) {
      return;
    }

    menuLinks.forEach((menuLink) => {
      if (menuLink.contains(target)) {
        return;
      }
    });

    closeBurgerMenu();
  });

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > maxWindowWidth) {
      closeBurgerMenu();
    }
  });
}
