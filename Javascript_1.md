# Sessão 1: Introdução ao JavaScript

## O que é JavaScript?

JavaScript foi criado originalmente para tornar as páginas Web mais dinâmicas e interactivas.  
Uma linguagem de scripting, como o Javascript, é um tipo de linguagem de programação utilizada para automatizar processos que, de outra forma, teriam de ser executados passo a passo por um utilizador. O código fonte de JavaScript pode ser executado directamente num browser Web, sem necessidade de ser compilado.

O JavaScript é versátil e suporta diferentes paradigmas de programação, incluindo:

### Programação procedural

Um paradigma de programação baseado no conceito de "chamadas de procedimento", em que as instruções são estruturadas em procedimentos (também conhecidos como rotinas, sub-rotinas ou funções). Um exemplo típico de programação procedural em JavaScript é a utilização de funções para executar determinadas acções.

### Programação orientada a objetos (OOP)

Este estilo é baseado no conceito de "objectos", que são instâncias de classes e podem conter dados sob a forma de campos (também conhecidos como atributos ou propriedades) e código sob a forma de procedimentos (métodos). O JavaScript utiliza protótipos, que são a versão de classes do JavaScript, para implementar a OOP.

### Programação funcional (FP)

Um estilo em que os programas são construídos pela aplicação e composição de funções. O JavaScript suporta FP com características como funções de primeira classe, em que as funções podem ser tratadas como quaisquer outros dados e podem ser atribuídas a variáveis, passadas como argumentos para outras funções e devolvidas como valores de outras funções.

## Porque é que o Javascript é essencial para o desenvolvimento web?

### O JavaScript permite interagir com o utilizador em tempo real

Um exemplo seria um formulário numa página Web, onde os utilizadores introduzem os seus nomes e endereços de email para inscrição numa newsletter. O JavaScript pode ser utilizado para validar este formulário em tempo real.  
Assim que um utilizador digita um endereço de email, o JavaScript pode verificar se o email está num formato válido e fornecer um feedback imediato se não estiver.

### O JavaScript permite manipular páginas Web

Quando estamos a fazer compras online e adicionamos um item ao carrinho de compras, o JavaScript pode ser utilizado para actualizar imediatamente o número de itens do carrinho sem recarregar a página inteira.

### O JavaScript permite que aplicações Web funcionem com interfaces complexos

Por exemplo, o serviço Gmail, Google Maps ou Facebook. Estas são aplicações Web complexas em que o JavaScript é utilizado extensivamente. No Gmail, por exemplo, o JavaScript é utilizado para actualizar a caixa de entrada em tempo real à medida que chegam novos e-mails, permite compor e-mails numa janela pop-up e arrastar e largar e-mails em pastas.

## Regras e sintaxe básica em Javascript

**Variáveis**  
As variáveis são usadas para armazenar e manipular dados.  
Em JavaScript, declaramos variáveis usando as palavras-chave "var", "let" ou "const".  

``` javascript
var age = 25;
let name = 'Pedro';
const PI = 3.14;
```

**Data Types**  
O JavaScript suporta vários tipos de dados, tais como números, strings, booleanos, arrays e objectos.

``` javascript
var age = 25;                       // Number
var name = 'Pedro';                 // String
var isStudent = true;               // Boolean
var fruits = ['laranja', 'banana']; // Array
var person = {                      // Object
  name: 'Pedro',
  age: 25,
};
```

**Operadores**  
O JavaScript fornece vários operadores para efectuar operações sobre dados. Os exemplos incluem operadores aritméticos, de comparação, lógicos e de atribuição.  

```javascript
var x = 5;
var y = 3;

var sum = x + y;        // Adição
var difference = x - y; // Subtração
var product = x * y;  // Multiplicação
var quotient = x / y; // Divisão

var isGreater = x > y;     // Maior que
var isEqual = x === y;     // Igualdade (strict)
var isNotEqual = x !== y;  // Diferente de (strict)

var result = (x > 0) && (y < 10);  // Logica "E"
var isValid = (x > 0) || (y > 0);  // Logica "OU"

```

### Exemplo de uso da sintaxe básica  
Neste exemplo, definimos a função metersToCentimeters(), que converte um valor de metros para centímetros, multiplicando-o por 100.

Utilizamos variáveis para armazenar o valor em metros e chamamos a função metersToCentimeters() para converter o comprimento em centímetros.  
Os resultados são depois registados na consola para verificação.

Este exemplo demonstra como variáveis, tipos de dados (números) e operadores (multiplicação) trabalham juntos em JavaScript para resolver um cenário real.

``` javascript
// Método para converter Metros em Centimetros
function metersToCentimeters(meters) {
  var centimeters = meters * 100;
  return centimeters;
}

// Utilização do método
var lengthInMeters = 5;
var lengthInCentimeters = metersToCentimeters(lengthInMeters);

console.log('Distância em Metros:', lengthInMeters);
console.log('Distância em Centímetros:', lengthInCentimeters);

```

*Neste exemplo utilizamos a função ```console.log()```. È uma função integrada de Javascript que permite imprimir ou apresentar mensagens, valores ou outras informações na consola do browser. A consola é uma ferramenta para programadores que fornece uma forma de apresentar informações e analisar o código durante o desenvolvimento.*