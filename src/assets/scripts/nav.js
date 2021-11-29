function cambiaClase() {
  this.classList.toggle("is-active");
    document
        .querySelector("body")
        .classList.toggle("nav-2-activo");
}

document
    .querySelector(".hamburger")
    .addEventListener("click", cambiaClase);