import sliderTemplate from "./templates/slider";
import menuTemplate from "./templates/menu";

export default class Image {

  constructor(data) {
    this.parent = data.parent;
    this.el;

    //données de data.image
    this.id = data.image.id;
    this.title = data.image.title;
    this.text = data.image.text;
    this.src = data.image.src;
    this.alt = data.image.alt;
  }

}