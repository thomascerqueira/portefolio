const websiteItems = [
    {
        img: "public/tree.jpg",
        text: "Je suis un text de merde",
        title: "Area"
    },
    {
        img: "public/elephant.jpg",
        text: "Un peux plus long pour voir ce que ça fait",
        title: "Elliot Web Site"
    },
    {
        img: "public/tamere.jpg",
        text: "HAHAHA REGARDER MOI JE SUIS UNE MERDE",
        title: ""
    },
    {
        img: "public/phone.png",
        text: "Je suis pas beau",
        title: ""
    }
]

const website = $("#website > .section-content > .container > .caroussel").get(0)
const template = $("#template-item").get(0)

function addItems(item, index, where, totalLength) {
    const clone = document.importNode(template.content, true)
    const div = $("div", clone).get(0)
    const span = $("span", clone).get(0)
    const img = $("img", clone).get(0)
    const title = $("h2", clone).get(0)

    span.textContent = item.text
    img.src = item.img
    title.textContent = item.title

    if (index === 0) {
        div.classList.add("active")
    } else if (index === 1) {
        div.classList.add("next")
    } else if (index === totalLength - 1) {
        div.classList.add("prev")
    }
    where.appendChild(clone)
}

websiteItems.forEach((item, index) => {
    addItems(item, index, website, websiteItems.length)
})