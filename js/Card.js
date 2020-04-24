class Card extends Component {
  constructor(name, url) {
    super();
    this.name = name;
    this.url = url;
  }

  get template() {
    return (
      `<div class="place-card">
        <div class="place-card__image" style="background-image: url(${this.url});">
          <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
          <h3 class="place-card__name">${this.name}</h3>
          <button class="place-card__like-icon"></button>
        </div>
      </div>`.trim()
    );
  }

  create() {
    return this.render();
  }

  like() {
    this._element.querySelector('.place-card__like-icon').classList.toggle("place-card__like-icon_liked");
  }

  remove() {
    this.removeItem();
  }

  _onClick(event) {
    if (event.target.classList.contains("place-card__like-icon")) {
      this.like();
    } else {
      if (event.target.classList.contains("place-card__delete-icon")) {
        this.remove();
      } else {
        if (event.target.classList.contains("place-card__image")){
          popupImage.src = this.url;
          popup.init(
            OPTIONS.popups.bigImage.id,
            OPTIONS.popups.bigImage.contentClass,
            [popupImage]
          );
          popup.open();
        }
      }
    }
  }

  setEventListener() {
    this._element.addEventListener('click', this._onClick.bind(this));
  }
}
