// массив карточек
export const initialCards = [
    {
      title: 'Побережье комарово',
      link: 'https://github.com/chaosyella/mesto/blob/main/images/seaside.jpeg?raw=true'
    },
    {
      title: 'Выпускной сестры',
      link: 'https://github.com/chaosyella/mesto/blob/main/images/graduation.jpeg?raw=true'
    },
    {
      title: 'Школьный зимний пейзаж',
      link: 'https://github.com/chaosyella/mesto/blob/main/images/winter.jpeg?raw=true'
    },
    {
      title: 'Вечерняя школа',
      link: 'https://github.com/chaosyella/mesto/blob/main/images/school.jpeg?raw=true'
    },
    {
      title: 'Репетиция перед выступлением',
      link: 'https://github.com/chaosyella/mesto/blob/main/images/repetition.jpeg?raw=true'
    },
    {
      title: 'Летняя прогулка в петербурге',
      link: 'https://github.com/chaosyella/mesto/blob/main/images/walk.jpeg?raw=trueg'
    }
];
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
export const buttonCloseList = document.querySelectorAll('.popup__close');
// попапов и их составляющих
export const popupEditProfileSelector = document.querySelector('.popup_profile');
export const popupAddPostSelector = document.querySelector('.popup_post');
export const popupOpenPlace = document.querySelector('.popup_place');
export const popupPlaceImage = document.querySelector('.popup__image');
export const popupPlaceName = document.querySelector('.popup__name');
// форм и переменных для ввода
export const formProfile = document.querySelector('.popup__form_profile');
export const inputUserName = document.querySelector('.popup__input_type_name');
export const inputUserProfession = document.querySelector('.popup__input_type_status');
export const formPost = document.querySelector('.popup__form_post');
export const inputCardName = document.querySelector('.popup__input_type_name-place');
export const inputCardUrl = document.querySelector('.popup__input_type_url');
// и имени, статуса профиля, списка карточек и шаблона
export const profileName = document.querySelector('.profile__name');
export const profileStatus = document.querySelector('.profile-info__status');
export const placesList = document.querySelector('.places');
export const placeTemplate = '#place-template' 