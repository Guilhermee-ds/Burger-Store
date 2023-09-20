const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const naveClose = document.getElementById('nav-close');

naveClose.addEventListener('click', () =>{
    navMenu.classList.add('hidden');
}),

hamburger.addEventListener("click",() =>{
    navMenu.classList.remove('hidden');
})
