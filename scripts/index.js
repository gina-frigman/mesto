// объявим переменные

// всех кнопок
const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
const closeProfilePopupButton = document.querySelector('.popup__close_profile');
const closePostPopupButton = document.querySelector('.popup__close_post');
const closePlacePopupButton = document.querySelector('.popup__close_place');

// попапов и их составляющих
const popupEditProfile = document.querySelector('.popup_profile');
const popupAddPost = document.querySelector('.popup_post');
const popupOpenPlace = document.querySelector('.popup_place');
const popupPlaceImage = document.querySelector('.popup__image');
const popupPlaceName = document.querySelector('.popup__name');

// форм и переменных для ввода
const formProfile = document.querySelector('.popup__form_profile');
const nameForm = document.querySelector('.popup__input_type_name');
const statusForm = document.querySelector('.popup__input_type_status');
const formPost = document.querySelector('.popup__form_post');
const namePlaceForm = document.querySelector('.popup__input_type_name-place');
const urlForm = document.querySelector('.popup__input_type_url');

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
function openingPopup(popup) {
    popup.classList.add('popup_opened');
};

function closingPopup(popup) {
    popup.classList.remove('popup_opened');
}

//сохранение данных
function savingData(evt) {
    evt.preventDefault();
    profileName.textContent = nameForm.value;
    profileStatus.textContent = statusForm.value;
    closingPopup(popupEditProfile);
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
        openingPopup(popupOpenPlace);
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
        name: namePlaceForm.value,
        link: urlForm.value
    };
    const newPost = createPlaces(newCard);
    placesList.prepend(newPost);
    closingPopup(popupAddPost);
    formPost.reset();
};

// вызов открытия/закрытия попапов
editButton.addEventListener('click', function(){
    nameForm.value = profileName.textContent;
    statusForm.value = profileStatus.textContent;
    openingPopup(popupEditProfile);
});
addButton.addEventListener('click', function(){
    openingPopup(popupAddPost);
});
closeProfilePopupButton.addEventListener('click', function(){
    closingPopup(popupEditProfile);
});
closePostPopupButton.addEventListener('click', function(){
    closingPopup(popupAddPost);
});
closePlacePopupButton.addEventListener('click', function(){
    closingPopup(popupOpenPlace);
});

// вызовы сохранения данных и добавления карточки пользователя
formProfile.addEventListener('submit', savingData);
formPost.addEventListener('submit', addPost);