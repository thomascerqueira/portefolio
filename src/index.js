const nameContainer = document.getElementById("name")
const T = document.getElementById("T")
const H = document.getElementById("H")
const O = document.getElementById("O")
const M = document.getElementById("M")
const A = document.getElementById("A")
const S = document.getElementById("S")

const divs = [T, H, O, M, A, S]

const clickContainer = document.getElementById("click-container")

const buttonBackContainer = document.getElementById("back-button-container")
const buttonBack = document.getElementById("back-button")

let where = "home"

function addOutside() {
    // buttonBackContainer.style.display = "flex"
    buttonBackContainer.style.opacity = "1"
    buttonBack.classList.remove("hide")

    clickContainer.style.display = "none"

    where = "amo"
    T.classList.add("outside")
    H.classList.add("outside")
    S.classList.add("outside")

    divs.forEach(div => div.style.width = "var(--size-after)")

    O.classList.add("after")
    M.classList.add("after")
    A.classList.add("after")
}

function removeOutside() {
    // buttonBackContainer.style.display = "none"
    buttonBackContainer.style.opacity = "0"
    buttonBack.classList.add("hide")
    clickContainer.style.display = "flex"

    where = "Home"

    divs.forEach(div => div.style.width = "var(--size)")
    T.classList.remove("outside")
    H.classList.remove("outside")
    S.classList.remove("outside")

    O.classList.remove("after")
    M.classList.remove("after")
    A.classList.remove("after")
}



nameContainer.addEventListener("click", () => {
    if (!T.classList.contains("outside")) {
        addOutside()
    }
})

buttonBack.addEventListener("click", () => {
    removeOutside()
})