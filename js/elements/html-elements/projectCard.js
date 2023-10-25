class projectCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const card = document.createElement('a');
          card.setAttribute('class', 'card');
          if (this.hasAttribute('href')) {
              let href_target = this.getAttribute('href_target');
                if (href_target == null) {href_target = '_blank';}
              card.setAttribute('href', this.getAttribute('href'));
              card.setAttribute('target', href_target);
          }

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

        let style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', '../css/elements/cards/card.css');

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