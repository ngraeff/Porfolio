/* Botonos */
const botonVolverArriba = document.getElementById("btnVolverArriba")

/* LINKS */
const navbarLinks = document.querySelectorAll('.navbar a[href^="#"]')

/* SCROLL */
window.addEventListener("scroll", () => {
    let header = document.querySelector("header")
    header.classList.toggle("abajo", window.scrollY > 0)

    var btnVolverArriba = document.getElementById("btnVolverArriba")
    if (window.scrollY > 100) {
        btnVolverArriba.style.display = "flex";
        btnVolverArriba.classList.add("mostrar")
    } else {
        btnVolverArriba.classList.remove("mostrar")
    }
})



/* Eventos */

botonVolverArriba.addEventListener("click", function () {
    window.scrollTo(0, 0) 
})

/* OBSERVER */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id")

        const menuLink = document.querySelector(`.navbar a[href^="#${id}"]`)

        if (entry.isIntersecting) {
            if (document.querySelector(".navbar a.seleccionado") != null) { document.querySelector(".navbar a.seleccionado").classList.remove("seleccionado") }
            menuLink.classList.add("seleccionado")
        }


    })
}, { rootMargin: "-50% 0% -50% 0%" })

navbarLinks.forEach(menuLink => {
    const hash = menuLink.getAttribute("href")
    const target = document.querySelector(hash)
    if (target) {
        observer.observe(target)
    }
})

/* navbar responsive */

const toggle= document.querySelector(".toggle")
const links = document.querySelector(".navbar")


toggle.addEventListener("click", function () {
    links.classList.toggle("active")
    toggle.classList.toggle("active");
})

navbarLinks.forEach(link => {
    link.addEventListener("click", function () {
        links.classList.remove("active"); 
        toggle.classList.remove("active");
    });
});