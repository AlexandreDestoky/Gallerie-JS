import sliderTemplate from "./templates/slider";
import menuTemplate from "./templates/menu";

export default class Image {
  constructor(data) {
    this.parent = data.parent;
    this.elSlider;
    this.elMenu;

    //Données de data.image
    this.id = data.image.id;
    this.title = data.image.title;
    this.text = data.image.text;
    this.src = data.image.src;
    this.alt = data.image.alt;

    //Template
    this.sliderTemplate = sliderTemplate;
    this.menuTemplate = menuTemplate;
  }

  /**
   * Met les données dans les emplacement du template
   */
  _replaceInTemplate() {
    for (let propriete in this) {
      this.sliderTemplate = this.sliderTemplate.replace(`{{${propriete}}}`, this[propriete]);
      this.menuTemplate = this.menuTemplate.replace(`{{${propriete}}}`, this[propriete]);
    }
  }

  render() {
    this._replaceInTemplate();

    //Pour le Slider
    this.elSlider = document.createElement("li");
    this.elSlider.setAttribute("id", this.id);
    this.elSlider.classList.add("slide");
    this.elSlider.innerHTML = this.sliderTemplate;
    this.parent.elementsSlider.append(this.elSlider);

    //Pour le menu
    this.elMenu = document.createElement("li");
    this.elMenu.innerHTML = this.menuTemplate;
    this.parent.elementsMenu.append(this.elMenu);

    this._activerBtns();
  }

  /**
   * Toggle d'Affichage du texte de l'image
   */
  toggleText() {
    let text = this.elSlider.querySelector(".slide figcaption");
    let icon = text.querySelector("i");

    if (icon.innerText == "add_circle") {
      text.style.right = "0";
      icon.innerText = "remove_circle";
    } else {
      text.style.right = "-20%";
      icon.innerText = "add_circle";
    }
  }

  /**
   * Activation éléments interactifs
   * (bouton "+" d'affichage de texte de l'image)
   */
  _activerBtns() {
    this.elSlider.querySelector(".icon-info").addEventListener("click", () => {
      this.toggleText();
    });
  }
}
