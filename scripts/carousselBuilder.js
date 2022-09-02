const websiteItems = [
    {
        img: "public/tree.jpg",
        text: "Projet de []. Site web d'action reaction en relation avec des API. Découverte des [].",
        special: [
            "fin de 3ème année",
            "webhooks"
        ],
        title: "Area"
    },
    {
        img: "public/elephant.jpg",
        text: "Site web afin de donner des photos à des clients.\nConnexion custom avec [] afin que le client n'est qu'a rentré un UID.",
        special: [
            "FireBase"
        ],
        icons: [
            {
                url: "https://github.com/thomascerqueira/area-server",
                icon: "fa-brands fa-github fa-2x"
            }
        ],
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
    const div_text = $(".ci-span", clone).get(0)
    const img = $("img", clone).get(0)
    const title = $("h2", clone).get(0)
    const div_icons = $(".ci-icon", clone).get(0)


    const texts = item.text.split('[]')
    const icons = item.icons
    const special = item.special

    for (const i in texts) {
        const spanD = document.createElement("span")
        spanD.textContent = texts[i]

        div_text.appendChild(spanD)

        if (special && special[i]) {
            const spanS = document.createElement("span")
            spanS.textContent = special[i]
            spanS.style.fontWeight = 800
            spanS.style.color = "hsla(var(--red), 0.8)"
            div_text.appendChild(spanS)
        }
    }
    
    img.src = item.img
    title.textContent = item.title
    
    for (const i in icons) {
        const icon = icons[i]
        const iE = document.createElement("i")
        iE.classList = [icon.icon]
        iE.onclick = function () {
            window.open(icon.url)
        } 

        div_icons.appendChild(iE)
    }

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