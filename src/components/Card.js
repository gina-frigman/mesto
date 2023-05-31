
import { popupDeleteCard, api } from "../pages/index";

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
      this._element.querySelector('.place__delete').classList.add('place__delete_invisible')
    }
  }

  _changeLikesAmount(likes) {
    this._element.querySelector('.place__like').classList.toggle('place__like_active')
    this._element.querySelector('.place__likes-amount').textContent = likes.length;
    }

  _showLikesAmount() {
    this._likesAmount = this._likes.length
    this._element.querySelector('.place__likes-amount').textContent = this._likesAmount;
  }

  _like() {
    api.like(this._id)
    .then(res => {
      this._changeLikesAmount(res.likes)
    })
  }
  
  _unlike() {
    api.unlike(this._id)
    .then(res => {
      this._changeLikesAmount(res.likes)
    })
  }

  delete() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likes.forEach((like) => {
      if (like._id === this._userId) {
        this._element.querySelector('.place__like').classList.add('place__like_active')
      }
    });
    this._likeButton = this._element.querySelector('.place__like');
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('place__like_active')) {
        this._unlike()
      } else {
        this._like();
      }
    })
    
    this._deleteButton = this._element.querySelector('.place__delete');
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard(this, this._id);
    });
    this._element.querySelector('.place__image').addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });
    this._showLikesAmount();
  }
}
