(function () {
  'use strict';
  
  var page = {
    init: function () {
      var menuBtn = document.getElementById('menu-btn'),
          menu = document.getElementById('menu'),
          menuNav = document.getElementById('menu-nav');

      menuBtn.addEventListener('mouseenter', function () {
        console.log('enter');
        menuBtn.classList.add('open');
        menu.classList.add('slide-in');
      }, false);

      menuNav.addEventListener('mouseleave', function () {
        console.log('leave');
        setTimeout(function () {
          menuBtn.classList.remove('open');
          menu.classList.remove('slide-in');
        }, 500);
      }, false);
    }
  };

  window.addEventListener('load', function load(event){
    window.removeEventListener('load', load, false);
    page.init();  
  },false);
}());