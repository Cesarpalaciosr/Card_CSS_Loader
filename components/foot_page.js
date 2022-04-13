class foot_page extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <footer>
                <div>
                    <h4>Contenido Relacionado</h4>
                </div>
            </footer>
        `   
    }
}

window.customElements.define("foot-page", foot_page);