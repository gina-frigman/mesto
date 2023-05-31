export default class UserInfo {
    constructor({ userName, userAbout, userAvatar }) {
        this._userName = userName;
        this._userAbout = userAbout;
        this._userAvatar = userAvatar
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userAbout.textContent,
            avatar: this._userAvatar.src
        }; 
    }

    getUserId() {
        return this._userId;
    }

    setUserInfo(content) {
        this._userName.textContent = content.name;
        this._userAbout.textContent = content.about;
        this._userAvatar.src = content.avatar;
        this._userId = content._id;
    }
}