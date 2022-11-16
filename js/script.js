const sidepanel = document.querySelector('.sidepanel');
const sidepanelArrow = document.querySelector('.sidepanel__arrow');

sidepanelArrow.addEventListener('click', () => {
    sidepanel.classList.toggle('sidepanel_active');
    sidepanelArrow.classList.toggle('sidepanel__arrow_active');
});



const counters = document.querySelectorAll('.skills__percent');
const lines = document.querySelectorAll('.skills__progress');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});



const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header');
const menuItem = document.querySelectorAll('.header__link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('header_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header_active');
    })
})
