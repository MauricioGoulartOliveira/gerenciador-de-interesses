// Função para carregar os interesses
function carregarInteresses() {
  // Limpa a lista para adicionar os itens
  document.querySelector('.list ul').innerHTML = '';

  // Recupera os dados do localStorage
  const interessesLocalStorage = localStorage.getItem('meus-interesses');

  // Verifica se existem dados no localStorage
  if (interessesLocalStorage) {
      // Converte os dados JSON para um array
      const interesses = JSON.parse(interessesLocalStorage);

      // Seleciona a lista de interesses
      const listaInteresses = document.querySelector('.list ul');

      // Adiciona cada interesse à lista
      interesses.forEach(interesse => {
          const li = document.createElement('li');
          li.textContent = interesse;
          listaInteresses.appendChild(li);
      });
  }
}

// Adiciona um evento de clique ao botão "Adicionar"
document.querySelector('.button-add').addEventListener('click', function() {
  // Recupera o valor digitado no input
  const novoInteresse = document.querySelector('.form input').value;

  // Verifica se o campo de input não está vazio
  if (novoInteresse.trim() !== '') {
      // Recupera a lista de interesses do localStorage ou cria uma lista vazia se não houver
      let listaInteresses = JSON.parse(localStorage.getItem('meus-interesses')) || [];

      // Limpa o campo de input
      document.querySelector('.form input').value = '';

      // Adiciona o novo interesse à lista
      listaInteresses.push(novoInteresse);

      // Atualiza os dados no localStorage
      localStorage.setItem('meus-interesses', JSON.stringify(listaInteresses));

      // Chama a função para carregar os interesses novamente, atualizando a lista na tela
      carregarInteresses();
  } else {
      // Caso o campo de input esteja vazio, exibe uma mensagem de alerta ou qualquer outro feedback desejado
      alert('Por favor, digite um interesse válido.');
  }
});

// Adiciona um evento de clique ao botão "Limpar Lista"
document.querySelector('.button-clear').addEventListener('click', function() {
  // Remove os dados do localStorage
  localStorage.removeItem('meus-interesses');

  // Limpa a lista no DOM
  document.querySelector('.list ul').innerHTML = '';
});

// Utiliza setInterval para atualizar os dados a cada segundo
setInterval(carregarInteresses, 1000);

// Carrega os interesses quando a página é carregada
carregarInteresses();

// Faz a requisição para a API do IBGE de notícias
fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
  .then(response => {
      // Verifica se a requisição foi bem-sucedida
      if (!response.ok) {
          throw new Error('Erro ao obter os dados das notícias.');
      }
      // Retorna a resposta como JSON
      return response.json();
  })
  .then(data => {
      // Obtém o primeiro item da lista na propriedade "items"
      const primeiraNoticia = data.items[0];
      // Verifica se a primeira notícia existe
      if (primeiraNoticia) {
          // Obtém o título da primeira notícia
          const titulo = primeiraNoticia.titulo;
          // Exibe o título da primeira notícia no console
          console.log('Título da primeira notícia:', titulo);
          
          // Atualiza o título da notícia na seção
          document.querySelector('.title-news-today').textContent = titulo;
      } else {
          console.log('Nenhuma notícia encontrada.');
      }
  })
  .catch(error => {
      // Exibe mensagens de erro caso ocorra algum problema na requisição
      console.error('Erro:', error.message);
  });


