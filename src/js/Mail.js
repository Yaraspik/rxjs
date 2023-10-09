import {
  fromEvent, switchMap, interval, catchError, of, takeUntil, map,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import VisualConstructor from './VisualConstructor';

export default class Mail {
  constructor(container) {
    // this.url = 'http://localhost:3000/messages/unread';
    this.url = 'https://rxjs-0pcd.onrender.com/messages/unread';
    this.container = container;
    this.messages = container.querySelector('.messages');
    this.btnSubscribe = this.container.querySelector('.btn-subscribe');
    this.btnUnsubscribe = this.container.querySelector('.btn-unsubscribe');
  }

  init() {
    this.unsub$ = fromEvent(this.btnUnsubscribe, 'click');
    fromEvent(this.btnSubscribe, 'click')
      .pipe(
        switchMap(() => this.getIntervalRequest()),
      )
      .subscribe((mess) => {
        if (mess.status !== 'ok') return;
        VisualConstructor.createMessages(mess);
      });
  }

  getRequest() {
    return ajax.getJSON(this.url)
      .pipe(
        catchError((err) => of({
          status: 'no messages',
          messages: '[{}]',
          timestamp: Date.now(),
          err,
        })),
        map((item) => {
          const data = item;
          const { messages } = data;
          data.messages = JSON.parse(messages);
          return data;
        }),
      );
  }

  getIntervalRequest() {
    return interval(2000)
      .pipe(
        switchMap(() => this.getRequest()),
        takeUntil(this.unsub$),
      );
  }
}
