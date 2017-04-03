import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// custom
// import { Dataservice } from '../../providers/dataservice'
import { DetailsPage } from '../details/details';
// import { Firstsat } from '../../pipes/firstsat.pipe';
import * as _ from 'lodash';

/*
  Generated class for the FirstSat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-first-sat',
  templateUrl: 'first-sat.html'
})
export class FirstSatPage {

  public list;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = _.sortBy(navParams.get('list'), "startat").filter(function(item) {
      if (new Date(item.startat).getDate() == 8) return item;
    })
    console.log(_.sortBy(this.list, "startat"));
    console.log(this.list);
  }

  goToDetails(event) {
    this.navCtrl.push(DetailsPage, {event: event})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstSatPage');
    // console.log(this.navParams.get('events'));
  }

}
