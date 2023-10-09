export default class VisualConstructor {
  static createDate(timestamp) {
    const date = new Date(timestamp);

    let dateHours = date.getHours();
    let dateMinutes = date.getMinutes();
    let dateDay = date.getDate();
    let dateMonth = date.getMonth() + 1;

    dateHours = (dateHours < 10) ? `0${dateHours}` : dateHours;
    dateMinutes = (dateMinutes < 10) ? `0${dateMinutes}` : dateMinutes;
    dateDay = (dateDay < 10) ? `0${dateDay}` : dateDay;
    dateMonth = (dateMonth < 10) ? `0${dateMonth}` : dateMonth;

    return `${dateHours}:${dateMinutes} ${dateDay}.${dateMonth}.${date.getFullYear()}`;
  }

  static createMessages(item) {
    item.messages.forEach((element) => {
      const container = document.querySelector('.messages');
      const el = VisualConstructor.createMessage(element);
      container.append(el);
    });
  }

  static createMessage(message) {
    const {
      subject, from, id, received,
    } = message;

    const container = document.createElement('div');
    container.classList.add('message__container');
    container.dataset.id = id;

    const fromEl = document.createElement('div');
    fromEl.classList.add('message__sender');
    fromEl.textContent = from;

    const dateEl = document.createElement('div');
    dateEl.classList.add('date');
    const date = VisualConstructor.createDate(received);
    dateEl.textContent = date;

    const messageEl = document.createElement('div');
    messageEl.classList.add('message__body');
    messageEl.textContent = subject;

    container.append(fromEl, messageEl, dateEl);
    return container;
  }
}
