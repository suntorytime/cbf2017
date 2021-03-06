import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// custom
import { Dataservice } from '../../providers/dataservice'
import { DetailsPage } from '../details/details';
import { FirstSatPage } from '../first-sat/first-sat';
import { FirstsunPage } from '../firstsun/firstsun';
import { SecsatPage } from '../secsat/secsat';
import { SecsunPage } from '../secsun/secsun';
import * as _ from 'lodash';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Dataservice]
})

export class HomePage {

  public foundEvents;

  constructor(public navCtrl: NavController, private dataservice: Dataservice) {}

  ionViewDidLoad() {
    this.getEvents();
  }

  getEvents() {
      this.dataservice.getEvents().subscribe(
          data => {
              this.foundEvents = _.sortBy(data.json(), 'startat');
          },
          err => console.error(err),
          () => console.log('getEvents completed')
      );
  };

  getSaturday() {
    this.navCtrl.push(FirstSatPage, {list: this.foundEvents})
  };

  getSunday() {
    this.navCtrl.push(FirstsunPage, {list: this.foundEvents})
  };

  getSecSat() {
    this.navCtrl.push(SecsatPage, {list: this.foundEvents})
  };

  getSecSun() {
    this.navCtrl.push(SecsunPage, {list: this.foundEvents})
  };

  goToDetails(event) {
    this.navCtrl.push(DetailsPage, {event: event})
  }

}