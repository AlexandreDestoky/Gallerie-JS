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
    this.elSlider.setAttribute("id",this.id);
    this.elSlider.classList.add("slide");
    this.elSlider.innerHTML = this.sliderTemplate;
    this.parent.elementsSlider.append(this.elSlider);

    //Pour le menu
    this.elMenu = document.createElement("li");
    this.elMenu.innerHTML = this.menuTemplate;
    this.parent.elementsMenu.append(this.elMenu);


  }
}
