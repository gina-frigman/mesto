# проект: место

### обзор

* интро
* github pages
* figma
* методы создания
* доработка

**интро**

добро пожаловать, вы попали в "место" - сайт *моих воспоминаний*. 
поскольку было разрешено выбрать картинки и названия мест самостоятельно, я решила реализовать свою идею и провести экскурсию по дорогим местам в моей памяти.

**github pages**

[здесь вы можете прогуляться по моим воспоминаниям](https://chaosyella.github.io/mesto/)

**figma**

сайт сделан с помощью [макета из фигмы](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1).
как я уже сказала, присутствуют некоторые изменения и отклонения от образца.

**методы создания**

* адаптивная вёрстка

```css
@media screen and (max-width: 999px) {
    .profile {
        flex-direction: column;
        margin-bottom: 36px;
    }
}
```

* бэм методология

```html
<div class="place">
    <img class="place__image" src="./images/walk.jpeg">
    <div class="place-info">
        <h1 class="place-info__name">летняя прогулка в петербурге</h1>
        <button class="place-info__like place-info__like_active" type="button"></button>
    </div>
</div>
```

* flexbox

```css
.profile {
    display: flex;
    align-items: center;
    justify-content: center;
}
```

* grid

```css
.places {
    display: grid;
    grid-template-columns: repeat(auto-fit, 282px);
    gap: 20px 17px;
}
```

* button

```html

<button class="popup__submit" type="submit">Сохранить</button>
```

* input

```html

<input class="popup__name" type="text" value="Жак-Ив Кусто">
<input class="popup__status" type="text" value="Исследователь океана">
```

* function

```js
function savingData(evt) {
    evt.preventDefault();
    let profileInfo = document.querySelector('.profile-info');
    
    profileInfo.innerHTML = `
    <div class="profile-info">
        <div class="profile-info-flex">
            <p class="profile-info-flex__name">${nameForm.value}</p>
            <button class="profile-info-flex__edit" type="button"></button>
        </div>
        <p class="profile-info__status">${statusForm.value}</p>
    </div>
    `;
    formDisappearing();
};
```

* event

```js
closeButton.addEventListener('click', formDisappearing);
```

**доработка**

на сайте есть множество вещей, которые можно доработать:

1. наименования классов

я не совсем уверена, что их названия верны, возможно, стоит придумать другие варианты более короткого имени.


2. раздел профиля при ширине от 660 до 999 пикселей

все секции сайта имеют либо плавное изменение ширины, либо два брейкпоинта, на которых происходят кардинальные изменения. у профиля такого нет.


3. возможность ставить лайки

в следующем спринте это будет реализовано.


4. возможность добавлять фотографии

не уверена, что в следующих спринтах это будет реализовано, но идею нужно воплотить в жизнь, чтобы кнопка не была бесполезной.


5. плавное возвращение цвета на кнопках, когда курсор убрали

я не до конца разобралась в теме переходов, но позже займусь этим.