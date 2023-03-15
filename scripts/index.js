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
      link: 'https://github.com/chaosyella/mesto/blob/main/images/walk.jpeg?raw=true',
      alt: 'закат в центре Петербурга'
    },
    {
      name: 'Репетиция перед выступлением',
      link: 'https://github.com/chaosyella/mesto/blob/main/images/repetition.jpeg?raw=true',
      alt: 'школьный подвал и группа одноклассников'
    },
    {
      name: 'Вечерняя школа',
      link: 'https://github.com/chaosyella/mesto/blob/main/images/school.jpeg?raw=true',
      alt: 'темный коридор'
    },
    {
      name: 'Школьный зимний пейзаж',
      link: 'https://github.com/chaosyella/mesto/blob/main/images/winter.jpeg?raw=true',
      alt: 'вид из окна'
    },
    {
      name: 'Выпускной сестры',
      link: 'https://github.com/chaosyella/mesto/blob/main/images/graduation.jpeg?raw=true',
      alt: 'получение диплома'
    },
    {
      name: 'Побережье комарово',
      link: 'https://github.com/chaosyella/mesto/blob/main/images/seaside.jpeg?raw=true',
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
    postPopup.classList.remove('popup_closed')
    postPopup.classList.add('popup_opened');
};

function postPopupClosing() {
    postPopup.classList.remove('popup_opened');
    postPopup.classList.add('popup_closed');
};

function savingData(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameForm.value;
    statusProfile.textContent = statusForm.value;
    profilePopupClosing();
};

function addPost(evt) {
    const placeTemplate = document.querySelector('#place-template').content;
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    const likeButton = placeElement.querySelector('.place__like');
    const deleteButton = placeElement.querySelector('.place__delete');
    const placeImage = placeElement.querySelector('.place__image');

    evt.preventDefault();
    
    placeElement.querySelector('.place__name').textContent = namePlaceForm.value;
    placeImage.src = urlForm.value;

    placesList.prepend(placeElement);
    
    namePlaceForm.value = namePlaceForm.defaultValue;
    urlForm.value = urlForm.defaultValue;

    postPopupClosing();

    likeButton.addEventListener('click', function(evt){
        evt.target.classList.toggle('place__like_active');
    });

    deleteButton.addEventListener('click', function(){
        const deleteButton = placeElement.querySelector('.place__delete');
        const placeItem = deleteButton.closest('.place');
        placeItem.remove();
    });

    placeImage.addEventListener('click', function(){
        placePopup.classList.remove('popup_closed');
        placePopup.classList.add('popup_opened');
        imagePopup.src = placeImage.src;
        namePopup.textContent = placeElement.querySelector('.place__name').textContent;
    });

    placeCloseButton.addEventListener('click', function(){
        placePopup.classList.remove('popup_opened');
        placePopup.classList.add('popup_closed');
    });
};

initialCards.forEach(function (element) {
    const placeTemplate = document.querySelector('#place-template').content;
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    const likeButton = placeElement.querySelector('.place__like');
    const deleteButton = placeElement.querySelector('.place__delete');
    const placeImage = placeElement.querySelector('.place__image');
    
    placeElement.querySelector('.place__name').textContent = element.name;
    placeImage.src = element.link;
    placeImage.alt = element.alt;

    placesList.append(placeElement);

    likeButton.addEventListener('click', function(evt){
        evt.target.classList.toggle('place__like_active');
    });

    deleteButton.addEventListener('click', function(){
        const deleteButton = placeElement.querySelector('.place__delete');
        const placeItem = deleteButton.closest('.place');
        placeItem.remove();
    });

    placeImage.addEventListener('click', function(){
        placePopup.classList.remove('popup_closed');
        placePopup.classList.add('popup_opened');
        imagePopup.src = placeImage.src;
        namePopup.textContent = placeElement.querySelector('.place__name').textContent;
    });

    placeCloseButton.addEventListener('click', function(){
        placePopup.classList.remove('popup_opened');
        placePopup.classList.add('popup_closed');
    });
});

editButton.addEventListener('click', profilePopupOpening);
addButton.addEventListener('click', postPopupOpening);
profileCloseButton.addEventListener('click', profilePopupClosing);
postCloseButton.addEventListener('click', postPopupClosing);
profileForm.addEventListener('submit', savingData);
postForm.addEventListener('submit', addPost);