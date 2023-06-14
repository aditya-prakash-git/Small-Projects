// JavaScript code for the calculator
const screen = document.getElementById('result');
const buttons = Array.from(document.querySelectorAll('.keypad button'));

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        screen.value = eval(screen.value);
      } catch (error) {
        screen.value = 'Error';
      }
    } else if (value === 'AC') {
      screen.value = '';
    } else {
      screen.value += value;
    }
  });
});
