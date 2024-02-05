const output = document.getElementById('output');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

function handleClick(event) {
  const buttonText = event.target.innerText;
  if (buttonText === '=') {
    calculate();
  } else if (buttonText === 'C') {
    clearOutput();
  } else if (buttonText === 'DEL') {
    deleteLastCharacter();
  } else {
    addToOutput(buttonText);
  }
}

function addToOutput(value) {
  output.textContent += value;
}

function clearOutput() {
  output.textContent = '';
}

function deleteLastCharacter() {
  output.textContent = output.textContent.slice(0, -1);
}

function calculate() {
  try {
    output.textContent = eval(output.textContent);
  } catch (error) {
    output.textContent = 'Error';
  }
}
