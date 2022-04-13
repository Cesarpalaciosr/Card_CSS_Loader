class main_content extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <card-body></card-body>
        `   
    }
}

window.customElements.define("main-content", main_content);