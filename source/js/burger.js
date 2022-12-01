(function () {
  'use strict';

  const button = document.querySelector('.header__burger');
  const linkLists = document.querySelectorAll('.navigation__menu-links');
  const CLASS_FOR_OPEN = 'navigation__menu-links--open';

  button.addEventListener('click', () => {
    linkLists.forEach((linkList) => {
      linkList.classList.toggle(CLASS_FOR_OPEN);
    });
  });

  document.body.addEventListener('click', (event) => {
    const target = event.target;

    // button children
    if (button.contains(target)) {
      return;
    }

    // linkLists children
    let isLinkListsChildren = false;
    linkLists.forEach((linkList) => {
      if (linkList.contains(target)) {
        isLinkListsChildren = true;
      }
    });

    if (isLinkListsChildren) {
      return;
    }

    // default
    linkLists.forEach((linkList) => {
      linkList.classList.remove(CLASS_FOR_OPEN);
    });
  });
})();
