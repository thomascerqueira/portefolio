const nameContainer = document.getElementById("name")
const divs = nameContainer.querySelectorAll("div")
const T = document.getElementById("T")
const H = document.getElementById("H")
const O = document.getElementById("O")
const M = document.getElementById("M")
const A = document.getElementById("A")
const S = document.getElementById("S")

function addOutside() {

    T.classList.add("outside")
    H.classList.add("outside")
    S.classList.add("outside")

    divs.forEach(div => div.style.width = "var(--size-after)")

    O.classList.add("after")
    M.classList.add("after")
    A.classList.add("after")
}

function removeOutside() {
    divs.forEach(div => div.style.width = "var(--size)")
    T.classList.remove("outside")
    H.classList.remove("outside")
    S.classList.remove("outside")

    O.classList.remove("after")
    M.classList.remove("after")
    A.classList.remove("after")
}

nameContainer.addEventListener("click", () => {
    if (T.classList.contains("outside")) {
        removeOutside()
    } else {
        addOutside()
    }
})