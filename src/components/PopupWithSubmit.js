import Popup from "./Popup";
export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__form')
        this._submitLoading = this._popup.querySelector('.popup__submit-loading');
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitLoading.classList.add('popup__submit-loading_visible');
        } else {
            this._submitLoading.classList.remove('popup__submit-loading_visible')
        }
    }

    open(cardElement, cardId) {
        super.open();
        this._cardElement = cardElement;
        this._cardId = cardId;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.renderLoading(true);
            this._handleSubmitForm(this._cardElement, this._cardId);
          });
    }
}