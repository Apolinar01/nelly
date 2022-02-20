const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', navToggle);

function navToggle(){
    navToggler.classList.toggle('active');
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
        nav.style.maxHeight = nav.scrollHeight + 'rem'
    }
    else{
        nav.removeAttribute('style')
    }
     
}

window.sr = ScrollReveal();
sr.reveal(".testimonials",{
    duration:3000,
    origin:'bottom',
    distance:'-100px'
});
