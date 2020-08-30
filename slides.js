const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev'); 
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    // check for next slide
    if(current.nextElementSibling) {
        //add current to the next sibliing
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    // check for prev slide
    if(current.previousElementSibling) {
        //add current to the prev sibliing
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});

//auto slide
if (auto) {
    //run next slided at interval time 
    slideInterval = setInterval(nextSlide, intervalTime);
}