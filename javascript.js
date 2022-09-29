let button = document.querySelector("button")
let popbox = document.querySelector(".overlay")
let closeBtn = document.querySelector(".fa-xmark")
button.addEventListener('click', popup)
function popup() {

  if (popbox.classList.contains("overlay_open")) {
    close();
  }
  else {
    open();
    closeTime()

  }
}

closeBtn.addEventListener('click', close)
function closeTime() {
  setTimeout(() => {
    close();
  }, 5000)
}

function close() {
  popbox.classList.remove("overlay_open")
  popbox.classList.add("overlay_close")
}
function open() {
  popbox.classList.remove("overlay_close")
  popbox.classList.add("overlay_open")
}