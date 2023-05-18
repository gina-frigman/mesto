import Popup from "./Popup.js";
import { popupPlaceImage, popupPlaceName } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open(link, title) {
        super.open();
        popupPlaceImage.src = link;
        popupPlaceImage.alt = title;
        popupPlaceName.textContent = title;
    }
}