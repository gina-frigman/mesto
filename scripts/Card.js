import { openPopup, popupOpenPlace, popupPlaceName, popupPlaceImage } from "./index.js";
export default class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
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

  _like() {
    this._likeButton.classList.toggle('place__like_active');
  }
  _deleteCard() {
    this._element.remove();
  }
  _openCard(evt) {
    popupPlaceImage.src = this.link;
    popupPlaceImage.alt = this.alt;
    popupPlaceName.textContent = this.title;
    openPopup(popupOpenPlace);
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.place__like');
    this._likeButton.addEventListener('click', () => {
      this._like();
    });    
    this._deleteButton = this._element.querySelector('.place__delete');
    this._deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });
    this._element.querySelector('.place__image').addEventListener('click', (evt) => {
      this._openCard(evt);
    });
  }
}
