const botaoMenu = document.querySelector(".header__icon");
const listaMobile = document.querySelector(".header__navlinks-mobile");

function toggleBotao() {
    listaMobile.classList.toggle('active')
}

botaoMenu.addEventListener('click', toggleBotao)