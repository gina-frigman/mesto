// импортируем все классы
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
// переменные
import { buttonOpenAddCardPopup, 
    buttonOpenEditProfilePopup, 
    profileName, 
    profileprofession, 
    validationConfig,
    initialCards,
    popupOpenPlace, 
    formPost,
    formProfile,
    popupEditProfileSelector,
    popupAddPostSelector,
    placesList, 
    inputUserName,
    inputUserProfession,
    placeTemplate
} from '../utils/constants.js';
// стили
import './index.css'
// объявим формы с валидацией
const popupEditProfileValidation = new FormValidator(validationConfig, formProfile);
const popupAddPostValidation = new FormValidator(validationConfig, formPost);
// подключение валидации
popupEditProfileValidation.enableValidation();
popupAddPostValidation.enableValidation();
// и попапа открытой карточки
const popupWithImage = new PopupWithImage(popupOpenPlace);
popupWithImage.setEventListeners();
// создание карточек
const renderCard = (element) => {
    const card = new Card({
        data: element,
        handleCardClick: (link, title) => {
            popupWithImage.open(link, title);
        }
    }, placeTemplate)
    const cardRendered = card.generateCard();
    cardList.addItem(cardRendered);
}
const cardList = new Section({
    renderer: renderCard}, placesList)  
cardList.renderItem(initialCards);
// создание попапа редактирования профиля
const userInfo = new UserInfo({
    userName: profileName,
    userProfession: profileprofession
});
const popupEditProfile = new PopupWithForm(popupEditProfileSelector, (data) => {
    userInfo.setUserInfo(data);
    popupEditProfile.close();
});
popupEditProfile.setEventListeners();
// попапа создания карточки
const popupAddPost = new PopupWithForm(popupAddPostSelector, (data) => {
    renderCard(data);
    popupAddPost.close();
});
popupAddPost.setEventListeners();
// слушатели открытия попапов
buttonOpenEditProfilePopup.addEventListener('click', () => {
    popupEditProfile.open();
    const userInfoContent = userInfo.getUserInfo();
    inputUserName.value = userInfoContent.name;
    inputUserProfession.value = userInfoContent.profession;
    popupEditProfileValidation.resetValidation();
});
buttonOpenAddCardPopup.addEventListener('click', () => {
    popupAddPost.open();
    popupAddPostValidation.resetValidation();
});