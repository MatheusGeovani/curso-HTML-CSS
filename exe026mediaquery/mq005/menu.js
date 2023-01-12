let itens = document.querySelector("menu")
let menu = document.getElementById("burguer")
let body = document.querySelector("body")

menu.addEventListener("click", function() {
    if (itens.style.display == "block") {
        itens.style.display = "none"
    } else {
        itens.style.display = "block"
    }
})

body.addEventListener("resize", function() {
    if (window.innerWidth >= 768) {
        itens.style.display = "block"
    } else {
        itens.style.display = "none"
    }
})
