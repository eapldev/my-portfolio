// alternar barra de navegação de ícones
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// seções de rolagem
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //links ativos da barra de navegação
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // cabeçalho fixo
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remova o ícone de alternância e a barra de navegação ao clicar nos links da barra de navegação (rolagem)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}