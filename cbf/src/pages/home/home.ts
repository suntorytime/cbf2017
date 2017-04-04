import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

// custom
import { Dataservice } from '../../providers/dataservice'
import { DetailsPage } from '../details/details';
import { FirstSatPage } from '../first-sat/first-sat';
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
    // console.log("I'm alive!");
    this.getEvents();
  }

  // this.list = _.sortBy(navParams.get('list'), "startat").filter(function(item) {
  //   if (new Date(item.startat).getDate() == 8) return item;
  // })

  getEvents() {
      this.dataservice.getEvents().subscribe(
          data => {
              this.foundEvents = _.sortBy(data.json(), 'startat');
              // console.log(data.json())
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

