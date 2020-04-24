const OPTIONS = {
  inputs: {
    cardName: {
      type: 'text',
      name: 'name',
      className: 'popup__input popup__input_type_name',
      placeholder: 'Название',
      hasErrorContainer: true
    },
    cardLink: {
      type: 'text',
      name: 'link',
      className: 'popup__input popup__input_type_link-url',
      placeholder: 'Ссылка на картинку',
      hasErrorContainer: true
    },
    profileName: {
      type: 'text',
      name: 'name',
      className: 'popup__input',
      placeholder: 'Имя',
      hasErrorContainer: true
    },
    profileJob: {
      type: 'text',
      name: 'job',
      className: 'popup__input',
      placeholder: 'О себе',
      hasErrorContainer: true
    }
  },

  forms: {
    addCard: {
      name: 'new',
      className: 'popup__form',
      submitText: '+',
      submitClassName: 'button popup__button'
    },
    profile: {
      name: 'profile',
      className: 'popup__form',
      submitText: 'Сохранить',
      submitClassName: 'button popup__button popup__button_text18'
    }
  },

  popups: {
    addCard: {
      id: 'add-card',
      contentClass: 'popup__content',
      title: 'Новое место'
    },
    profile: {
      id: 'profile',
      contentClass: 'popup__content',
      title: 'Редактировать профиль'
    },
    bigImage: {
      id: 'big-size-image',
      contentClass: 'popup__content-image',
      title: null
    }
  }
}
