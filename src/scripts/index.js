// импортируем все классы
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import UserInfo from './components/UserInfo.js';
import Section from './components/Section.js';
// переменные
import { buttonOpenAddCardPopup, 
    buttonOpenEditProfilePopup, 
    profileName, 
    profileStatus, 
    validationConfig,
    initialCards, 
    inputCardName, 
    inputCardUrl, 
    popupOpenPlace, 
    formPost,
    formProfile,
    popupEditProfileSelector,
    popupAddPostSelector,
    placesList, 
    inputUserName,
    inputUserProfession,
    placeTemplate
} from './utils/constants.js';
// стили
import './../styles/pages/index.css'
// объявим 
// формы с валидацией
const popupEditProfileValidation = new FormValidator(validationConfig, formProfile);
const popupAddPostValidation = new FormValidator(validationConfig, formPost);
// подключение валидации
popupEditProfileValidation.enableValidation();
popupAddPostValidation.enableValidation();
// создание карточек
const renderCard = (element) => {
    const card = new Card({
        data: element,
        handleCardClick: (link, title) => {
            const popupWithImage = new PopupWithImage(popupOpenPlace);
            popupWithImage.setEventListeners();
            popupWithImage.open(link, title);
        }
    }, placeTemplate)
    const cardRendered = card.generateCard();
    cardList.addItem(cardRendered);
}
const cardList = new Section({
    items: initialCards,
    renderer: renderCard}, placesList)  
cardList.renderItem();
// создание попапа редактирования профиля
const userInfo = new UserInfo({
    userName: profileName,
    userProfession: profileStatus
});
const popupEditProfile = new PopupWithForm(popupEditProfileSelector, (evt) => {
    userInfo.setUserInfo({
        name: inputUserName.value,
        profession: inputUserProfession.value
    });
    popupEditProfile.close();
});
popupEditProfile.setEventListeners();
// и попапа создания карточки
const popupAddPost = new PopupWithForm(popupAddPostSelector, () => {
    renderCard({
        link: inputCardUrl.value,
        title: inputCardName.value
    })
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