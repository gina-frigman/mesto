// импортируем все классы
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Api from '../components/Api.js';
// переменные
import { buttonOpenAddCardPopup, 
    buttonOpenEditProfilePopup, 
    buttonOpenEditAvatarPopup,
    profileName, 
    profileAbout, 
    validationConfig,
    popupOpenPlace, 
    formPost,
    formProfile,
    formAvatar,
    popupEditProfileSelector,
    popupAddPostSelector,
    popupDeleteCardSelector,
    popupEditAvatarSelector,
    placesList, 
    inputUserName,
    inputUserAbout,
    placeTemplate,
    profileAvatar
} from '../utils/constants.js';
// стили
import './index.css';
// создадим класс со всеми обращениями к серверу
export const api = new Api('https://mesto.nomoreparties.co/v1/cohort-66', {
    authorization: '7b97ff9c-d1b9-4863-9253-700c3babdb03',
    "content-type": "application/json"
});
// получим всю информацию с сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([userRes, cardRes]) => {
    cardRes.forEach(element => {
        element.userId = userRes._id;
    });
    userInfo.setUserInfo(userRes);
    cardList.renderItem(cardRes);
})
.catch(err => console.log(err));
// объявим, какие данные где расположены
const userInfo = new UserInfo({
    userName: profileName,
    userAbout: profileAbout,
    userAvatar: profileAvatar,
});
// и создадим карточки
const renderCard = (element) => {
    const card = new Card({
        data: element,
        handleCardClick: (link, name) => {
            popupWithImage.open(link, name);
        },
        handleDeleteCard: (card, cardId) => {
            popupDeleteCard.open(card, cardId);
        },
        handleLikeCard: (likeButton, cardId) => {
            if (likeButton.classList.contains('place__like_active')) {
                api.unlike(cardId)
                .then(res => {
                    card.changeLikesAmount(res.likes)
                })
                .catch(err => console.log(err));
            } else {
                api.like(cardId)
                .then(res => {
                    card.changeLikesAmount(res.likes)
                })
                .catch(err => console.log(err))
            }
        }
    }, placeTemplate);
    const cardRendered = card.generateCard();
    cardList.addItem(cardRendered);
}
const cardList = new Section({
    renderer: renderCard
}, placesList);
// создадим попап редактирования профиля
const popupEditProfile = new PopupWithForm(popupEditProfileSelector, (data) => {
    api.editProfileInfo(data)
    .then(res => {
        userInfo.setUserInfo({
            name: res.name,
            about: res.about,
            avatar: res.avatar
        });
        popupEditProfile.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
        popupEditProfile.renderLoading(false);
    });
});
// попап смены аватара
export const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, (data) => {
    api.editProfileAvatar(data)
    .then(res => {
        userInfo.setUserInfo({
            name: res.name,
            about: res.about,
            avatar: res.avatar
        });
        popupEditAvatar.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
        popupEditAvatar.renderLoading(false);
    });
});
popupEditAvatar.setEventListeners();
popupEditProfile.setEventListeners();
// попап создания карточки
const popupAddPost = new PopupWithForm(popupAddPostSelector, (data) => {
    api.addCard(data)
    .then(res => {
        res.userId = userInfo.getUserId();
        renderCard(res);
        popupAddPost.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
        popupAddPost.renderLoading(false);
    });
});
popupAddPost.setEventListeners();
// попап открытой карточки
const popupWithImage = new PopupWithImage(popupOpenPlace);
popupWithImage.setEventListeners();
// и попап удаления карточки
export const popupDeleteCard = new PopupWithSubmit(popupDeleteCardSelector, (cardElement, cardId) => {
    api.deleteCard(cardId)
    .then(() => {
        cardElement.delete();
        popupDeleteCard.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
        popupDeleteCard.renderLoading(false);
    });
});
popupDeleteCard.setEventListeners();
// объявим формы с валидацией
const popupEditProfileValidation = new FormValidator(validationConfig, formProfile);
const popupAddPostValidation = new FormValidator(validationConfig, formPost);
const popupEditAvatarValidation = new FormValidator(validationConfig, formAvatar);
// и подключим валидацию
popupEditProfileValidation.enableValidation();
popupAddPostValidation.enableValidation();
popupEditAvatarValidation.enableValidation();
// слушатели открытия попапов
buttonOpenEditProfilePopup.addEventListener('click', () => {
    popupEditProfile.open();
    const userInfoContent = userInfo.getUserInfo();
    inputUserName.value = userInfoContent.name;
    inputUserAbout.value = userInfoContent.about;
    popupEditProfileValidation.resetValidation();
});
buttonOpenEditAvatarPopup.addEventListener('click', () => {
    popupEditAvatar.open();
    popupEditAvatarValidation.resetValidation();
});
buttonOpenAddCardPopup.addEventListener('click', () => {
    popupAddPost.open();
    popupAddPostValidation.resetValidation();
});
// 7b97ff9c-d1b9-4863-9253-700c3babdb03