class Pages extends HTMLElement {
    constructor() {
        super();
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'page-container');
        // this.container.setAttribute('hidden', '');
        this.container.classList.add('hide');
        document.body.appendChild(this.container);

        this.styleLink = document.createElement('link');
        this.styleLink.setAttribute('rel', 'stylesheet');
        this.styleLink.setAttribute('href', './styles/pages.css');

        document.head.appendChild(this.styleLink);
    }

    get hidden() {
        return this.container.hidden;
    }

    set hidden(value) {
        if (value) {
            this.setAttribute('hidden', '');
          } else {
            this.removeAttribute('hidden');
          }
    }

    hideContainer() {
        setTimeout(() => {
        }, 1000);
        this.container.classList.add('hide');
    }

    showContainer() {

        setTimeout(() => {
            this.container.classList.remove('hide');
        }, 10);
    }
}