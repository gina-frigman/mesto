export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._templateSelector = templateSelector;
    this._title = data.title;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('#place-template')
    .content
    .querySelector('.place')
    .cloneNode(true);

    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.place__name').textContent = this._title;
    this._element.querySelector('.place__image').src = this._link;
    this._setEventListeners();
    return this._element;
  }

  _like() {
    this._likeButton.classList.toggle('place__like_active');
  }
  _deleteCard() {
    this._element.remove();
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
    this._element.querySelector('.place__image').addEventListener('click', () => {
      this._handleCardClick(this._link, this._title);
    });
  }
}
