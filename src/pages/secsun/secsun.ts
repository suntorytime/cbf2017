import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// custom
import { DetailsPage } from '../details/details';
import * as _ from 'lodash';

@Component({
  selector: 'page-secsun',
  templateUrl: 'secsun.html'
})
export class SecsunPage {

  public list;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = _.sortBy(navParams.get('list'), "startat").filter(function(item) {
      if (new Date(item.startat).getDate() == 22) return item;
    })
  }

  goToDetails(event) {
    this.navCtrl.push(DetailsPage, {event: event})
  }

  ionViewDidLoad() {
  }

}