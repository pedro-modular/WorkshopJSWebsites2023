# Localstorage

## O que é o LocalStorage?

O LocalStorage é uma parte da API de **armazenamento Web**, um sistema fornecido pelos navegadores Web para permitir que os sites armazenem dados no navegador Web do utilizador.
Ao contrário dos cookies, que também podem armazenar dados, o LocalStorage não envia os seus dados de volta para o servidor sempre que o navegador recupera uma página Web. 

Isto significa que pode armazenar mais dados e não torna a navegação na Web mais lenta.
Os dados do LocalStorage podem persistir ao longo do tempo. Mesmo que feche e reabra o browser ou reinicie o computador, os dados continuarão lá quando voltar.

## Porque é que utilizamos o LocalStorage?

Utilizamos o LocalStorage para manter os dados do utilizador entre carregamentos da página.
Imagine que está a utilizar uma aplicação Web e que preencheu parte de um formulário. Se fechar acidentalmente a página, não seria bom se a aplicação Web se pudesse lembrar do que introduziu até ao momento? Esta é uma das utilizações do LocalStorage.

### Recursos
**https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage**
**https://javascript.info/localstorage**


## Exemplo Prático

### O formulário
```HTML
<!DOCTYPE html>
<html>
  <body>
    <form id="oMeuFormulario">
      <label for="name">Introduza o seu nome:</label><br>
      <input type="text" id="name" name="name"><br>
      <input type="submit" value="Enviar">
    </form>
  </body>
</html>
```

Aqui, definimos um formulário com um ID de 'oMeuFormulario' que contém uma label e dois input. O primeiro input é para introdução de texto e tem um ID de "name" (nome). O segundo input é um botão de submissão.


### O Javascript
```Javascript
document.getElementById('oMeuFormulario').addEventListener('submit', function(event){
  // previne a submissão do formulário
  event.preventDefault();

  // retorna o nome do campo do formulario
  var name = document.getElementById('name').value;

  // gravamos em localstorage a informação
  localStorage.setItem('name', name);
});

```
Aqui, ```document.getElementById('oMeuFormulario')``` obtém uma referência ao nosso formulário, e ```addEventListener('submit', function(event){ ... })``` adiciona um listener de evento ao formulário que é acionado quando o formulário é submetido com sucesso.

Dentro da função de listener, ```event.preventDefault()``` impede que o formulário seja submetido da forma habitual (o que faria com que a página fosse actualizada), e ```var name = document.getElementById('name').value;``` obtém o valor que foi introduzido no campo de entrada 'name'.

Por fim usamos ```localStorage.setItem('name', name);``` para salvar a informação.


### Retornar os dados

```Javascript
// Verificar se um objecto "name" está guardado em localstorage quando a pagina carrega
window.onload = function() {
    // Tenta retornar o valor
    var name = localStorage.getItem('name');
  
    // Se foi devolvido com sucesso
    if (name) {
        // Apresenta uma mensagem de boas vindas
        document.body.innerHTML += "<h1>Olá, " + name + "!</h1>";
    }
};
```

### Remover os dados

```Html
  <button id="apagar">Apagar Tudo</button>
```

```Javascript
// Procura uma ação ao clicar no botão com id="apagar"
document.getElementById('apagar').addEventListener('click', function(){
  // Remove o conteúdo gravado em localStorage
  localStorage.clear();

  //Ou se qusiermos apenas remover 1 item:
  //localStorage.removeItem('name');
});

```
