(function () {
  'use strict';
  
  var page = {
    init: function () {

      var menuWraper = document.getElementById('menu-wraper'),
          menuBtn = document.getElementById('menu-btn'),
          menu = menuWraper.querySelector('.menu'),
          isInMenu = false; // true if mouse is over .menu

      function openMenu() {
        menuBtn.classList.add('menu-btn-open');
        menu.classList.add('menu-open');
      }

      function closeMenu() {
        menuBtn.classList.remove('menu-btn-open');
        menu.classList.remove('menu-open');
      }
      
      menuBtn.addEventListener('click', function () {
        if (menu.classList.contains('menu-open'))
          closeMenu();
        else
          openMenu();
      }, false);

      menuBtn.addEventListener('mouseenter', openMenu, false);

      menuWraper.addEventListener('mouseenter', function () {
        isInMenu = true;
      }, false);

      menuWraper.addEventListener('mouseleave', function () {
        isInMenu = false;
        setTimeout(function () {
          if (!isInMenu) closeMenu();
        }, 500);
      }, false);

    }
  };

  window.addEventListener('load', function load(event){
    window.removeEventListener('load', load, false);
    page.init();  
  },false);
}());