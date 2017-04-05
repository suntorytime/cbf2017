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
    let events = this.http.get('https://sfcherryblossom.org/wp-content/uploads/2017/ScheduleData/NCCBFSchedule.json');
    console.log(events);
    return events;
  }

  getDetails(event) {
    return this.http.get(`${event.url}`);
  }

}
