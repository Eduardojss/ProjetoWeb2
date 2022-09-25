function displayHello() {
    alert("Seja muito bem vindo")
}

setTimeout(displayHello, 1000);

const btnMobile = document.getElementById('btnMobile');

function togglemenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('checked')
}

btnMobile.addEventListener('click', togglemenu);