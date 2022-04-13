class head_page extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <header>
                <div>
                    <h1>Blog de URU</h1>
                </div>
            </header>
            `   
    }
}

window.customElements.define("head-page", head_page);