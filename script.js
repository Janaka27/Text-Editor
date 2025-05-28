function format(command) {
  document.execCommand(command, false, null);
}

function changeColor() {
  const color = document.getElementById("fontColor").value;
  document.execCommand("foreColor", false, color);
}

function align(direction) {
  document.execCommand(direction, false, null);
}

function undo() {
  document.execCommand("undo", false, null);
}

function redo() {
  document.execCommand("redo", false, null);
}


const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});