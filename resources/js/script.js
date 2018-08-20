let slideItem = 0;

window.onload = function() {

    this.setInterval(passSlide, 7000);

    let slideWidth = document.getElementById("slideshow").offsetWidth;
    let objects = document.getElementsByClassName("slide");

    for(let element in objects){

        objects[element].style.width = slideWidth;
    }
}

function passSlide(){
    let slideWidth = document.getElementById("slideshow").offsetWidth;

    if(slideItem >= 3){
        slideItem = 0;
    }
    else {
        slideItem++;
    }

    document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-"+(slideWidth * slideItem)+"px";
}

function changeSlide(pos){
    slideItem = pos;
    let slideWidth = document.getElementById("slideshow").offsetWidth;
    document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-"+(slideWidth * slideItem)+"px";
}