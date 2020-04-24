//const cards = document.querySelector('.places-list');
const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
const popupContainer = document.querySelector(".popup__container");

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Нургуш',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
        name: 'Тулиновка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
        name: 'Остров Желтухина',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
        name: 'Владивосток',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
    }
];

// инициализируем все необходимые компоненты
const cardList = new CardList(cards, initialCards);
const inputCardName = new InputField(OPTIONS.inputs.cardName);
const inputCardLink = new InputField(OPTIONS.inputs.cardLink);
const inputProfileName = new InputField(OPTIONS.inputs.profileName);
const inputProfileJob = new InputField(OPTIONS.inputs.profileJob);
const formAddCard = new Form(OPTIONS.forms.addCard, [inputCardName, inputCardLink]);
const formProfile = new Form(OPTIONS.forms.profile, [inputProfileName, inputProfileJob]);
const popup = new Popup(popupContainer);
const popupTitle = document.createElement('h3');
const popupImage = document.createElement('img');

// рендерим карточки и устанавлиаем валидацию для поля ссылки
cardList.render();
inputCardLink.useValidation('link');
popupTitle.classList.add('popup__title');
popupImage.classList.add('popup__image');
popupImage.src = 'https://images.unsplash.com/photo-1560098332-0455d6f13087';

function toggleFormAdd() { //коллбэк для открытия и закрытия формы добавления карточки
    popupTitle.textContent = OPTIONS.popups.addCard.title;

    // инициализируем popup
    popup.init(
      OPTIONS.popups.addCard.id,
      OPTIONS.popups.addCard.contentClass,
      [popupTitle, formAddCard.render()]
    );

    // устанавливаем событие на сабмит формы
    formAddCard.setSubmitAction(submitFormAdd);
    popup.open();
}

function openFormProfile() { //коллбэк для открытия формы профиля
    popupTitle.textContent = OPTIONS.popups.profile.title;
    inputProfileName.setValue(userInfoName.textContent);
    inputProfileJob.setValue(userInfoJob.textContent);
    formProfile.setSubmitAction(submitFormProfile);

    popup.init(
      OPTIONS.popups.profile.id,
      OPTIONS.popups.profile.contentClass,
      [popupTitle, formProfile.render()]
    );

    popup.open();
}

function submitFormProfile() { //коллбэк для сабмита формы профиля
    userInfoName.textContent = document.forms.profile.elements.name.value;
    userInfoJob.textContent = document.forms.profile.elements.job.value;
}

function submitFormAdd() {
    const card = new Card(
      document.forms.new.elements.name.value,
      document.forms.new.elements.link.value
    );
    // добавляем новую карточку
    cardList.addCard(card.create());
}

function initCallback() {
    // нажатие на кнопку +
    const button = document.querySelector(".user-info__button");
    button.addEventListener("click", toggleFormAdd);

    // нажатие на кнопку Edit
    const buttonEdit = document.querySelector(".button.user-info__edit");
    buttonEdit.addEventListener("click", openFormProfile);
}

initCallback();
