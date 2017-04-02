import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Dataservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Dataservice {

  constructor(public http: Http) {
    console.log('Hello Dataservice Provider');
  }

  getEvents() {
    let events = this.http.get('data.json');
    return events;
  }

  getDetails(event) {
    return this.http.get(`${event.url}`);
  }

  getSaturday() {
    let totalEvents = this.http.get('data.json');
    var eventsCount = 174;
    var satEvents = [];
    console.log(eventsCount);
    console.log(totalEvents[0]);
    for (var i = 0; i<eventsCount; i++) {
      if (new Date(totalEvents[i].startat).getDate() == 8) {
        console.log(totalEvents[i]);
        satEvents.push(totalEvents[i]);
      }
    }
    return satEvents;
  };

}
