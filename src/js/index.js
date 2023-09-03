const botoes_header = Array.from(document.querySelectorAll('.btn_page'));
botoes_header.forEach(el => {
    el.addEventListener('click', e => {
        el.classList.add('sublinhado')
    })
})



window.addEventListener('load', e => {
    const altura = window.innerHeight;
    const largura = window.innerWidth;
    const wrapper_conhecimentos = document.querySelector('.wrapper_conhecimentos');
    const wrapperp_conteudo = document.querySelector('.wrapperp_conteudo');

    wrapper_conhecimentos.style.height = `70vh`;
    wrapper_conhecimentos.style.minHeight = `${(altura / 100) * 70}px`;
    wrapperp_conteudo.style.height = `62vh`;
    wrapperp_conteudo.style.minHeight = `${(altura / 100) * 62}px`;
});