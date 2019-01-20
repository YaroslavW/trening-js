window.onload = function(){
    document.querySelector('#menu').onmouseover = menuShow;
    document.querySelector('#menu').onmouseout = menuHide;
    function menuShow(){
        document.querySelector('#menu').style.left = 0;
    }
    function menuHide(){
        document.querySelector('#menu').style.left = '-230px';
    }
}