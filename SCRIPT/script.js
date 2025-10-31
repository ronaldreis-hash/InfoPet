document.getElementById('Campanha').addEventListener('click', function(e) {
  fetch('campanhas_de_vacina.html').then(response => response.text()).then(html => {
    document.getElementById('conteudo').innerHTML = html;
  });
});
