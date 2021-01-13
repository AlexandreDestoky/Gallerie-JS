import sliderTemplate from "./templates/slider";
import menuTemplate from "./templates/menu";

export default class Image {
  constructor(data) {
    this.parent = data.parent;
    this.el;

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
      this.sliderTemplate = this.template.replace(`{{${propriete}}}`, this[propriete]);
      this.menuTemplate = this.template.replace(`{{${propriete}}}`, this[propriete]);
    }
  }
}
