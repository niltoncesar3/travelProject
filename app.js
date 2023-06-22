AOS.init();


// background image slider


//navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 188) {
        navbar.classList.add('bg')
    } else {
        navbar.classList.remove('bg')
    }
})


