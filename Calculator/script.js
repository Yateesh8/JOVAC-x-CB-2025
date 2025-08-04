// Get reference to display element
const display = document.getElementById('display');

// Append value to display
function append(value) {
  if (display.textContent === '0') {
    display.textContent = '';
  }
  display.textContent += value;
}

// Clear the entire display
function clearDisplay() {
  display.textContent = '0';
}

// Remove the last character
function backspace() {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent === '') {
    display.textContent = '0';
  }
}

// Evaluate the expression and display result
function calculate() {
  try {
    const expression = display.textContent;
    const result = eval(expression); // Warning: eval can be dangerous if not controlled
    display.textContent = result;
  } catch (error) {
    display.textContent = 'Error';
  }
}

// Keyboard input support
document.addEventListener('keydown', (event) => {
  const key = event.key;

  // Allow numbers and basic operators
  if (/[\d+\-*/%.()]/.test(key)) {
    append(key);
  }

  // Handle Enter key (calculate)
  if (key === 'Enter') {
    event.preventDefault();
    calculate();
  }

  // Handle Backspace (delete last digit)
  if (key === 'Backspace') {
    event.preventDefault();
    backspace();
  }

  // Handle Escape (clear display)
  if (key === 'Escape') {
    clearDisplay();
  }
});
