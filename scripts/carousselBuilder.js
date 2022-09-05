const websiteItems = [
    {
        img: "public/Elliot_web_site.png",
        text: "Projet personnel pour un [].\nCe site permet a des clients de se connecter et d'accéder à leur photo.\nConnexion custom avec firebase afin \
que le photographe puisse [] et [] un uid directement au client pour ne pas avoir à []. Site fait en [].",
        special: [
            "photographe",
            "générer",
            "envoyer",
            "créer de compte",
            "React"
        ],
        icons: [
            {
                url: "https://www.youtube.com/",
                icon: "fa-solid fa-globe fa-2x"
            }
        ],
        title: "Elliot website"
    },
    {
        img: "public/Pony.png",
        text: "Site en [] qui est destiné à être dans un [].\nLe principe est un back office pour que la team de chez [] puisse gérer\
toute la flotter de véhicule.\nJ'ai travaillé dessus pendant mon stage de 3ème année.\n\
J'ai également pus travailler sur leur site [].",
        special: [
            "React",
            "navigateur embarqué",
            "Pony",
            "Adopt a Pony"
        ],
        icons: [
            {
                url: "https://adoptapony.com/en",
                icon: "fa-solid fa-globe fa-2x"
            }
        ],
        title: "Pony"
    },
    {
        img: "public/Area_web.png",
        text: "Projet de fin de []. Fais en [], le principe est basé sur le système d'[] avec des [], par exemple celui de github.\n\
Connexion avec [], base de données []. Cela nous a appris à gérer des connexion [] avec les différents services.\nNous avons aussi du faire le [] en relation avec le []",
        special: [
            "3ème année d'Epitech",
            "React",
            "action/reaction",
            "Firebase",
            "Firebase/Mongo",
            "webhooks",
            "Oauth2",
            "back",
            "front"
        ],
        icons: [
            {
                url: "https://github.com/thomascerqueira/area-server",
                icon: "fa-solid fa-server fa-2x"
            },
            {
                url: "https://github.com/thomascerqueira/Area_web",
                icon: "fa-solid fa-globe fa-2x"
            }
        ],
        title: "Area"
    },
]

const mobileItems = [
    {
        title: "BatFPV",
        img: "public/Bat_FPV.png",
        text: "Projet []. Dans le monde du [] nous devons gérer nos batteries car elle ne sont pas intelligentes comme celle de nos téléphone.\n\
C'est pour ça que j'ai pensé à une appli pour avoir nos batteries [].\nFait en [], toujours en cours de développement.\n\
Connexion et base de donnée sur [].",
        special: [
            "personnel",
            "drone FPV",
            "directement sur nos téléphones",
            "Flutter",
            "Firebase"
        ],
    },
    {
        title: "Redditech",
        img: "public/Redditech.png",
        text: "Projet fait en []. Développer en [], le principe est de faire un [] afin de nous apprendre\
à dialoguer avec une [] et de découvrir l'[]",
        special: [
            "3ème année",
            "Flutter",
            "clone de Reddit",
            "API",
            "Oauth2"
        ],
        icons: [
            {
                url: "https://adoptapony.com/en",
                icon: "fa-solid fa-globe fa-2x"
            }
        ],
    },
    {
        title: "Area",
        img: "public/area_mobile.png",
        text: "Version mobile du projet Area, Fait en flutter, il reproduis de façon simplifier les fonctionnalitées d'area web",
        special: [
            "3ème année d'Epitech",
            "React",
            "action/reaction",
            "webhooks",
            "Oauth2",
            "back",
            "front"
        ],
        icons: [
            {
                url: "https://github.com/thomascerqueira/area-server",
                icon: "fa-solid fa-server fa-2x"
            },
            {
                url: "https://github.com/thomascerqueira/Area_web",
                icon: "fa-solid fa-globe fa-2x"
            }
        ]
    },
]

const website = $("#website > .section-content > .container > .caroussel").get(0)
const mobile = $("#mobile > .section-content > .container > .caroussel").get(0)
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

mobileItems.forEach((item, index) => {
    addItems(item, index, mobile, mobileItems.length)
})