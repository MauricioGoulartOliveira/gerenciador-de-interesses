Gerenciador de Interesses e Notícias
Este é um projeto simples de uma página web para gerenciar interesses e hobbies, além de exibir uma seção de notícias de destaque do dia. O objetivo é praticar conceitos fundamentais de desenvolvimento web, como manipulação de DOM, requisições assíncronas e armazenamento local de dados.

Funcionalidades
Adicionar novos interesses ou hobbies.
Visualizar uma lista dos interesses cadastrados.
Limpar a lista de interesses.
Exibir o título da primeira notícia do dia em destaque.
Tecnologias Utilizadas
HTML
CSS
JavaScript

Funcionalidades Implementadas
Exercício 1: Carregar Interesses

Criou-se uma função para recuperar todos os interesses adicionados no localStorage e incluí-los na lista de interesses.
Utilizou-se a chave 'meus-interesses' no localStorage para armazenar os dados.
Exercício 2: Adicionar Interesses

Adicionou-se um evento de clique ao botão "Adicionar" para recuperar o valor digitado no input e adicioná-lo à lista de interesses.
Persistiu-se os dados atualizados no localStorage.
Exercício 3: Limpar Lista de Interesses

Implementou-se uma função para limpar toda a lista de interesses quando o botão "Limpar Lista" for clicado.
Utilizou-se a função localStorage.removeItem([nome-da-chave]) para remover os dados do localStorage.
Exercício 4: Requisição à API do IBGE de Notícias

Realizou-se uma requisição à API do IBGE de notícias utilizando o método fetch().
Recuperou-se o título da primeira notícia do dia e o exibiu na seção de notícias da página.
