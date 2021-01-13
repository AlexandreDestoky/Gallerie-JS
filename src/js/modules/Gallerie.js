import Image from "./Image";
import gallerieTemplate from "./templates/gallerie";

export default class Gallerie {
  constructor(data) {
    this.el = document.querySelector(data.el);
    this.elementsSlider;
    this.elementsMenu;

    this.cpt = 0;
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

    // Rendu de chaque image
    for (const image of this.images) {
      image.render();
    }

    this._titleUpdate();
    this._activerBtns();
  }

  
  /**
   * Met a jour le titre en fonction de l'image
   */
  _titleUpdate() {
    this.title = this.el.querySelector(".slider-menu h1");
    this.title.innerText = (this.images[this.cpt]).title;
  }

  next() {
    this.cpt++;
    if(this.cpt == this.images.length) this.cpt = 0;
    this.elementsSlider.style.left = `-${this.cpt*100}%`;
    this._titleUpdate();
  }


  _activerBtns() {
    this.el.querySelector(".next").addEventListener("click",()=> {
      this.next();
      console.log("fdp");
    })
  }
}
