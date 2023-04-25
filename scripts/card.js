import { openPopup, popupOpenPlace, popupPlaceName, popupPlaceImage } from "./index.js";
export default class Card {
  constructor(data) {
    this.title = data.title;
    this.alt = data.alt;
    this.link = data.link;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('#place-template')
    .content
    .cloneNode(true);

    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.place__name').textContent = this.title;
    this._element.querySelector('.place__image').src = this.link;
    this._element.querySelector('.place__image').alt = this.alt;
    this._setEventListeners();
    return this._element;
  }
  _renderCard() {
    const card = new Card(element);
    const cardElement = card.generateCard();
    placesList.prepend(cardElement);
  }

  _like(evt) {
    evt.target.classList.toggle('place__like_active');
  }
  _deleteCard(evt) {
    const placeCard = evt.target.closest('.place');
    placeCard.remove();
  }
  _openCard(evt) {
    popupPlaceImage.src = this.link;
    popupPlaceImage.alt = this.alt;
    popupPlaceName.textContent = this.title;
    openPopup(popupOpenPlace);
  }

  _setEventListeners() {
    this._element.querySelector('.place__like').addEventListener('click', (evt) => {
      this._like(evt);
    });
    this._element.querySelector('.place__delete').addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });
    this._element.querySelector('.place__image').addEventListener('click', (evt) => {
      this._openCard(evt);
    });
  }
}
