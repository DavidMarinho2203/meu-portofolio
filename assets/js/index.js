// Evento para trocar o simbolo do menu e abrir e fechar o menu
const menu = document.querySelector('#abrir__menu');
const menuLinks = document.querySelector('#menu__links');
menu.addEventListener('click', () => {
    menu.classList.toggle('ri-close-large-line');
    menu.classList.toggle('ri-menu-line');

    if(menuLinks.style.display == 'flex'){
        menuLinks.style.display = 'none';
    }else{
        menuLinks.style.display = 'flex';
    }       

})

if(window.innerWidth > 768){
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.1)';
            card.children[0].style.display = 'flex';
        })
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.children[0].style.display = 'none';
        })
    })



}else{
    document.querySelectorAll('#links a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.toggle('ri-close-large-line');
            menu.classList.toggle('ri-menu-line');
            menuLinks.style.display = 'none';
        })
    })
}

