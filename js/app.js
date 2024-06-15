const navbar = document.querySelector(".navbar__desc")

function toggleShow (){
    navbar.classList.toggle("show")
}



let count = document.querySelector(".number")

let offset = 0

function inc(){
    offset++
    count.innerHTML = offset
}

function res(){
    offset = 0
    count.innerHTML = offset
}

function dec(){
    offset--
    count.innerHTML = offset
}
