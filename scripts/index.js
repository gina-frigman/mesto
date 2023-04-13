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
const placeTemplate = document.querySelector('#place-template').content;
// данные для карточек
const initialCards = [
    {
      name: 'Летняя прогулка в петербурге',
      link: './images/walk.jpeg',
      alt: 'закат в центре Петербурга'
    },
    {
      name: 'Репетиция перед выступлением',
      link: './images/repetition.jpeg',
      alt: 'школьный подвал и группа одноклассников'
    },
    {
      name: 'Вечерняя школа',
      link: './images/school.jpeg',
      alt: 'темный коридор'
    },
    {
      name: 'Школьный зимний пейзаж',
      link: './images/winter.jpeg',
      alt: 'вид из окна'
    },
    {
      name: 'Выпускной сестры',
      link: './images/graduation.jpeg',
      alt: 'получение диплома'
    },
    {
      name: 'Побережье комарово',
      link: './images/seaside.jpeg',
      alt: 'берег Финского залива'
    }
  ];
// открытие/закрытие попапов
function closeByEsc(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup)
    };
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
buttonCloseList.forEach(btn => {
    const popup = btn.closest('.popup');
    popup.addEventListener('mousedown', closeByMouse);
    btn.addEventListener('click', () => closePopup(popup)); 
  })
//сохранение данных
function submitEditProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = inputUserName.value;
    profileStatus.textContent = inputUserProfession.value;
    closePopup(popupEditProfile);
};
// лайки карточкам
function like(evt) {
    evt.target.classList.toggle('place__like_active');
};
// создание карточки и добавление им функций
function createPlaces(element) {
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    const likePostButton = placeElement.querySelector('.place__like');
    const deletePostButton = placeElement.querySelector('.place__delete');
    const placeImage = placeElement.querySelector('.place__image');

    placeElement.querySelector('.place__name').textContent = element.name;
    placeImage.src = element.link;
    placeImage.alt = element.alt;

    function deletePost() {
        const placeCard = deletePostButton.closest('.place');
        placeCard.remove();
    };

    likePostButton.addEventListener('click', like);
    deletePostButton.addEventListener('click', deletePost);
    placeImage.addEventListener('click', function(){
        popupPlaceImage.src = placeImage.src;
        popupPlaceImage.alt = placeImage.alt;
        popupPlaceName.textContent = placeElement.querySelector('.place__name').textContent;
        openPopup(popupOpenPlace);
    });

    return placeElement;
};
// добавление карточек в dom с данными из массива
initialCards.forEach(function(element) {
    const newPlaces = createPlaces(element);
    placesList.append(newPlaces);
});
// создание карточки пользователя и ее добавление в dom
function addPost(evt) {
    evt.preventDefault();
    const newCard = {
        name: inputCardName.value,
        link: inputCardUrl.value
    };
    const newPost = createPlaces(newCard);
    placesList.prepend(newPost);
    closePopup(popupAddPost);
    formPost.reset();
    evt.submitter.classList.add('popup__submit_disabled');
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
// вызовы сохранения данных и добавления карточки пользователя
formProfile.addEventListener('submit', submitEditProfileForm);
formPost.addEventListener('submit', addPost);