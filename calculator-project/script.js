const display = document.getElementById("display");
const themeToggle = document.querySelector(".theme-toggle");

function appendValue(val) {
  if (display.innerText === "0" && val !== ".") {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculateResult() {
  try {
    let result = eval(display.innerText.replace("÷", "/").replace("×", "*"));
    display.innerText = result;
    display.style.animation = "popIn 0.3s ease";
    setTimeout(() => display.style.animation = "", 300);
  } catch {
    display.innerText = "Error";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "🌞";
  } else {
    themeToggle.textContent = "🌙";
  }
}
