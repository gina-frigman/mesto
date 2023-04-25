// импортируем классы карточек и валидации
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards} from './initialCards.js';
// объявим пременные: всех кнопок
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit');
const buttonOpenAddCardPopup = document.querySelector('.profile__add');
const buttonCloseList = document.querySelectorAll('.popup__close');
// попапов и их составляющих
const popupEditProfile = document.querySelector('.popup_profile');
const popupAddPost = document.querySelector('.popup_post');
const popupOpenPlace = document.querySelector('.popup_place');
const popupPlaceImage = document.querySelector('.popup__image');
const popupPlaceName = document.querySelector('.popup__name');
// форм и переменных для ввода
const formProfile = document.querySelector('.popup__form_profile');
const inputUserName = document.querySelector('.popup__input_type_name');
const inputUserProfession = document.querySelector('.popup__input_type_status');
const formPost = document.querySelector('.popup__form_post');
const inputCardName = document.querySelector('.popup__input_type_name-place');
const inputCardUrl = document.querySelector('.popup__input_type_url');
// и имени, статуса профиля, списка карточек и шаблона
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile-info__status');
const placesList = document.querySelector('.places');
// открытие/закрытие попапов
function closeByEsc(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
};
function closeByMouse(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
      }
};
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
};
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
};
// сохранение данных
function submitEditProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = inputUserName.value;
    profileStatus.textContent = inputUserProfession.value;
    closePopup(popupEditProfile);
};
// создание карточек
function createCard(element) {
    const card = new Card(element, document.querySelector('#place-template'));
    const cardElement = card.generateCard();
    placesList.prepend(cardElement);
}
function addCard(evt) {
    evt.preventDefault();
    createCard({
      title: inputCardName.value,
      link: inputCardUrl.value
    });
    closePopup(popupAddPost);
    formPost.reset();
    evt.submitter.disabled = true;
};
// вызов открытия/закрытия попапов
buttonOpenEditProfilePopup.addEventListener('click', function(){
    inputUserName.value = profileName.textContent;
    inputUserProfession.value = profileStatus.textContent;
    openPopup(popupEditProfile);
});
buttonOpenAddCardPopup.addEventListener('click', function(){
    openPopup(popupAddPost);
});
buttonCloseList.forEach(btn => {
    const popup = btn.closest('.popup');
    popup.addEventListener('mousedown', closeByMouse);
    btn.addEventListener('click', () => closePopup(popup)); 
});
// вызовы сохранения данных и добавления карточки пользователя
formProfile.addEventListener('submit', submitEditProfileForm);
formPost.addEventListener('submit', addCard);

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

const formList = Array.from(document.querySelectorAll('.popup__form'));
formList.forEach((formElement) => {
    const validator = new FormValidator(validationConfig, formElement);
    validator.enableValidation();
});

initialCards.forEach((element) => {
  createCard(element);
});
//экспортируем все нужные переменные и функции
export {popupOpenPlace, popupPlaceName, popupPlaceImage, openPopup}