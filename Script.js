const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('show');
})