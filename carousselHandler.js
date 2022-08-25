const carousselTops = $(".arrow.container-top")
const carousselBottoms = $(".arrow.container-bottom")

const itemWebsites = $("#website > .section-content > .container > .caroussel > .caroussel-item")


console.log(itemWebsites)

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
    }

    const value = state[where]
    console.log(value)
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
    changeState(itemWebsites, 1, "website")
})

carousselBottoms.get(0)?.addEventListener("click", function(e) {
    changeState(itemWebsites, -1, "website")
})


carousselTops.get(1)?.addEventListener("click", function(e) {
    console.log("Je vais vers le top 1")
})

carousselBottoms.get(1)?.addEventListener("click", function(e) {
    console.log("Je vais vers le bottom 1")
})


carousselTops.get(2)?.addEventListener("click", function(e) {
    console.log("Je vais vers le top 2")
})

carousselBottoms.get(2)?.addEventListener("click", function(e) {
    console.log("Je vais vers le bottom 2")
})