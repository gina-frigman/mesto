import { inputCardName, inputCardUrl, inputUserName, inputUserAbout, inputUserAvatar, profileAbout, profileAvatar, profileName } from "../utils/constants";

export default class Api {
    constructor(baseUrl, headers) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
        } else {
            Promise.reject(res.status)
        }
        })
        .catch(console.log);
    }
    
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                Promise.reject(res.status)
            }
        })
        .catch(console.log);
    }  

    editProfileInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: inputUserName.value,
                about: inputUserAbout.value,
                avatar: profileAvatar.src
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } 
            Promise.reject(console.log)
        })
        .catch(err => console.log(err))
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
        .then(res => {
            if (res.ok) {
                return res.json()
            } 
            Promise.reject(console.log)
        })
        .catch(err => console.log(err))
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } 
            Promise.reject(console.log)
        })
        .catch(err => console.log(err))
    }

    like(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } 
            Promise.reject(console.log)
        })
        .catch(err => console.log(err))
    }

    unlike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } 
            Promise.reject(console.log)
        })
        .catch(err => console.log(err))
    }

    editProfileAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.link
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } 
            Promise.reject(console.log)
        })
        .catch(err => console.log(err))  
    }
}