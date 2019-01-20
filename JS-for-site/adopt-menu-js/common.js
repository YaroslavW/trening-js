window.onload = function(){
    document.querySelector('#menu').onmouseover = menuShow;
    document.querySelector('#menu').onmouseout = menuHide;

    document.onkeydown = function (event) {
        console.log( event );
        if ( event.code == "KeyM")  menuShow();
        if ( event.code == "Escape") menuHide();
    }

    function menuShow(){
        document.querySelector('#menu').style.left = 0;
    }
    function menuHide(){
        document.querySelector('#menu').style.left = '-230px';
    }
}