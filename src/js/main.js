(function () {
  'use strict';
  
  var page = {
    init: function () {

      var menuWraper = document.getElementById('menu-wraper'),
          menuBtn = document.getElementById('menu-btn'),
          menu = menuWraper.querySelector('.menu'),
          demosBtn = document.getElementById('demos-menu-btn'),
          demosMenu = demosBtn.querySelector('#demos-menu'),
          isInMenu = false, // true if mouse is over .menu
          isAnimating = false; // true if menu is animating

      function openMenu() {
        isAnimating = true;
        menuBtn.classList.add('menu-btn-open');
        menu.classList.add('menu-open');
        setTimeout(function () {
          isAnimating = false;
        } ,300);
      }

      function closeMenu() {
        isAnimating = true;
        menuBtn.classList.remove('menu-btn-open');
        menu.classList.remove('menu-open');
        setTimeout(function () {
          isAnimating = false;
        } ,300);
      }
      
      menuBtn.addEventListener('click', function () {
        if (!isAnimating) {
          if (menu.classList.contains('menu-open'))
            closeMenu();
          else
            openMenu();
        }
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

      function closeDemosMenu() {
        demosMenu.classList.remove('open-dropdown-menu');
      }

      function openDemosMenu() {
        demosMenu.classList.add('open-dropdown-menu');
      }

      function toggleDemosMenu() {
        if (demosMenu.classList.contains('open-dropdown-menu'))
          closeDemosMenu();
        else
          openDemosMenu();
      }

      demosBtn.addEventListener('click', toggleDemosMenu, false);

      demosBtn.addEventListener('mouseenter', openDemosMenu, false);

      demosBtn.addEventListener('mouseleave', closeDemosMenu, false);

    }
  };

  window.addEventListener('load', function load(event){
    window.removeEventListener('load', load, false);
    page.init();  
  },false);
}());