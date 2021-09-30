import Image from "./Image";
import gallerieTemplate from "./templates/gallerie";

export default class Gallerie {
  constructor(data) {
    this.el = document.querySelector(data.el);
    this.elementsSlider;
    this.elementsMenu;

    this.intervalLength = 1500;
    this.interval;
    this.diapoPlay = false;
    this.cpt = 0;

    this.title;
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
    this._menuActivation();
  }

  /**
   * Activation des liens du Menu
   */
  _menuActivation() {
    for (const image of this.images) {
      let imageMenu = image.elMenu;
      imageMenu.querySelector("a").addEventListener("click", () => {
        this.cpt = image.id - 1;
        this.elementsSlider.style.left = `-${this.cpt * 100}%`;
        this._titleUpdate();
      });
    }
  }

  /**
   * Met a jour le titre en fonction de l'image
   */
  _titleUpdate() {
    this.title = this.el.querySelector(".slider-menu h1");
    this.title.innerText = this.images[this.cpt].title;
  }

  /**
   * Image suivante
   */
  next() {
    this.cpt++;
    if (this.cpt == this.images.length) this.cpt = 0;
    this.elementsSlider.style.left = `-${this.cpt * 100}%`;
    this._titleUpdate();
  }

  /**
   * Image précédente
   */
  previous() {
    this.cpt--;
    if (this.cpt == -1) this.cpt = this.images.length - 1;
    this.elementsSlider.style.left = `-${this.cpt * 100}%`;
    this._titleUpdate();
  }

  /**
   * Lancement diaporama
   */
  play() {
    //si le diapo n'est pas déjà en marche
    if (this.diapoPlay == false) {
      this.next(); // on lance directement une occurence
      this.diapoPlay = true;
      this._toggleActive();

      this.interval = setInterval(() => {
        this.next();
      }, this.intervalLength);
    }
  }

  /**
   * Interruption diaporama
   */
  pause() {
    clearInterval(this.interval);
    if(this.diapoPlay == true) this._toggleActive(); //
    this.diapoPlay = false;
  }

  /**
   * Toggle classes active pour BTN PLAY et BTN STOP
   */
  _toggleActive() {
    this.el.querySelector(".play").classList.toggle("active");
    this.el.querySelector(".stop").classList.toggle("active");
  }

  /**
   * Activation éléments interactifs
   * (bouton de naviguation)
   */
  _activerBtns() {
    //Click sur BTN NEXT
    this.el.querySelector(".next").addEventListener("click", () => {
      this.next();
    });

    //Click sur BTN PREVIOUS
    this.el.querySelector(".previous").addEventListener("click", () => {
      this.previous();
    });

    //Click sur BTN PLAY
    this.el.querySelector(".play").addEventListener("click", () => {
      this.play();
    });

    //Click sur BTN STOP
    this.el.querySelector(".stop").addEventListener("click", () => {
      this.pause();
    });
  }

}
