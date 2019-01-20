window.onload = function(){
    const menu = document.querySelector('#menu');
    menu.onmouseover = menuShow;
    menu.onmouseout = menuHide;

    document.onkeydown = function (event) {
        console.log( event );
        if ( event.code == "KeyM")  menuShow();
        if ( event.code == "Escape") menuHide();
    }

    function menuShow(){
        menu.style.left = 0;
    }
    function menuHide(){
        menu.style.left = '-230px';
    }
}