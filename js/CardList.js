class CardList {
  constructor(container, cardList) {
    this.container = container;
    this.cardList = cardList;
  }

  addCard(card) {
    this.container.appendChild(card);
  }

  render() {
    this.cardList.forEach(item => {
      const card = new Card(item.name, item.link);
      this.container.appendChild(card.create());
    })
  }
}
