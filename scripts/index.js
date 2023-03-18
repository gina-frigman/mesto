const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
const profileCloseButton = document.querySelector('.popup__close_profile');
const postCloseButton = document.querySelector('.popup__close_post');
const placeCloseButton = document.querySelector('.popup__close_place');
const nameForm = document.querySelector('.popup__input_type_name');
const statusForm = document.querySelector('.popup__input_type_status');
const namePlaceForm = document.querySelector('.popup__input_type_name-place');
const urlForm = document.querySelector('.popup__input_type_url');
const imagePopup = document.querySelector('.popup__image');
const namePopup = document.querySelector('.popup__name');
const profilePopup = document.querySelector('.popup_profile');
const postPopup = document.querySelector('.popup_post');
const placePopup = document.querySelector('.popup_place');
const nameProfile = document.querySelector('.profile__name');
const statusProfile = document.querySelector('.profile-info__status');
const profileForm = document.querySelector('.popup__form_profile');
const postForm = document.querySelector('.popup__form_post');
const placesList = document.querySelector('.places');

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

function profilePopupOpening() {
    profilePopup.classList.remove('popup_closed');
    profilePopup.classList.add('popup_opened');
    nameForm.value = nameProfile.textContent;
    statusForm.value = statusProfile.textContent;
};

function profilePopupClosing() {
    profilePopup.classList.remove('popup_opened');
    profilePopup.classList.add('popup_closed');
};

function postPopupOpening() {
    postPopup.classList.remove('popup_closed');
    postPopup.classList.add('popup_opened');
};

function postPopupClosing() {
    postPopup.classList.remove('popup_opened');
    postPopup.classList.add('popup_closed');
};

function placePopupClosing() {
    placePopup.classList.remove('popup_opened');
    placePopup.classList.add('popup_closed');

};

function savingData(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameForm.value;
    statusProfile.textContent = statusForm.value;
    profilePopupClosing();
};

function like(evt) {
    evt.target.classList.toggle('place__like_active');
};

function createPlaces(element) {
    const placeTemplate = document.querySelector('#place-template').content;
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    const likeButton = placeElement.querySelector('.place__like');
    const deleteButton = placeElement.querySelector('.place__delete');
    const placeImage = placeElement.querySelector('.place__image');

    placeElement.querySelector('.place__name').textContent = element.name;
    placeImage.src = element.link;
    placeImage.alt = element.alt;

    function deletePost() {
        const placeItem = deleteButton.closest('.place');
        placeItem.remove();
    };

    function placePopupOpening() {
        placePopup.classList.remove('popup_closed');
        placePopup.classList.add('popup_opened');
        imagePopup.src = placeImage.src;
        namePopup.textContent = placeElement.querySelector('.place__name').textContent;
    };

    likeButton.addEventListener('click', like);
    deleteButton.addEventListener('click', deletePost);
    placeImage.addEventListener('click', placePopupOpening);
    placeCloseButton.addEventListener('click', placePopupClosing);

    return placeElement;
};

function addPost(evt) {
    evt.preventDefault();
    initialCards.unshift({
        name: namePlaceForm.value,
        link: urlForm.value
    });
    const newCard = initialCards.slice(0,1);
    newCard.forEach(function(element) {
        const newPost = createPlaces(element);
        placesList.prepend(newPost);
    });
    postPopupClosing();
    namePlaceForm.value = namePlaceForm.defaltValue;
    urlForm.value = urlForm.defaultValue;
};

initialCards.forEach(function(element) {
    const newPlaces = createPlaces(element);
    placesList.append(newPlaces);
});

editButton.addEventListener('click', profilePopupOpening);
addButton.addEventListener('click', postPopupOpening);
profileCloseButton.addEventListener('click', profilePopupClosing);
postCloseButton.addEventListener('click', postPopupClosing);
profileForm.addEventListener('submit', savingData);
postForm.addEventListener('submit', addPost);