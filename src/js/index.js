const botoes_header = Array.from(document.querySelectorAll('.btn_page'));
botoes_header.forEach( el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        el.classList.add('sublinhado')
    })
})