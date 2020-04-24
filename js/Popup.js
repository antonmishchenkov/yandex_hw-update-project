class Popup extends Component {
  constructor(container) {
    super();
    this.container = container;
    this.id = '';
    this.contentClass = '';
    this.content = null;
  }

  get template() {
    return (
      `<div class="popup" id="${this.id}">
          <div class="${this.contentClass}">
              <img src="./images/close.svg" alt="" class="popup__close">
          </div>
      </div>`.trim()
    );
  }

  // инициализация
  init(id, contentClass, content) {
    this.id = id;
    this.contentClass = contentClass;
    this.content = content;

    this.render();
  }

  addContent() {
    this.content.forEach(element => {
      this._element.querySelector(`.${this.contentClass}`).appendChild(element);
    })
  }

  // при открытии каждый раз перезаполняем popup контентом в зависимости от
  // инициализированных параметров
  open() {
    this.addContent();
    this.container.appendChild(this._element);
    this._element.classList.toggle("popup_is-opened");
  }

  close() {
    this._element.classList.toggle("popup_is-opened");
    this.container.removeChild(this._element);
  }

  _onClick(event) {
    if (event.target.classList.contains("popup__close")) {
      this.close();
    } else {
      return;
    }
  }

  setEventListener() {
    this._element.addEventListener('click', this._onClick.bind(this));
  }
}
