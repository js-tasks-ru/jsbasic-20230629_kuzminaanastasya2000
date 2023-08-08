function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  button.addEventListener('click', hiddenNohidden);
  function hiddenNohidden () {
    if (!text.hidden) {
      text.hidden = true;
    } else {
      text.hidden = false;
    }
  }
}
