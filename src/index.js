const nameContainer = document.getElementById("name")
const T = document.getElementById("T")
const H = document.getElementById("H")
const O = document.getElementById("O")
const M = document.getElementById("M")
const A = document.getElementById("A")
const S = document.getElementById("S")

const divs = [T, H, O, M, A, S]

const chapters = [O, M, A]

const clickContainer = document.getElementById("click-container")
const buttonBackContainer = document.getElementById("back-button-container")
const buttonBack = document.getElementById("back-button")

const home = document.getElementById("Home")
let pageMe = document.getElementById('page-me')

let state = "Home"

function goFromHomeToChapterSelect() {
    buttonBackContainer.style.opacity = "1"
    buttonBack.classList.remove("hide")

    clickContainer.style.display = "none"

    T.classList.add("outside")
    H.classList.add("outside")
    S.classList.add("outside")

    divs.forEach(div => div.style.width = "var(--size-after)")

    O.classList.add("after")
    M.classList.add("after")
    A.classList.add("after")

    state = "ChapterSelect"
}

function getBackToHomeScreen() {
    buttonBackContainer.style.opacity = "0"
    buttonBack.classList.add("hide")
    clickContainer.style.display = "flex"

    divs.forEach(div => div.style.width = "var(--size)")
    T.classList.remove("outside")
    H.classList.remove("outside")
    S.classList.remove("outside")

    O.classList.remove("after")
    M.classList.remove("after")
    A.classList.remove("after")

    state = "Home"
}


function getBackToChapterSelect() {
    console.log("getBackToChapterSelect")
    pageMe.hideContainer()
    home.hidden = false
    home.classList.remove("up")

    setTimeout(() => {
        chapters.forEach(chapter => chapter.classList.remove("up"))
        chapters.forEach(chapter => chapter.classList.remove("down"))
        chapters.forEach(chapter => chapter.classList.remove("right"))
    }, 1000)

    state = "ChapterSelect"
}


function back() {
    switch (state) {
        case "A":
            getBackToChapterSelect()
            break;
        default:
            getBackToHomeScreen()
            break;
    }
}


nameContainer.addEventListener("click", () => {
    switch (state) {
        case "Home":
            goFromHomeToChapterSelect();
            break;
        default:
            break;
    }
})

buttonBack.addEventListener("click", () => {
    back()
})

function moveLetters(value) {
    home.classList.add(`${value}`)

    // chapters.forEach(chapter => chapter.classList.add(`${value}`))
}


A.addEventListener("click", () => {
    if (state !== "ChapterSelect") {
        return
    }

    state = "A"
    moveLetters("up")

    pageMe.showContainer()
})
