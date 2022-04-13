class Card extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <section class="carousel">
        <div id=ham stat="open" class = "b_carousel" onclick="carouselOnClick()">
            <div id="ham1" class = "bar"></div>
            <div id="ham2" class = "bar"></div>
            <div id="ham3" class = "bar"></div>
        </div>
            <nav class="card" id="card">                        
                        <div class="carousel__container">
                        <div class="carousel-item">
                            <img
                            class="carousel-item__img"
                            src="https://images.pexels.com/photos/7999461/pexels-photo-7999461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <div class="carousel-item__details">
                            <div>
                                <img src="./icons/play-icon.png" alt="Play" />
                                <img src="./icons/plus-icon.png" alt="Plus" />
                            </div>
                            <p class="carousel-item__details--title">Titulo descriptivo</p>
                            <p class="carousel-item__details-subtitle">2019 16+ 114 minutos</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                            class="carousel-item__img"
                            src="./img/pexels-marcelo-chagas-1876279.jpg"
                            />
                            <div class="carousel-item__details">
                            <div>
                                <img src="./icons/play-icon.png" alt="Play" />
                                <img src="./icons/plus-icon.png" alt="Plus" />
                            </div>
                            <p class="carousel-item__details--title">Titulo descriptivo</p>
                            <p class="carousel-item__details-subtitle">2019 16+ 114 minutos</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                            class="carousel-item__img"
                            src=".//img/pexels-zeke-nesher-838702.jpg"
                            />
                            <div class="carousel-item__details">
                            <div>
                                <img src="./icons/play-icon.png" alt="Play" />
                                <img src="./icons/plus-icon.png" alt="Plus" />
                            </div>
                            <p class="carousel-item__details--title">Titulo descriptivo</p>
                            <p class="carousel-item__details-subtitle">2019 16+ 114 minutos</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                            class="carousel-item__img"
                            src="./img/pexels-eric-esma-894156.jpg"
                            />
                            <div class="carousel-item__details">
                            <div>
                                <img src="./icons/play-icon.png" alt="Play" />
                                <img src="./icons/plus-icon.png" alt="Plus" />
                            </div>
                            <p class="carousel-item__details--title">Titulo descriptivo</p>
                            <p class="carousel-item__details-subtitle">2019 16+ 114 minutos</p>
                            </div>
                        </div>
                
                        <div class="carousel-item">
                            <img
                            class="carousel-item__img"
                            src="./img/pexels-karolina-grabowska-4498195.jpg"
                            />
                            <div class="carousel-item__details">
                            <div>
                                <img src="./icons/play-icon.png" alt="Play" />
                                <img src="./icons/plus-icon.png" alt="Plus" />
                            </div>
                            <p class="carousel-item__details--title">Titulo descriptivo</p>
                            <p class="carousel-item__details-subtitle">2019 16+ 114 minutos</p>
                            </div>
                        </div>
                        </div>
                </nav>

    </section>
    
    
    
    `   
    }
}

window.customElements.define("card-body", Card);