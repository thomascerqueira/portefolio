class carrousselItem extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        const div = document.createElement('div')
        const span = document.createElement('span')
        const img = document.createElement('img')
        
        div.classList.add('caroussel-item')
        span.innerText = ths.getAttribute('description')
        img.src = this.getAttribute("img")
        div.appendChild(span)
        div.appendChild(img)
        this.shadowRoot.appendChild(div)
    }
}

customElements.define('carroussel-item', carrousselItem)