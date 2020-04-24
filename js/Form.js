class Form {
  constructor(options, fields) {
    this.options = options;
    this.fields = fields;
    this.isValid = false;
  }

  // рендер формы без использования шаблона, так как собираем ее из элементов
  // InputField 
  render() {
    const form = document.createElement(`form`);
    form.name = this.options.name;
    form.classList.add(this.options.className);

    for (let i in this.fields) {
      this.fields[i].parentForm = this;
      form.appendChild(this.fields[i].render());
    }

    const button = document.createElement(`button`);
    this.options.submitClassName.split(' ').forEach(className => {
      button.classList.add(className);
    })
    button.textContent = this.options.submitText;

    form.appendChild(button);
    this._element = form;

    this.validate();
    this.setEventListener();
    return this._element;
  }

  _isValidFields() {
    let valids = [];
    this.fields.forEach(field => {
      valids.push(field.isValid);
    });

    return !valids.includes(false);
  }

  validate() {
    this.isValid = this._isValidFields();

    if (this.isValid){
        this._element.querySelector('button')
          .classList.add("popup__button_enable");
    } else{
        this._element.querySelector('button')
          .classList.remove("popup__button_enable");
    }
  }

  onChange(event) {
    this.validate();
  }

  setSubmitAction(fn) {
    if (typeof fn === 'function') {
      this._submitAction = fn;
    }
  }

  _onSubmit(event) {
    event.preventDefault();

    if (!this.isValid) {//кнопка "выключена", т.е. данные в форме невалидные
        return;
    }

    this._submitAction();
    popup.close();
    this._element.reset();
  }

  setEventListener() {
    this._element.addEventListener('submit', this._onSubmit.bind(this));
  }
}
