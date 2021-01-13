import Image from "./Image";
import gallerieTemplate from "./templates/gallerie";

export default class Gallerie {
  constructor(data) {
    this.el = document.querySelector(data.el);
    this.image = [];
    this.loadImages(data.images);
  }

  /**
   *
   * @param {Toutes les images de data.js} images
   * Remplissage de this.image avec toutes les image
   */
  loadImages(images) {
    for (const image of images) {
      this.image.push(new Image({ parent: this, image }));
    }
  }
}
