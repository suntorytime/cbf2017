import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

// custom
import { Dataservice } from '../../providers/dataservice'
import { DetailsPage } from '../details/details';
import { FirstSatPage } from '../first-sat/first-sat';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Dataservice]
})

export class HomePage {

  public foundEvents;

  constructor(public navCtrl: NavController, private dataservice: Dataservice) {}

  ionViewDidLoad() {
    // console.log("I'm alive!");
    this.getEvents();
  }

  getEvents() {
      this.dataservice.getEvents().subscribe(
          data => {
              this.foundEvents = data.json();
          },
          err => console.error(err),
          () => console.log('getEvents completed')
      );
  };

  getSaturday() {
    this.navCtrl.push(FirstSatPage, {list: this.foundEvents})
  };

  goToDetails(event) {
    this.navCtrl.push(DetailsPage, {event: event})
  }

}

