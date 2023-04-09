const enableData = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  };
  
const showError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
    inputElement.classList.add(inputErrorClass);
    const errorElement = formElement.querySelector((`.${inputElement.id}-error`));
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    inputElement.classList.remove(inputErrorClass);
    const errorElement = formElement.querySelector((`.${inputElement.id}-error`));
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

const checkValidation = (formElement, inputList, inputElement, buttonElement, {inputErrorClass}) => {
    if (!inputElement.checkValidity()) {
        showError(formElement, inputElement, inputElement.validationMessage, enableData);
        toggleButtonState(inputList, buttonElement, enableData);
    } else {
        hideError(formElement, inputElement, enableData);
        toggleButtonState(inputList, buttonElement, enableData);
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

const setEventListeners = (formElement, {inputSelector, submitButtonSelector}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, enableData);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkValidation(formElement, inputList, inputElement, buttonElement, enableData);
            toggleButtonState(inputList, buttonElement, enableData);
        });
    });
};

const enableValidation = ({formSelector}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, enableData);
    });
};

enableValidation(enableData);

//{formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass} delete later