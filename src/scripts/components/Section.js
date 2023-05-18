export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    addItem(item) {
        this._container.prepend(item);
    }

    renderItem() {
        this._items.forEach(element => {
            this._renderer(element);
        });
    }
}