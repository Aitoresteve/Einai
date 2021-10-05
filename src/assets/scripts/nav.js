function cambiaClase() {
  //this.classList.toggle("activo");
    document.querySelector("body").classList.toggle("nav-activo");
}

document.querySelector(".header-nav-icon").addEventListener("click", cambiaClase);
document.querySelector(".header-nav-icon2").addEventListener("click", cambiaClase);