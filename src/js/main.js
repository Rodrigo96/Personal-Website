(function () {
    'use strict';
    
    var page = {
        init: function () {
            var menuBtn = document.querySelector('#menu-button div'),
                menu = document.querySelector('nav ul');

                menuBtn.addEventListener('mouseenter', function () {
                    menuBtn.classList.add('open');
                    menu.classList.add('slide-in');
                }, false);
        }
    };

    window.addEventListener('load', function load(event){
        window.removeEventListener('load', load, false);
        page.init();  
    },false);
}());