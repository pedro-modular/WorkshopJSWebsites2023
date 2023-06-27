// Obtém o elemento canvas
const canvas = document.getElementById('canvas');
// Cria um contexto 2D para o canvas
const ctx = canvas.getContext('2d');

// Configuração inicial do estado do desenho
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let brushSize = 5; // Tamanho do pincel
let brushColor = '#000000'; // Cor do pincel

// Adiciona os Listeners de eventos
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Função para começar a desenhar
function startDrawing(event) {
  isDrawing = true;
  // Define a posição inicial para desenhar
  [lastX, lastY] = [event.offsetX, event.offsetY];
}

// Função para desenhar
function draw(event) {
  // Se não estamos a desenhar, saímos da função
  if (!isDrawing) return;

  // Define a largura, a cor, o tipo de terminação da linha (redondo)
  // e o tipo de união entre as linhas (redondo)
  ctx.lineWidth = brushSize;
  ctx.strokeStyle = brushColor;
  ctx.lineCap = 'round'; //Outras opções: butt, square
  ctx.lineJoin = 'round'; //Outras opções: bevel, round, miter

  //Documentação
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
  // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API


  // Começa um novo caminho de desenho
  ctx.beginPath();
  // Move o cursor para a última posição conhecida
  ctx.moveTo(lastX, lastY);
  // Desenha uma linha até a posição atual do rato
  ctx.lineTo(event.offsetX, event.offsetY);
  // Desenha a linha
  ctx.stroke();
  // Atualiza a última posição conhecida
  [lastX, lastY] = [event.offsetX, event.offsetY];
}

// Função para parar de desenhar
function stopDrawing() {
  isDrawing = false;
}

// Seleção do tamanho do pincel
const brushSizeInput = document.getElementById('brush-size');
brushSizeInput.addEventListener('input', updateBrushSize);

function updateBrushSize(event) {
  // Atualiza o tamanho do pincel com o valor do input
  brushSize = event.target.value;
}

// Seleção da cor do pincel
const brushColorInput = document.getElementById('brush-color');
brushColorInput.addEventListener('input', updateBrushColor);

function updateBrushColor(event) {
  // Atualiza a cor do pincel com o valor do input
  brushColor = event.target.value;
}

// Botão para limpar o canvas
const clearButton = document.getElementById('clear-canvas');
clearButton.addEventListener('click', clearCanvas);

function clearCanvas() {
  // Limpa o canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}