export default class Card {
  constructor({ data, handleCardClick, handleDeleteCard, handleLikeCard }, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._userId = data.userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.place__like');
    this._likesAmountElement = this._element.querySelector('.place__likes-amount')
    this._deleteButton = this._element.querySelector('.place__delete');
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
    this._element.querySelector('.place__name').textContent = this._name;
    this._element.querySelector('.place__image').src = this._link;
    this._element.querySelector('.place__image').alt = this._name;
    this._isOwner();
    this._showLikesAmount();
    this._setEventListeners();
    return this._element;
  }

  _isOwner() {
    if (this._ownerId !== this._userId) {
      this._deleteButton.classList.add('place__delete_invisible')
    }
  }

  changeLikesAmount(likes) {
    this._likeButton.classList.toggle('place__like_active')
    this._likesAmountElement.textContent = likes.length;
    }

  _showLikesAmount() {
    this._likesAmount = this._likes.length
    this._likesAmountElement.textContent = this._likesAmount;
  }

  delete() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likes.forEach((like) => {
      if (like._id === this._userId) {
        this._likeButton.classList.add('place__like_active')
      }
    });
    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard(this._likeButton, this._id)
    })
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard(this, this._id);
    });
    this._element.querySelector('.place__image').addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });
    this._showLikesAmount();
  }
}
