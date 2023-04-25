export default class FormValidator {
    constructor(configuration, formElement) {
        this._formElement = formElement;
        this._formSelector = configuration.formSelector;
        this._inputSelector = configuration.inputSelector;
        this._submitButtonSelector = configuration.submitButtonSelector;
        this._inactiveButtonClass = configuration.inactiveButtonClass;
        this._inputErrorClass = configuration.inputErrorClass;
        this._errorClass = configuration.errorClass;
    }

    _showError(inputElement) {
        inputElement.classList.add(this._inputErrorClass);
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideError(inputElement) {
        inputElement.classList.remove(this._inputErrorClass);
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
          this._buttonElement.classList.add(this._inactiveButtonClass);
          this._buttonElement.disabled = true;
        } else {
          this._buttonElement.classList.remove(this._inactiveButtonClass);
          this._buttonElement.disabled = false;
        };
    }

    _checkValidation(inputElement) {
        if (!inputElement.checkValidity()) {
            this._showError(inputElement);
            this._toggleButtonState();
        } else {
            this._hideError(inputElement);
            this._toggleButtonState();
        };
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    }

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkValidation(inputElement);
                this._toggleButtonState();
            });
        });
    }

    enableValidation() {
        this._setEventListeners();
    }
};

//cat for validation check
//https://get.pxhere.com/photo/grass-kitten-cat-mammal-fauna-pets-whiskers-vertebrate-small-to-medium-sized-cats-cat-like-mammal-multicolored-cat-black-white-and-brown-1062235.jpg
//delete later