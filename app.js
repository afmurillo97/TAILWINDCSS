const hamburguer = document.querySelector('#hamburguer');
const menu = document.querySelector('#menu');

hamburguer.addEventListener('click', ()=> {
    menu.classList.toggle('hidden');
    
    for (const child in hamburguer.children) {
        if(child == '0' || child == '1' || child =='2'){
            hamburguer.children[child].classList.toggle('bg-black');
            hamburguer.children[child].classList.toggle('bg-white');
        }
    }
})