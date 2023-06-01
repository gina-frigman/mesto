export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }

    addItem(item) {
        this._container.prepend(item);
    }

    renderItem(items) {
        this._items = items;
        this._items.forEach(element => {
            this._renderer(element);
        });
    }
}