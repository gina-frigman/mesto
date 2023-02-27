let editButton = document.querySelector('.profile__edit');
let closeButton = document.querySelector('.popup__close');
let nameForm = document.querySelector('.popup__input_type_name');
let statusForm = document.querySelector('.popup__input_type_status');
let popup = document.querySelector('.popup');
let nameProfile = document.querySelector('.profile__name');
let statusProfile = document.querySelector('.profile-info__status');
let form = document.querySelector('.popup__form');

function popupOpening() {
    popup.classList.add('popup_opened');
    nameForm.value = nameProfile.textContent;
    statusForm.value = statusProfile.textContent;
};

function popupClosing() {
    popup.classList.remove('popup_opened');
};

function savingData(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameForm.value;
    statusProfile.textContent = statusForm.value;
    popupClosing();
};

editButton.addEventListener('click', popupOpening);
closeButton.addEventListener('click', popupClosing);
form.addEventListener('submit', savingData);