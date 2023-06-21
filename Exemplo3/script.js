// Função que é executada quando a página web é carregada
window.onload = function() {
  // Mostra a lista de livros
  displayBooks();

  // Função que é executada quando o formulário é submetido
  document.getElementById('myForm').addEventListener('submit', function(event){
    // Impede o formulário de ser submetido
    event.preventDefault();

    // Obtém o nome do livro do formulário
    var bookName = document.getElementById('bookName').value;

    // Obtém a lista atual de livros do local storage
    // Se não houver livros, usa um array vazio
    var books = JSON.parse(localStorage.getItem('books')) || [];

    // Cria um ID único para o novo livro
    var id;
    if (books.length > 0) {
      // Se houver livros, define o ID como sendo um número acima do último ID do livro
      id = books[books.length - 1].id + 1;
    } else {
      // Se não houver livros, define o ID como 1
      id = 1;
    }

    // Adiciona o novo livro à lista
    books.push({id: id, name: bookName});

    // Guarda a lista atualizada de livros no local storage
    localStorage.setItem('books', JSON.stringify(books));

    // Limpa o input do nome do livro
    document.getElementById('bookName').value = '';

    // Atualiza a lista de livros exibida
    displayBooks();
  });
};

// Função para apresentar a lista de livros
function displayBooks() {
  // Obtém a lista atual de livros do local storage
  // Se não houver livros, usa um array vazio
  var books = JSON.parse(localStorage.getItem('books')) || [];

  // Limpa a lista de livros apresentados
  var bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  // Por cada livro na lista... (loop)
  for (var i = 0; i < books.length; i++) {
    // Devolve o livro atual e o seu ID
    var book = books[i];
    var id = book.id;

    // Cria uma nova lista para o livro
    var li = document.createElement('li');

    // Adiciona o nome do livro e os botões Editar e Apagar ao item da lista
    li.innerHTML = book.name + ' ' +
      '<button onclick="editBook(' + id + ')">Editar</button>' +
      '<button onclick="deleteBook(' + id + ')">Apagar</button>';

    // Adiciona o item da lista à lista de livros apresentada
    bookList.appendChild(li);
  }
}

// Função para editar um livro
function editBook(id) {

  // Pergunta ao utilizador o novo nome do livro
  var newBookName = prompt('Introduza o nome do livro:');

  // Se o utilizador introduziu um novo nome...
  if (newBookName) {

    // Devolve a lista atual de livros do local storage
    var books = JSON.parse(localStorage.getItem('books')) || [];

    // Por cada livro na lista...
    for (var i = 0; i < books.length; i++) {

      // Se este for o livro que queremos editar...
      if (books[i].id === id) {

        // Mudar o nome do livro
        books[i].name = newBookName;

        // Encontrámos o livro que queríamos editar, por isso podemos parar de procurar
        break;
      }
    }


    // Salva a lista atualizada de livros no local storage
    localStorage.setItem('books', JSON.stringify(books));

    // Atualiza a lista de livros apresentada
    displayBooks();
  }
}

// Função para apagar um livro
function deleteBook(id) {

  // Devolve a lista atual de livros do local storage
  var books = JSON.parse(localStorage.getItem('books')) || [];


  // Por cada livro na lista...
  for (var i = 0; i < books.length; i++) {

    // Se este for o livro que queremos apagar...
    if (books[i].id === id) {

      // Remove o livro da lista
      books.splice(i, 1);

      // Encomtrámos o livro que queríamos apagar, por isso podemos parar de procurar
      break;
    }
  }

  // Salva a lista atualizada de livros no local storage
  localStorage.setItem('books', JSON.stringify(books));

  // Atualiza a lista de livros apresentada
  displayBooks();
}
