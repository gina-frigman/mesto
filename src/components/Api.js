import { inputCardName, inputCardUrl, inputUserName, inputUserAbout, inputUserAvatar, profileAbout, profileAvatar, profileName } from "../utils/constants";

export default class Api {
    constructor(baseUrl, headers) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`ошибка: ${res.status}`); 
        }
        return res.json();
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(this._getResponseData);
    }
    
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(this._getResponseData);
    }  

    editProfileInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
                avatar: data.link
            })
        })
        .then(this._getResponseData);
    }

    addCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link
            })
        })
        .then(this._getResponseData);
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._getResponseData);
    }

    like(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(this._getResponseData);
    }

    unlike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._getResponseData);
    }

    editProfileAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.link
            })
        })
        .then(this._getResponseData);
    }
}