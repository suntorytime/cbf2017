import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// custom
import { Dataservice } from '../../providers/dataservice'

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [Dataservice]
})
export class DetailsPage {

  public description = "";
  public event;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataservice: Dataservice) {

    this.event = navParams.get('event');

    this.dataservice.getDetails(this.event).subscribe(
      data => this.description = data.text(),
      err => {
        if(err.status == 404) {
          this.description = "This event does not have a description"
        } else {
          console.error(err);
        }
      },
      () => console.log('getDetails completed')
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
