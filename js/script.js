let menuOpened = false;
const button = document.querySelector('.menu-mob');
const menu = document.querySelector('.menu li a');

button.addEventListener("click" ,() =>{
    if (!menuOpened) {
        menu.style.display = 'flex';
        menuOpened = true;
    } else{
        menu.style.display = 'none';
        menuOpened = false;
    }

})

