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
}

draw();