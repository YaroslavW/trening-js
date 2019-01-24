let slides = document.querySelectorAll('.slide-single');
// console.log(slides); //arr all img with class slide-single
let slider =[];

for ( let i = 0; i < slides.length; i++ ) {
    slider[i] = slides[i].src;
    slides[i].remove();
}
console.log(slider);//arr with img-src

let step = 0;
let offset = 0;

function draw(){
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slide-single');
    img.style.left = offset * 400 + 'px';
    document.getElementById('slider').appendChild(img);
    
    if ( step + 1 === slider.length ) {
        step = 0;
    } else {
        step++;
    }
    offset = 1;
}
function left() {
    // let imgVisible - collection of visible elements
    let imgVisible = document.querySelectorAll('.slide-single');
    // let offsetImg - image offset
    let offsetImg = 0;

    for ( let i = 0; i < imgVisible.length; i++ ) {
        // offset img left
        imgVisible[i].style.left = offsetImg * 400 - 400 + 'px';
        offsetImg++;
    }
    setTimeout(function(){
        imgVisible[0].remove();
    }, 1000);
}
draw(); draw();
document.onclick = left;