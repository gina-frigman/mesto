const cardElement = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  };

const showError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
    inputElement.classList.add(inputErrorClass);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    inputElement.classList.remove(inputErrorClass);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

const checkValidation = (formElement, inputList, inputElement, buttonElement, {inactiveButtonClass, inputErrorClass, errorClass}) => {
    if (!inputElement.checkValidity()) {
        showError(formElement, inputElement, inputElement.validationMessage, {inputErrorClass, errorClass});
        toggleButtonState(inputList, buttonElement, {inactiveButtonClass});
    } else {
        hideError(formElement, inputElement, {inputErrorClass, errorClass});
        toggleButtonState(inputList, buttonElement, {inactiveButtonClass});
    };
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    };
  };

const setEventListeners = (formElement, {inputSelector, inputErrorClass, errorClass, inactiveButtonClass, submitButtonSelector}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, {inactiveButtonClass});
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkValidation(formElement, inputList, inputElement, buttonElement, {inactiveButtonClass, inputErrorClass, errorClass});
            toggleButtonState(inputList, buttonElement, {inactiveButtonClass});
        });
    });
};

const enableValidation = ({formSelector, inputSelector, inputErrorClass, errorClass, inactiveButtonClass, submitButtonSelector}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, {inputSelector, inputErrorClass, errorClass, inactiveButtonClass, submitButtonSelector});
    });
};

enableValidation(cardElement);