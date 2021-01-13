import Image from "./Image";
import gallerieTemplate from "./templates/gallerie";

export default class Gallerie {
  constructor(data) {
    this.el = document.querySelector(data.el);
    this.elementsSlider;
    this.elementsMenu;

    this.images = [];
    this.loadImages(data.images);
    this.template = gallerieTemplate;
    this.render();
  }

  /**
   *
   * @param {Toutes les images de data.js} images
   * Remplissage de this.image avec toutes les image
   */
  loadImages(images) {
    for (const image of images) {
      this.images.push(new Image({ parent: this, image }));
    }
  }


  render() {
    //on met le template de la gallerie dans #app
    this.el.innerHTML = this.template;
    //il existe pour le naviguateur
    //comme this.el existe, on peut faire des querySelector dessus
    this.elementsSlider = this.el.querySelector(".elementsSlider");
    this.elementsMenu = this.el.querySelector(".elementsMenu");

    console.log(this.elementsSlider);

    // Rendu de chaque image
    for (const image of this.images) {
      image.render();
    }
  }
}
