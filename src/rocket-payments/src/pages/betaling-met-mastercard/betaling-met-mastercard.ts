import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BetalingMetMastercard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-betaling-met-mastercard',
  templateUrl: 'betaling-met-mastercard.html'
})
export class BetalingMetMastercardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BetalingMetMastercardPage');
  }

}
