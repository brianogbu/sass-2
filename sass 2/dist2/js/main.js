const menubtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn_burger')

let showmenu = false;

menubtn.addEventListener('click', togglemenu);

function togglemenu() {
    if(!showmenu){
        hamburger.classList.add('open');

        showmenu = true;

    }
    else{
        hamburger.classList.remove('open');

        showmenu = false;
        
    }
}