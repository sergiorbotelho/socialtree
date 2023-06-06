function toogleMode() {
  const html = document.querySelector("html")
  html.classList.toggle("light")
  const img = document.querySelector(".profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/eu2.jpeg")
  } else {
    img.setAttribute("src", "./assets/eu.jpeg")
  }
}
