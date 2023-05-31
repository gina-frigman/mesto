// delete this file later

import { inputUserName, inputUserAbout, profileName, profileAbout } from "./src/utils/constants";

// i'm really sorry, if i forgot to do it but if i really did, 
// there's short description of the file's aim
// i'll write all of my considerations about required code's logic here,
// because i feel panic and anxiety when i open index.js and understand that
// i don't lnow what to do
// idk maybe there'll be my comments about it


// editing profile info
// i think i should use new Popup with form and write fetch as an argumnet
// or i should rewrite class's code
// or edit user info's class

// okay, i don't need to change logic of inputs, because they should take info
// from user info on the page
// but user name on the page should be got from server so lets do it

const setProfileInfo = () => {
    fetch('https://mesto.nomoreparties.co/v1/cohort-66/users/me', {
        headers: {
            authorization: '7b97ff9c-d1b9-4863-9253-700c3babdb03'
        }
    })
    .then(res => console.log(res))
    .then((res) => {
        userInfo.setUserInfo(res)
    })
    .catch(console.log);
}

setProfileInfo(); // works correctly


// when user change his profile info it should be posted to server
// i think i don't need userInfo anymore..
// no, i am.. brain is good especially when u don't have it

const changeUserInfo = () => {
    fetch('https://mesto.nomoreparties.co/v1/cohort-66/users/me', {
        method: 'PATCH',
        headers: {
            authorization: '7b97ff9c-d1b9-4863-9253-700c3babdb03',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: inputUserName.value,
            about: inputUserAbout.value
        })
    })
}  // should i write it in handleSubmitForm..?


const popupEditProfile = new PopupWithForm(popupEditProfileSelector, (data) => {
    changeUserInfo();
    setProfileInfo();
    popupEditProfile.close();
}); // anddddd i think i can delete getUserInfo
// maybe i have to rewrite it with fetch.. i should try

class UserInfo {
    constructor({ userName, userAbout }) {
        this._userName = userName;
        this._userAbout = userAbout;
    }

    getUserInfo() {
        fetch('https://mesto.nomoreparties.co/v1/cohort-66/users/me', {
            headers: {
                authorization: '7b97ff9c-d1b9-4863-9253-700c3babdb03'
            }
        })
        .then(res => {
            if (res.ok) {
                console.log(res.json())
            } else {
                Promise.reject(res.status)
            }
        })
        .then((res) => {
            userInfo.setUserInfo(res)
        })
        .catch(console.log);
    }

    setUserInfo(content) { // do i have to change it..? i think no
        this._userName.textContent = content.name;
        this._userAbout.textContent = content.about;
    }
}

// i don't know whether i need getUserInfo
// on the one hand i've got getProfileInfo which is working well
// on the other hand, if i can use getProfileInfo instead of getUserInfo,
// i should rewrite getUserInfo with gerProfileInfo's code
// but i can't do it because there's setUserInfo in it
// and maybe i could delete it and make an obj like in getUserInfo
// but then i have to use setUserInfo with argument considered as res of fetch
// and i can't do it
// all this time i had to write this code as api class....
// can i use my brain at least one time and start project with reading task

// to do list:

// – user info                     --done
// – card info                     --done without creating
// – edit profile                  --definetly done!!
// – add card                      --done but not sure
// – likes amount                  --done but not sure
// – popup delete                  --done
// – delete card                   --done without filter
// – put / delete like             --done but not sure
// – avatar                        --done
// – popup avatar                  --definetly done!!
// – saving..
// – set all api methods