class Me extends Pages {
    constructor() {
        super();
        this.bubbleTemplate = document.querySelector('#bubble-template').content;
        const clone = this.bubbleTemplate.cloneNode(true);
        this.container.appendChild(clone);
    }
}

customElements.define('page-me', Me);