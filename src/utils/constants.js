// массив карточек
// селекторы для валидации
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};
//переменные: всех кнопок
export const buttonOpenEditProfilePopup = document.querySelector('.profile__edit');
export const buttonOpenAddCardPopup = document.querySelector('.profile__add');
export const buttonOpenEditAvatarPopup = document.querySelector('.profile__avatar-button')
export const buttonCloseList = document.querySelectorAll('.popup__close');
// попапов и их составляющих
export const popupEditProfileSelector = document.querySelector('.popup_profile');
export const popupAddPostSelector = document.querySelector('.popup_post');
export const popupDeleteCardSelector = document.querySelector('.popup_delete');
export const popupEditAvatarSelector = document.querySelector('.popup_avatar');
export const popupOpenPlace = document.querySelector('.popup_place');
export const popupPlaceImage = document.querySelector('.popup__image');
export const popupPlaceName = document.querySelector('.popup__name');
// форм и переменных для ввода
export const formProfile = document.querySelector('.popup__form_profile');
export const inputUserName = document.querySelector('.popup__input_type_name');
export const inputUserAbout = document.querySelector('.popup__input_type_about');
export const formPost = document.querySelector('.popup__form_post');
export const inputCardName = document.querySelector('.popup__input_type_name-place');
export const inputCardUrl = document.querySelector('.popup__input_type_url');
export const formAvatar = document.querySelector('.popup__form_avatar');
export const inputUserAvatar = document.querySelector('.popup__input_type_avatar');
export const formDelete = document.querySelector('.popup__form_delete');
// и имени, статуса профиля, списка карточек и шаблона
export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile-info__about');
export const profileAvatar = document.querySelector('.profile__avatar')
export const placesList = document.querySelector('.places');
export const placeTemplate = '#place-template'