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
                                <img src="https://connectingclues.es/wp-content/uploads/2019/09/white-play-icon-png-7.png" alt="Play" />
                                <img src="https://www.pikpng.com/pngl/m/65-653860_plus-symbol-png-photo-purple-plus-sign-png.png" alt="Plus" />
                            </div>
                            <p class="carousel-item__details--title">Titulo descriptivo</p>
                            <p class="carousel-item__details-subtitle">2019 16+ 114 minutos</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                            class="carousel-item__img"
                            src="https://images.pexels.com/photos/7574147/pexels-photo-7574147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <div class="carousel-item__details">
                            <div>
                                <img src="https://connectingclues.es/wp-content/uploads/2019/09/white-play-icon-png-7.png" alt="Play" />
                                <img src="https://www.pikpng.com/pngl/m/65-653860_plus-symbol-png-photo-purple-plus-sign-png.png" alt="Plus" />
                            </div>
                            <p class="carousel-item__details--title">Titulo descriptivo</p>
                            <p class="carousel-item__details-subtitle">2019 16+ 114 minutos</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                            class="carousel-item__img"
                            src="https://images.pexels.com/photos/10364392/pexels-photo-10364392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <div class="carousel-item__details">
                            <div>
                                <img src="https://connectingclues.es/wp-content/uploads/2019/09/white-play-icon-png-7.png" alt="Play" />
                                <img src="https://www.pikpng.com/pngl/m/65-653860_plus-symbol-png-photo-purple-plus-sign-png.png" alt="Plus" />
                            </div>
                            <p class="carousel-item__details--title">Titulo descriptivo</p>
                            <p class="carousel-item__details-subtitle">2019 16+ 114 minutos</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                            class="carousel-item__img"
                            src="https://images.pexels.com/photos/11653294/pexels-photo-11653294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <div class="carousel-item__details">
                            <div>
                                <img src="https://connectingclues.es/wp-content/uploads/2019/09/white-play-icon-png-7.png" alt="Play" />
                                <img src="https://www.pikpng.com/pngl/m/65-653860_plus-symbol-png-photo-purple-plus-sign-png.png" alt="Plus" />
                            </div>
                            <p class="carousel-item__details--title">Titulo descriptivo</p>
                            <p class="carousel-item__details-subtitle">2019 16+ 114 minutos</p>
                            </div>
                        </div>
                
                        <div class="carousel-item">
                            <img
                            class="carousel-item__img"
                            src="https://images.pexels.com/photos/5465310/pexels-photo-5465310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <div class="carousel-item__details">
                            <div>
                                <img src="https://connectingclues.es/wp-content/uploads/2019/09/white-play-icon-png-7.png" alt="Play" />
                                <img src="https://www.pikpng.com/pngl/m/65-653860_plus-symbol-png-photo-purple-plus-sign-png.png" alt="Plus" />
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