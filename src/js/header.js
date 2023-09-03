const header = document.querySelector('header');
const header_conteudo = `  
<img src="./src/img/Logo.png" alt="" />
<nav>
  <ul>
    <a href="">
      <li class="btn_page">Home</li>

    </a>
    <a href="./paginas/quem_somos.html">
      <li class="btn_page">Quem somos?</li>

    </a>
    <a href="">
      <li class="btn_page">Profissionais</li>

    </a>
    <a href="">
      <li class="btn_page">Atuação</li>

    </a>
    <a href="">
      <li class="btn_page">Contato</li>

    </a>
    <a href="">
      <li class="btn_page">Endereço</li>

    </a>
    <a href="">
      <li class="btn_page">Fale Conosco</li>

    </a>

  </ul>
</nav>
`;

header.innerHTML = header_conteudo;