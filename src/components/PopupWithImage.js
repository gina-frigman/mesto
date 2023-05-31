import Popup from "./Popup.js";
import { popupPlaceImage, popupPlaceName } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open(link, name) {
        super.open();
        popupPlaceImage.src = link;
        popupPlaceImage.alt = name;
        popupPlaceName.textContent = name;
    }
}