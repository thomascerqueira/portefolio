const carousselTops = $(".arrow.container-top")
const carousselBottoms = $(".arrow.container-bottom")

const itemsWebsite = $("#website > .section-content > .container > .caroussel > .caroussel-item")
const itemsMobile = $("#mobile > .section-content > .container > .caroussel > .caroussel-item")
const itemsGame = $("#game > .section-content > .container > .caroussel > .caroussel-item")

let state = {
    website: 0,
    mobile: 0,
    game: 0
}

function changeState(items, direction, where) {
    if (state[where] + direction >= items.length) {
        state[where] = 0
    } else if (state[where] + direction < 0) {
        state[where] = items.length - 1
    } else {
        state[where] = state[where] + direction
    }

    const value = state[where]
    items.toArray().forEach((item, index) => item.classList.remove("active", "next", "prev"))

    if (value + 1 >= items.length) {
        items.get(0).classList.add("next")
    } else {
        items.get(value + 1).classList.add("next")
    }
    
    if (value - 1 < 0) {
        items.get(items.length - 1).classList.add("prev")
    } else {
        items.get(value - 1).classList.add("prev")
    }
    items.get(value).classList.add("active")
}

carousselTops.get(0)?.addEventListener("click", function(e) {
    changeState(itemsWebsite, -1, "website")
})

carousselBottoms.get(0)?.addEventListener("click", function(e) {
    changeState(itemsWebsite, 1, "website")
})


carousselTops.get(1)?.addEventListener("click", function(e) {
    changeState(itemsMobile, -1, "mobile")
})

carousselBottoms.get(1)?.addEventListener("click", function(e) {
    changeState(itemsMobile, 1, "mobile")
})


carousselTops.get(2)?.addEventListener("click", function(e) {
    changeState(itemsGame, -1, "game")
})

carousselBottoms.get(2)?.addEventListener("click", function(e) {
    changeState(itemsGame, 1, "game")
})