### O HTML e a sua estrutura

HTML (Hypertext Markup Language) é a linguagem de markup padrão para a criação de páginas Web.  
Utiliza um formato estruturado de **elementos**, **atributos** e **texto** para definir o conteúdo e a disposição de uma página Web.

``` Html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>A minha webpage</title>
</head>
<body>
  <header>
    <h1>Webpage do Pedro</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="#home">Início</a></li>
      <li><a href="#about">Sobre</a></li>
      <li><a href="#contact">Contatos</a></li>
    </ul>
  </nav>

  <main>
    <section id="home">
      <h2>Início</h2>
      <p>Bem-vindo(a) à minha página!</p>
    </section>

    <section id="about">
      <h2>Sobre</h2>
      <p>Conheça melhor o meu trabalho.</p>
    </section>

    <section id="contact">
      <h2>Contato</h2>
      <p>Saiba como me contatar.</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 Pedro Santos</p>
  </footer>
</body>
</html>
```

**Explicação da estrutura:**  

- ```<!DOCTYPE html>``` esta declaração especifíca o tipo de documento e a sua versão.
- ```<html>``` é o elemento raiz e contém todo o documento HTML.
- ```<head>``` contém meta-informações sobre o documento, tais como a codificação de caracteres e as definições de janela de visualização, ou folhas de estilo.
- ```<title>``` define o título da página Web, que aparece na barra de título ou no separador do browser.
- ```<body>``` contém o conteúdo visível da página Web.
- ```<header>``` representa o conteúdo introdutório, normalmente contendo o título da página o logótipo e a navegação.
- ```<nav>``` define uma secção para as ligações de navegação.
- ```<ul>``` cria uma lista não ordenada.
- ```<li>``` define um elemento de uma lista.
- ```<a>``` elemento que representa a criação de um hyperlink.
- ```<main>``` usado para definir visualmente o conteúdo principal de uma página.
- ```<section>``` define secções dentro do conteúdo principal.
- ```id``` atributo único que identifica um elemento.
- ```<h2>``` representativo de um cabeçalho de texto. Existem de h1 até h6.
- ```<p>``` elemento que representa um parágrafo de texto.
- ```<footer>``` representa o rodapé da página.


### O Document Object Model (DOM)

O Document Object Model (DOM) é uma interface de programação que representa a estrutura de um documento HTML ou XML como uma estrutura de objectos em forma de árvore. Cada elemento, atributo e pedaço de texto dentro do documento é considerado um nó na árvore DOM. Compreender o DOM é crucial, uma vez que permite ao JavaScript aceder, manipular e actualizar dinamicamente o conteúdo e a estrutura das páginas Web.

#### A estrutura do DOM

A estrutura em árvore do DOM começa com o elemento raiz, que é o elemento ```<html>```.  
A partir daí, ramifica-se em elementos filhos, formando uma relação hierárquica. Os elementos dentro da árvore DOM podem ter elementos filhos, elementos irmãos e elementos pais.  

Exemplo:  

``` Html
<div id="container"> <!-- 1º elemento / parent -->
  <h1>Cabeçalho</h1> <!-- child -->
  <p>Texto descritivo.</p> <!-- child -->
  <ul> <!-- child -->
    <li>Produto 1</li> <!-- child de <ul> -->
    <li>Produto 2</li> <!-- child de <ul> -->
  </ul>
</div>
```

#### Interagir com o DOM  

O JavaScript fornece uma gama de métodos e propriedades para interagir com o DOM. Essas ferramentas permitem que os developers acedam, manipulem e modifiquem elementos, atributos e texto numa página Web.

**Alguns métodos e propriedades comuns do DOM:**

- ```document.getElementById()```  
Devolve um elemento do DOM com base no atributo ID.
- ```document.querySelector()```  
Seleciona o primeiro elemento que corresponde a um seletor CSS específico.

**Exemplo**:

``` Html 
<p id="destaque"> Apresentação de um exemplo de código. </p>
```

(consultar lista completa em <https://developer.mozilla.org/en-US/docs/Web/API/Document>)