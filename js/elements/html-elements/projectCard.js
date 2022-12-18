class projectCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const card = document.createElement('a');
          card.setAttribute('class', 'card');

            const cardImage = document.createElement('img');
              cardImage.setAttribute('class', 'card__image');
              cardImage.setAttribute('src', this.getAttribute('image'));
              cardImage.setAttribute('alt', this.getAttribute('title'));

            const cardOverlay = document.createElement('div');
                cardOverlay.setAttribute('class', 'card__overlay');
              const cardHeader = document.createElement('div');
                cardHeader.setAttribute('class', 'card__header');
                const cardArc = document.createElement('svg');
                    cardArc.setAttribute('class', 'card__arc');
                    cardArc.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                const cardThumb = document.createElement('img');
                    cardThumb.setAttribute('class', 'card__thumb');
                    cardThumb.setAttribute('src', this.getAttribute('thumb'));
                const cardHeaderText = document.createElement('div');
                  cardHeaderText.setAttribute('class', 'card__header-text');
                  const cardTitle = document.createElement('h3');
                    cardTitle.setAttribute('class', 'card__title');
                    cardTitle.textContent = this.getAttribute('title');

                  const cardStatus = document.createElement('span');
                    cardStatus.setAttribute('class', 'card__status');
                    cardStatus.textContent = this.getAttribute('status');

                const cardDescription = document.createElement('p');
                  cardDescription.setAttribute('class', 'card__description');
                  cardDescription.textContent = this.getAttribute('description');

        const style = document.createElement('style');
            style.textContent = `
                :root {
                  --surface-color: #fff;
                  --curve: 40;
                }
                
                * {
                  box-sizing: border-box;
                }
                
                body {
                  font-family: 'Noto Sans JP', sans-serif;
                  background-color: #fef8f8;
                }
                
                .cards {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                  gap: 2rem;
                  margin: 4rem 5vw;
                  padding: 0;
                  list-style-type: none;
                }
                
                .card {
                  position: relative;
                  display: block;
                  height: 100%;  
                  border-radius: calc(var(--curve) * 1px);
                  overflow: hidden;
                  text-decoration: none;
                }
                
                .card__image {      
                  width: 100%;
                  height: auto;
                }
                
                .card__overlay {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  z-index: 1;      
                  border-radius: calc(var(--curve) * 1px);    
                  background-color: var(--surface-color);      
                  transform: translateY(100%);
                  transition: .2s ease-in-out;
                }
                
                .card:hover .card__overlay {
                  transform: translateY(0);
                }
                
                .card__header {
                  position: relative;
                  display: flex;
                  align-items: center;
                  gap: 2em;
                  padding: 2em;
                  border-radius: calc(var(--curve) * 1px) 0 0 0;    
                  background-color: var(--surface-color);
                  transform: translateY(-100%);
                  transition: .2s ease-in-out;
                }
                
                .card__arc {
                  width: 80px;
                  height: 80px;
                  position: absolute;
                  bottom: 100%;
                  right: 0;      
                  z-index: 1;
                }
                
                .card__arc path {
                  fill: var(--surface-color);
                  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
                }       
                
                .card:hover .card__header {
                  transform: translateY(0);
                }
                
                .card__thumb {
                  flex-shrink: 0;
                  width: 50px;
                  height: 50px;      
                  border-radius: 50%;      
                }
                
                .card__title {
                  font-size: 1em;
                  margin: 0 0 .3em;
                  color: #6A515E;
                }
                
                .card__tagline {
                  display: block;
                  margin: 1em 0;
                  font-family: "MockFlowFont";  
                  font-size: .8em; 
                  color: #D7BDCA;  
                }
                
                .card__status {
                  font-size: .8em;
                  color: #D7BDCA;
                }
                
                .card__description {
                  padding: 0 2em 2em;
                  margin: 0;
                  color: #D7BDCA;
                  font-family: "MockFlowFont";   
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3;
                  overflow: hidden;
                }    
            `;

        shadow.appendChild(style);
        shadow.appendChild(card);

        cardHeaderText.appendChild(cardTitle);
        cardHeaderText.appendChild(cardStatus);
        cardHeader.appendChild(cardArc);
        cardHeader.appendChild(cardThumb);
        cardHeader.appendChild(cardHeaderText);
        cardOverlay.appendChild(cardHeader);
        cardOverlay.appendChild(cardDescription);
        card.appendChild(cardImage);
        card.appendChild(cardOverlay);
    }
}

customElements.define('project-card', projectCard);