import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__form')
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._submitLoading = this._popup.querySelector('.popup__submit-loading');
    }

    _getInputValues() {
        this._formValues = []
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitLoading.classList.add('popup__submit-loading_visible');
        } else {
            this._submitLoading.classList.remove('popup__submit-loading_visible')
        }
    }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.renderLoading(true)
            this._handleSubmitForm(this._getInputValues());
            this.renderLoading(false)
            this.close();
          });
    }
}