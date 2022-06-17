class AmtHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        `
    }
}

customElements.define('amt-body', AmtHome);