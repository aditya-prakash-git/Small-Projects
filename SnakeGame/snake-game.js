
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');


const gridSize = 20;
let snake = [{ x: gridSize, y: gridSize }];
let direction = 'right';
let food = createFood();
let score = 0;

function gameLoop() {
  clearCanvas();
  moveSnake();
  drawSnake();
  drawFood();
  checkCollision();
  updateScore();
}

function clearCanvas() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
}


function moveSnake() {
  const head = { x: snake[0].x, y: snake[0].y };

  switch (direction) {
    case 'right':
      head.x += gridSize;
      break;
    case 'left':
      head.x -= gridSize;
      break;
    case 'up':
      head.y -= gridSize;
      break;
    case 'down':
      head.y += gridSize;
      break;
  }

  snake.unshift(head);

  // Check if the snake ate the food
  if (head.x === food.x && head.y === food.y) {
    score++;
    food = createFood();
  } else {
    snake.pop();
  }
}

// Draw the snake
function drawSnake() {
  context.fillStyle = 'lime';

  for (let i = 0; i < snake.length; i++) {
    context.fillRect(snake[i].x, snake[i].y, gridSize, gridSize);
  }
}

// Create random food position
function createFood() {
  const maxX = canvas.width / gridSize - 1;
  const maxY = canvas.height / gridSize - 1;
  const foodX = Math.floor(Math.random() * maxX + 1) * gridSize;
  const foodY = Math.floor(Math.random() * maxY + 1) * gridSize;
  return { x: foodX, y: foodY };
}

// Draw the food
function drawFood() {
  context.fillStyle = 'red';
  context.fillRect(food.x, food.y, gridSize, gridSize);
}

// Check for collision with walls or self
function checkCollision() {
  const head = snake[0];

  if (
    head.x < 0 ||
    head.x >= canvas.width ||
    head.y < 0 ||
    head.y >= canvas.height ||
    isSnakeCollision()
  ) {
    endGame();
  }
}

// Check for collision with snake body
function isSnakeCollision() {
  const head = snake[0];

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }

  return false;
}

// Update the score display
function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `Score: ${score}`;
}

// End the game and display the score
function endGame() {
  clearInterval(gameInterval);
  alert(`Game Over! Your score: ${score}`);
}

// Handle keyboard input
document.addEventListener('keydown', function (event) {
  const key = event.keyCode;

  switch (key) {
    case 37: // Left
      if (direction !== 'right') direction = 'left';
      break;
    case 38: // Up
      if (direction !== 'down') direction = 'up';
      break;
    case 39: // Right
      if (direction !== 'left') direction = 'right';
      break;
    case 40: // Down
      if (direction !== 'up') direction = 'down';
      break;
  }
});



// Start the game
const gameInterval = setInterval(gameLoop, 100);
