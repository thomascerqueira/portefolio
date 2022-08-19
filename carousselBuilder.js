const websiteItems = [
    {
        img: "public/tree.jpg",
        text: "Je suis un text de merde"
    },
    {
        img: "public/elephant.jpg",
        text: "Un peux plus long pour voir ce que ça fait"
    },
    {
        img: "public/tamere.jpg",
        text: "HAHAHA REGARDER MOI JE SUIS UNE MERDE"
    }
]

const website = $("#website > div > div > .caroussel").get(0)
const template = $("#template-item").get(0)


function addItems(item, index, where) {
    const clone = document.importNode(template.content, true)
    const div = $("div", clone).get(0)
    const span = $("span", clone).get(0)
    const img = $("img", clone).get(0)

    span.textContent = item.text
    img.src = item.img

    if (index === 0) {
        div.classList.add("prev")
    } else if (index === 1) {
        div.classList.add("active")
    } else if (index === 2) {
        div.classList.add("next")
    }
    where.appendChild(clone)
}

websiteItems.forEach((item, index) => {
    addItems(item, index, website)
})