// Dados para o questionário
var quizData = [
  {
    question: 'Qual a capital de França?',
    options: ['Roma', 'Paris', 'Londres', 'Madrid'],
    answer: 1
  },
  {
    question: 'Que planeta é conhecido como o "Planeta Vermelho"?',
    options: ['Marte', 'Júpiter', 'Vénus', 'Saturno'],
    answer: 0
  },
  {
    question: 'Quem pintou a Mona Lisa?',
    options: ['Pablo Picasso', 'Vincent van Gogh', 'Michelangelo','Leonardo da Vinci'],
    answer: 3
  }
];

// Estado do questionário
var currentQuestion = 0;
var score = 0;

// Devolve os elementos de DOM
var questionSection = document.getElementById('question-section');
var questionElement = document.getElementById('question');
var optionsElement = document.getElementById('options');
var resultsSection = document.getElementById('results-section');
var scoreElement = document.getElementById('score');

// Método para apresentar o questionário e opções
function displayQuestion() {
  var currentQuizData = quizData[currentQuestion];

  // Define o texto para a pergunta
  questionElement.textContent = currentQuizData.question;

  // Limpa as opções
  optionsElement.innerHTML = '';

  // Cria as opções em formato de botão
  for (var i = 0; i < currentQuizData.options.length; i++) {
    var optionButton = document.createElement('button');
    optionButton.textContent = currentQuizData.options[i];
    optionsElement.appendChild(optionButton);
    optionButton.addEventListener('click', selectAnswer);
  }
}

// Método para definir a resposta selecionada
function selectAnswer(e) {
  var selectedOptionIndex = Array.from(optionsElement.children).indexOf(e.target);

  // Verifica se a resposta está correta
  if (selectedOptionIndex === quizData[currentQuestion].answer) {
    score++;
  }

  // Procede para a próxima pergunta ou mostra os resultados
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

// Método para apresentar os resultados
function showResults() {
  questionSection.style.display = 'none';
  resultsSection.style.display = 'block';
  scoreElement.textContent = 'Your score: ' + score + '/' + quizData.length;
}

// Inicializa o questionário
displayQuestion();