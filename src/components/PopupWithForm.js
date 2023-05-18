import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._inputList = this._popup.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._formValues = []
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    close() {
        super.close();
        this._popup.querySelector('.popup__form').reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
          });
    }
}