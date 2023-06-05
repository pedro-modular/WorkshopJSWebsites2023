// Dados JSON para os posts do blog
var blogPosts = [
  {
    "title": "Primeiro Post",
    "author": "Pedro Santos",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, tellus eget consequat scelerisque, purus sem semper turpis, in consequat urna nisl id metus."
  },
  {
    "title": "Segundo Post",
    "author": "Filipa Santos",
    "content": "Vestibulum nec diam augue. Maecenas rutrum turpis id leo commodo interdum. Etiam ac nunc mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    "title": "Terceiro Post",
    "author": "Sónia Lamego",
    "content": "Fusce et mi at tortor pretium maximus. Aliquam convallis bibendum erat, ac cursus purus blandit vitae. Integer mattis pretium enim, eu semper augue bibendum quis."
  }
];

// Apresentar os posts do blog na página
function displayBlogPosts() {
  const blogPostsSection = document.getElementById('blog-posts');

  blogPosts.forEach(post => {
    const postElement = createPostElement(post);
    blogPostsSection.appendChild(postElement);
  });
}

// Bloco de criação dos elementos HTML que formam um post de blog
function createPostElement(post) {
  const article = document.createElement('article');
  const title = document.createElement('h2');
  const author = document.createElement('p');
  const content = document.createElement('p');

  title.textContent = post.title;
  author.textContent = 'By ' + post.author;
  content.textContent = post.content;

  article.appendChild(title);
  article.appendChild(author);
  article.appendChild(content);

  return article;
}

// Inicializa o blog
displayBlogPosts();
