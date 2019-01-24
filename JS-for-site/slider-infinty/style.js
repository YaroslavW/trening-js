let slides = document.querySelectorAll('.slide-single');
// console.log(slides); //arr all img with class slide-single
let slider =[];

for ( let i = 0; i < slides.length; i++ ) {
    slider[i] = slides[i].src;
    slides[i].remove();
}
console.log(slider);//arr with img-src