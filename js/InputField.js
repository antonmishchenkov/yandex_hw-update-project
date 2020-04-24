class InputField extends Component {
  constructor(options) {
    super();
    this.options = options;
    this.value = '';
    this.errorValue = '';
    this.isValid = false;
    this.validation = 'text';
    this.parentForm = null;
  }

  get template() {
    this.validate();

    let template = `<div>
                    <input type="${this.options.type}"
                           name="${this.options.name}"
                           value="${this.value}"
                           class="${this.options.className}"
                           placeholder="${this.options.placeholder}">
                    </div>`;

    if (this.options.hasErrorContainer) {
      template = template.replace('</div>', '') +
                 `<div class="popup__input-error" aria-live="polite">
                    ${this.errorValue}
                  </div>
                  </div>`;
    }

    return template.trim();
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

  isValid() {
    return this.isValid;
  }

  useValidation(type) {
    this.validation = type;
  }

  validate() {
    switch (this.validation) {
      case 'text':
        this.validateText();
        break;
      case 'link':
        this.validateLink();
        break;
    }
  }

  validateText() {
    switch (validateLenghtStr(this.value, 2, 30)) {
        case 0: this.errorValue = "Это обязательное поле"; this.isValid = false; break;
        case 1: this.errorValue = ""; this.isValid = true; break;
        case 2: this.errorValue = "Должно быть от 2 до 30 символов"; this.isValid = false; break;
    }
  }

  validateLink() {
    if (validURL(this.value)){
        this.errorValue = "";
        this.isValid = true;
    } else{
        this.errorValue = "Здесь должна быть ссылка";
        this.isValid = false;
    }
  }

  _onChange(event) {
    this.value = event.target.value;
    this.validate();
    this._element.querySelector(`.popup__input-error`).textContent = this.errorValue;
    if (this.parentForm) {
      this.parentForm.onChange();
    }
  }

  setEventListener() {
    this._element.addEventListener('input', this._onChange.bind(this));
  }
}
