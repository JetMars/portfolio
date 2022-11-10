const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const menuList = document.querySelectorAll('.menu__link');



hamburger.addEventListener('click', () => {
    menu.classList.toggle('active')
})

closeElem.addEventListener('click', () => {
    menu.classList.toggle('active')
})


menuList.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
})