export default class UserInfo {
    constructor({ userName, userProfession }) {
        this._userName = userName;
        this._userProfession = userProfession;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            profession: this._userProfession.textContent
        }; 
    }

    setUserInfo(content) {
        this._userName.textContent = content.name;
        this._userProfession.textContent = content.profession;
    }
}