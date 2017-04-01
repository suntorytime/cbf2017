import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class EventService {
  static get parameters() {
    return  [[Http]];
  }

  constructor (private http:Http) {

  }

  searchEvents(eventName) {
    var response = {description: "this is great!"};
    return response;
  }
}