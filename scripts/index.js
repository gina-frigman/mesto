let editButton = document.querySelector('.profile-info-flex__edit');
let addButton = document.querySelector('.profile__add');
let likeButton = document.querySelector('.place-info__like');
let submitButton = document.querySelector('.popup__submit');
let closeButton = document.querySelector('.popup__close');
let nameForm = document.querySelector('.popup__name');
let statusForm = document.querySelector('.popup__status');

function formAppearing() {
    let popup = document.querySelector('.popup');
    popup.classList.add('popup_opened');
};

function formDisappearing() {
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup_opened');
};

function savingData(evt) {
    evt.preventDefault();
    let profileInfo = document.querySelector('.profile-info');
    
    profileInfo.innerHTML = `
    <div class="profile-info">
        <div class="profile-info-flex">
            <p class="profile-info-flex__name">${nameForm.value}</p>
            <button class="profile-info-flex__edit" type="button"></button>
        </div>
        <p class="profile-info__status">${statusForm.value}</p>
    </div>
    `;
    formDisappearing();
};

editButton.addEventListener('click', formAppearing);
closeButton.addEventListener('click', formDisappearing);
submitButton.addEventListener('click', savingData);